import {
  Background,
  Controls,
  Handle,
  MiniMap,
  Position,
  ReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const AREA_COUNT = 4
const MAX_WIDTH = 4
const LEVEL_HEIGHT = 62
const LEVEL_WIDTH = 100
const AREA_GAP = 80
const AREA_WIDTH = (MAX_WIDTH * 2 - 2) * LEVEL_WIDTH + AREA_GAP

function createProceduralGraph() {
  const graphNodes = []
  const graphEdges = []
  let previousAreaEndId = null

  for (let area = 0; area < AREA_COUNT; area += 1) {
    const levelSizes = [
      ...Array.from({ length: MAX_WIDTH }, (_, index) => index + 1),
      ...Array.from({ length: MAX_WIDTH - 1 }, (_, index) => MAX_WIDTH - index - 1),
    ]
    const areaOffset = area * AREA_WIDTH
    const areaNodeIds = []

    levelSizes.forEach((nodeCount, level) => {
      const levelNodeIds = []
      const levelTop = ((MAX_WIDTH - nodeCount) * LEVEL_HEIGHT) / 2

      for (let nodeIndex = 0; nodeIndex < nodeCount; nodeIndex += 1) {
        const id = `area-${area}-level-${level}-node-${nodeIndex}`
        levelNodeIds.push(id)
        graphNodes.push({
          id,
          type: 'procedural',
          position: {
            x: areaOffset + level * LEVEL_WIDTH,
            y: levelTop + nodeIndex * LEVEL_HEIGHT,
          },
          data: {
            label: level === 0 && area === 0
              ? 'Start'
              : level === levelSizes.length - 1
                ? 'Boss fight'
                : 'Level',
            area: area + 1,
          },
        })
      }

      if (areaNodeIds.length > 0) {
        const previousLevel = areaNodeIds[areaNodeIds.length - 1]
        previousLevel.forEach((sourceId, sourceIndex) => {
          const previousCount = previousLevel.length
          const targetCount = levelNodeIds.length
          const targetIndexes = previousCount <= targetCount
            ? [sourceIndex, sourceIndex + 1]
            : [sourceIndex - 1, sourceIndex]

          targetIndexes
            .filter((targetIndex, index, indexes) =>
              targetIndex >= 0 &&
              targetIndex < targetCount &&
              indexes.indexOf(targetIndex) === index)
            .forEach((targetIndex) => {
              graphEdges.push({
                id: `${sourceId}-${levelNodeIds[targetIndex]}`,
                source: sourceId,
                target: levelNodeIds[targetIndex],
                animated: area === 0 && level === 1,
              })
            })
        })
      }

      areaNodeIds.push(levelNodeIds)
    })

    const areaStartId = areaNodeIds[0][0]
    const areaEndId = areaNodeIds[areaNodeIds.length - 1][0]
    if (previousAreaEndId) {
      graphEdges.push({
        id: `${previousAreaEndId}-${areaStartId}`,
        source: previousAreaEndId,
        target: areaStartId,
      })
    }
    previousAreaEndId = areaEndId
  }

  return { nodes: graphNodes, edges: graphEdges }
}

const { nodes, edges } = createProceduralGraph()
const areaColors = ['#3ca7ff', '#43c76f', '#ff3c3c', '#181522']

function ProceduralNode({ data }) {
  return (
    <div className={`procedural-graph-node procedural-graph-node--area-${data.area}`}>
      <Handle type="target" position={Position.Left} />
      {data.label}
      <Handle type="source" position={Position.Right} />
    </div>
  )
}

function ProceduralGraph() {
  return (
    <div className="procedural-graph" aria-label="Procedural generation graph">
      <ReactFlow
        defaultEdgeOptions={{
          style: { stroke: '#ff7171', strokeWidth: 1.5 },
          type: 'straight',
        }}
        edges={edges}
        fitView
        nodes={nodes}
        nodeTypes={{ procedural: ProceduralNode }}
        nodesDraggable={false}
        nodesConnectable={false}
        panOnDrag
        zoomOnScroll={false}
      >
        <Background color="#6d4c4c" gap={24} size={1} />
        <Controls showInteractive={false} />
        <MiniMap
          nodeColor={(node) => {
            return areaColors[node.data?.area - 1] || areaColors[0]
          }}
          maskColor="rgb(7 5 13 / 75%)"
        />
      </ReactFlow>
    </div>
  )
}

export default ProceduralGraph
