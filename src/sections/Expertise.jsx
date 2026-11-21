
import { useEffect, useRef, useState } from 'react'

import { ChevronIcon } from '../components/ChevronIcon.jsx'
import ExpertiseDialog from '../components/dialocts/ExpertiseDialog.jsx'

export default function TechnicalExpertise({ expertiseAreas }) {
	const [selectedArea, setSelectedArea] = useState(null)
	const closeButtonRef = useRef(null)
	const triggerRef = useRef(null)
	const headingRef = useRef(null)
	const previousPageRef = useRef(null)
	const nextPageRef = useRef(null)

	const [pageElementCount, setPageElementCount] = useState(
		() => window.matchMedia('(max-width: 640px)').matches ? 2 : 4,
	)
	const [firstVisibleIndex, setFirstVisibleIndex] = useState(0)
	const pageIndex = Math.min(
		Math.floor(firstVisibleIndex / pageElementCount),
		Math.max(0, Math.ceil(expertiseAreas.length / pageElementCount) - 1),
	)
	const elementIndex = pageIndex * pageElementCount
	const hasMorePages = elementIndex + pageElementCount < expertiseAreas.length

	const restoreFocus = () => {
		requestAnimationFrame(() => {
			const target = triggerRef.current?.isConnected ? triggerRef.current : headingRef.current
			target?.focus()
		})
	}

	useEffect(() => {
		const narrowScreen = window.matchMedia('(max-width: 640px)')
		const updatePageSize = () => setPageElementCount(narrowScreen.matches ? 2 : 4)
		updatePageSize()
		narrowScreen.addEventListener('change', updatePageSize)
		return () => narrowScreen.removeEventListener('change', updatePageSize)
	}, [])

	useEffect(() => {
		if (!selectedArea) return undefined

		// Keep the page behind the expertise dialog from moving.
		const previousOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		closeButtonRef.current?.focus()

		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setSelectedArea(null)
				restoreFocus()
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.body.style.overflow = previousOverflow
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [selectedArea])

	const closeDetails = () => {
		setSelectedArea(null)
		restoreFocus()
	}

	return (
		<section className="technical-expertise" id="expertise" aria-labelledby="expertise-title" href="#expertise">
			<div className="technical-expertise__inner">
				<header className="technical-expertise__header">
					<h2 id="expertise-title" ref={headingRef} tabIndex={-1}>Technical expertise</h2>
					<p className="technical-expertise__intro">
						A closer look at the ideas, tools, and problem-solving approaches I
						bring to my projects.
					</p>
				</header>

				<div className="technical-expertise__pagination">
					{pageIndex > 0 && (
						<button
							aria-controls="expertise-grid"
							aria-label="Previous expertise page"
							className="project-section-nav technical-expertise__previous"
							onClick={() => {
								setFirstVisibleIndex(elementIndex - pageElementCount)
								if (pageIndex === 1) requestAnimationFrame(() => nextPageRef.current?.focus())
							}}
							ref={previousPageRef}
							type="button"
						>
							<ChevronIcon direction="left" />
						</button>
					)}
					<div className="technical-expertise__grid" id="expertise-grid">
					{expertiseAreas.slice(elementIndex, elementIndex + pageElementCount).map((area) => (
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
					{hasMorePages && (
						<button
							aria-controls="expertise-grid"
							aria-label="Next expertise page"
							className="project-section-nav technical-expertise__next"
							onClick={() => {
								setFirstVisibleIndex(elementIndex + pageElementCount)
								if (elementIndex + 2 * pageElementCount >= expertiseAreas.length) {
									requestAnimationFrame(() => previousPageRef.current?.focus())
								}
							}}
							ref={nextPageRef}
							type="button"
						>
							<ChevronIcon direction="right" />
						</button>
					)}
				</div>
			</div>

			<ExpertiseDialog closeButtonRef={closeButtonRef} closeDetails={closeDetails} selectedArea={selectedArea} />
		</section>
	);
}
