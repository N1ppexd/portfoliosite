import ProceduralGraph from '../ProceduralGraph.jsx'

export default function ExpertiseDialog({ selectedArea, closeDetails, closeButtonRef }) {

    if (!selectedArea) return null

    return (
        <div
            aria-labelledby="expertise-details-title"
            aria-modal="true"
            className="project-dialog-backdrop"
            onClick={(event) => {
                if (event.target === event.currentTarget) closeDetails()
            }}
            role="dialog"
        >
            <div className="project-dialog expertise-dialog">
                <button
                    aria-label="Close expertise details"
                    className="project-dialog-close"
                    onClick={closeDetails}
                    ref={closeButtonRef}
                    type="button"
                >
                    Close
                </button>
                <div className="project-dialog-content">
                    <p className="project-status">Technical expertise</p>
                    <h3 id="expertise-details-title">{selectedArea.title}</h3>
                    {selectedArea.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                    ))}
                    {selectedArea.title === 'Procedural generation' && (
                        <div className="project-dialog-content">
                            <p className="technical-expertise__eyebrow">System example</p>
                            <h3>Full generated level graph for Shifter</h3>
                            <p>
                                This is how the world levels were structured in Shifter. This graph was generated at the start, and each node represents a level in the game world.
                            </p>
                            <p>
                                Some levels were procedurally generated, while others were designed manually to fit the game's narrative and gameplay requirements.
                                Each area in the graph corresponds to a different section of the game world, and the connections between nodes represent the progression from one level to the next.
                            </p>
                            <ProceduralGraph />
                        </div>
                    )}
                    <ul aria-label={`${selectedArea.title} topics`}>
                        {selectedArea.topics.map((topic) => (
                            <li key={topic}>{topic}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}