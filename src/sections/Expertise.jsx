
import { useEffect, useRef, useState } from 'react'

import { ChevronIcon } from '../components/ChevronIcon.jsx'
import ExpertiseDialog from '../components/dialocts/ExpertiseDialog.jsx'
import Tabs from '../components/Tabs.jsx'
import Skills from './Skills.jsx'

const views = [
	{ id: 'expertise', label: 'Expertise', panelId: 'expertise-panel' },
	{ id: 'skills', label: 'Skills', panelId: 'skills-panel' },
]

export default function TechnicalExpertise({ expertiseAreas, skills }) {
	const [selectedArea, setSelectedArea] = useState(null)
	const [activeView, setActiveView] = useState(
		() => window.location.hash === '#skills' ? 'skills' : 'expertise',
	)
	const [viewDirection, setViewDirection] = useState('next')
	const closeButtonRef = useRef(null)
	const triggerRef = useRef(null)
	const headingRef = useRef(null)
	const previousViewRef = useRef(null)
	const nextViewRef = useRef(null)

	const selectView = (view, direction) => {
		setViewDirection(direction ?? (view === 'skills' ? 'next' : 'previous'))
		setActiveView(view)
	}

	const restoreFocus = () => {
		requestAnimationFrame(() => {
			const target = triggerRef.current?.isConnected ? triggerRef.current : headingRef.current
			target?.focus()
		})
	}

	useEffect(() => {
		const handleHashChange = () => {
			if (window.location.hash === '#skills') {
				setSelectedArea(null)
				selectView('skills')
			}
			if (window.location.hash === '#expertise') selectView('expertise')
		}
		window.addEventListener('hashchange', handleHashChange)
		return () => window.removeEventListener('hashchange', handleHashChange)
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
		<section className="technical-expertise" id="expertise" aria-labelledby="expertise-title">
			<div className="technical-expertise__inner">
				<header className="technical-expertise__header" id="skills">
					<h2 id="expertise-title" ref={headingRef} tabIndex={-1}>Technical expertise &amp; skills</h2>
					<p className="technical-expertise__intro">
						Explore the ideas, tools, and problem-solving approaches I bring to my projects.
					</p>
				</header>

				<Tabs
					activeId={activeView}
					direction={viewDirection}
					label="Expertise and skills"
					onChange={(view, direction) => {
						if (view !== activeView) selectView(view, direction)
					}}
					onSwipe={(direction) => {
						if (direction > 0 && activeView === 'expertise') selectView('skills')
						if (direction < 0 && activeView === 'skills') selectView('expertise')
					}}
					renderContent={(view) => view === 'expertise' ? (
							<div className="technical-expertise__grid" id="expertise-grid">
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
					) : <Skills skills={skills} />}
					renderPanels={(panels) => (
						<div className="technical-expertise__pagination">
							{activeView === 'skills' && (
								<button
									aria-controls="expertise-panel"
									aria-label="Show expertise"
									className="project-section-nav technical-expertise__previous"
									onClick={() => {
										selectView('expertise')
										requestAnimationFrame(() => nextViewRef.current?.focus())
									}}
									ref={previousViewRef}
									type="button"
								>
									<ChevronIcon direction="left" />
								</button>
							)}
							<div className="technical-expertise__views">{panels}</div>
							{activeView === 'expertise' && (
								<button
									aria-controls="skills-panel"
									aria-label="Show skills"
									className="project-section-nav technical-expertise__next"
									onClick={() => {
										selectView('skills')
										requestAnimationFrame(() => previousViewRef.current?.focus())
									}}
									ref={nextViewRef}
									type="button"
								>
									<ChevronIcon direction="right" />
								</button>
							)}
						</div>
					)}
					tabs={views}
				/>
			</div>

			<ExpertiseDialog closeButtonRef={closeButtonRef} closeDetails={closeDetails} selectedArea={selectedArea} />
		</section>
	);
}
