import { useId, useRef } from 'react'
import { useSwipe } from './useSwipe.js'

export default function Tabs({
  activeId,
  afterTabs,
  direction,
  label,
  onChange,
  onSwipe,
  panelClassName = '',
  renderContent,
  renderPanels,
  swipeTabs = false,
  tabs,
}) {
  const instanceId = useId()
  const tabRefs = useRef([])
  const swipeHandlers = useSwipe((direction) => {
    if (tabs.length > 1) onSwipe?.(direction)
  })

  const handleKeyDown = (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return

    event.preventDefault()
    const currentIndex = tabs.findIndex((tab) => tab.id === activeId)
    const nextIndex = event.key === 'Home' ? 0
      : event.key === 'End' ? tabs.length - 1
      : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length
    const direction = event.key === 'ArrowLeft' ? 'previous'
      : event.key === 'ArrowRight' ? 'next'
      : nextIndex > currentIndex ? 'next' : 'previous'
    onChange(tabs[nextIndex].id, direction)
    tabRefs.current[nextIndex]?.focus()
  }

  const panels = tabs.map((tab, index) => {
    const active = tab.id === activeId
    const tabId = `${instanceId}-tab-${index}`
    const panelId = tab.panelId ?? `${instanceId}-panel-${index}`

    return (
      <div
        aria-labelledby={tabId}
        className={`tab-panel ${panelClassName} ${active ? `tab-panel--${direction}` : ''}`}
        hidden={!active}
        id={panelId}
        key={`${tab.id}-${active}`}
        {...swipeHandlers}
        role="tabpanel"
        tabIndex={0}
      >
        {active && renderContent(tab.id)}
      </div>
    )
  })

  return (
    <>
      <div
        aria-label={label}
        className="project-tabs"
        onKeyDown={handleKeyDown}
        {...(swipeTabs ? swipeHandlers : {})}
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <button
            aria-controls={tab.panelId ?? `${instanceId}-panel-${index}`}
            aria-selected={tab.id === activeId}
            className="project-tab"
            id={`${instanceId}-tab-${index}`}
            key={tab.id}
            onClick={() => onChange(tab.id)}
            ref={(element) => { tabRefs.current[index] = element }}
            role="tab"
            tabIndex={tab.id === activeId ? 0 : -1}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      {afterTabs}
      {renderPanels(panels)}
    </>
  )
}
