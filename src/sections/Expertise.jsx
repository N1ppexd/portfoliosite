
export default function TechnicalExpertise({ expertiseAreas }) {
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
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
