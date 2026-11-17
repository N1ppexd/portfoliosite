
import { useEffect, useRef, useState } from 'react'

export default function TechnicalExpertise({ expertiseAreas }) {
	const [selectedArea, setSelectedArea] = useState(null)
	const closeButtonRef = useRef(null)
	const triggerRef = useRef(null)

	useEffect(() => {
		if (!selectedArea) return undefined

		closeButtonRef.current?.focus()

		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setSelectedArea(null)
				requestAnimationFrame(() => triggerRef.current?.focus())
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [selectedArea])

	const closeDetails = () => {
		setSelectedArea(null)
		requestAnimationFrame(() => triggerRef.current?.focus())
	}

	return (
		<section className="technical-expertise" id="expertise" aria-labelledby="expertise-title" href="#expertise">
			<div className="technical-expertise__inner">
				<header className="technical-expertise__header">
					<p className="technical-expertise__eyebrow">How I work</p>
					<h2 id="expertise-title">Technical expertise</h2>
					<p className="technical-expertise__intro">
						A closer look at the ideas, tools, and problem-solving approaches I
						bring to my projects.
					</p>
				</header>

				<div className="technical-expertise__grid">
					{expertiseAreas.map((area) => (
						<article className="expertise-card" key={area.number}>
							<button
								className="expertise-card__button"
								onClick={(event) => {
									triggerRef.current = event.currentTarget
									setSelectedArea(area)
								}}
								type="button"
							>
								<span className="expertise-card__number" aria-hidden="true">
									{area.number}
								</span>
								<h3>{area.title}</h3>
								<p>{area.description}</p>
								<ul className="expertise-card__topics" aria-label={`${area.title} topics`}>
									{area.topics.map((topic) => (
										<li key={topic}>{topic}</li>
									))}
								</ul>
								<span className="expertise-card__prompt">View details <span aria-hidden="true">↗</span></span>
							</button>
						</article>
					))}
				</div>
			</div>

			{selectedArea && (
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
							<ul aria-label={`${selectedArea.title} topics`}>
								{selectedArea.topics.map((topic) => (
									<li key={topic}>{topic}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
