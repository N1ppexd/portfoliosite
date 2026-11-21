export const expertiseAreas = [
	{
		number: "01",
		title: "Code Patterns and Structure",
		description:
			"I have a strong understanding of code patterns, architecture, and maintainable structure, especially in game development.",
		details: [
			"I have extensive experience designing and creating maintainable code. For example, while working on Shifter, I implemented systems in a way that kept the code clean and easy to understand," +
			" making it easier to add new functionality without introducing unnecessary complexity.",
			"I also pay attention to code readability and consistency, ensuring that the codebase remains approachable for both current and future team members.",
			"I try to apply programming patterns and software design best practices to keep the code maintainable, scalable, and easy to understand.",
			"This has been especially important in game development, where complex systems and interactions require a well-structured codebase." +
			" When working with game designers, it is crucial to design code that supports quick adjustments and modifications to gameplay mechanics.",
			"If this is not done correctly, the game can become nearly impossible to complete."
		],
		topics: ["Code patterns", "Architecture", "Maintainability"],
	},
	{
		number: "02",
		title: "Agentic coding",
		description:
			"I use AI tools, such as agents and custom skills, to perform tasks more quickly and efficiently.",
		details: [
			"I use AI tools to improve my workflow, automate repetitive tasks, and accelerate the prototyping process while ensuring that the final output remains under human control.",
			"For example, I have used AI agents to generate prototypes and test ideas quickly, which has allowed me to iterate faster and focus on refining the final product."+
			" I have also created custom AI skills for specific tasks, making the output from agent-assisted coding easier to understand and review.",
		],
		topics: ["Creative workflows", "Rapid prototyping", "Human-led results"],
	},
	{
		number: "03",
		title: "Problem Solving and Critical Thinking",
		description:
			"I am skilled at analyzing complex problems and developing effective solutions.",
		details: [
			"I love difficult technical problems and solving them creatively.",
			"For example, when I had to come up with a solution for how to make the frogs in Froggy Daycare behave the way they're supposed to, " + 
			" While also making sure that adding new behavior, tasks and personalities would be as easy as possible.",
			"This required me to think about frog states, their activities and how to design a system that could handle both current and future behaviors seamlessly.",
			"For the FUSION GUARDS, I had to refactor huge amounts of code that was full of questionable design choices and technical debt, I had to implement new solutions" +
			" in a way that improved the performance of the backend, and made old overly complex code more maintainable. I also got rid of old unused code and implemented better replacements."
			],
		topics: ["Analytical thinking", "Solution development", "Decision making"],
	},
	{
		number: "04",
		title: "Procedural generation",
		description:
			"I build systems that create varied content from a clear set of rules. The challenge is balancing useful randomness with enough control to make every result feel intentional.",
		details: [
			"For Shifter, I created a three-dimensional world-generation system built around the idea that the player could walk on walls in every direction. This required thinking about the world as connected surfaces rather than a conventional flat level, while keeping traversal, collisions, and generated layouts consistent.",
			"I also experimented with algorithms such as Wave Function Collapse to explore how constrained rules could produce interesting, structured environments while still leaving room for variation.",
			"For Nuclear Fall, I created a terrain generator using Perlin noise and custom curves to shape a hexagon-grid world. I used the flatter parts of the generated terrain to place cities and towns, then connected them with roads using the A* algorithm. The road system changed the weights of tiles based on their altitude, making routes avoid dramatic elevation changes instead of simply choosing the shortest path.",
		],
		topics: ["Rule-based systems", "Iteration", "Balancing"],
	},/*
	{
		number: "05",
		title: "Collaboration and Communication",
		description:
			"I excel at collaborating with team members and communicating complex technical concepts effectively.",
		details: [
			"I prioritize clear and concise communication to ensure that all team members are on the same page.",
			"I actively participate in code reviews, providing constructive feedback and learning from others.",
			"I use collaboration tools and practices to facilitate smooth teamwork, especially in remote or distributed teams.",
			"By fostering a collaborative environment, I help the team achieve better results and maintain a positive working atmosphere."
		],
		topics: ["Team collaboration", "Communication", "Code reviews"],
	},
	{
		number: "06",
		title: "Adaptability and Learning",
		description:
			"I am adept at quickly adapting to new technologies and learning new skills as needed.",
		details: [
			"I embrace change and am open to exploring new tools, frameworks, and methodologies.",
			"I continuously seek opportunities to expand my knowledge and improve my skill set.",
			"I adapt my approach based on project requirements and team dynamics to ensure successful outcomes.",
			"By staying current with industry trends, I can bring innovative solutions to the team and projects."
		],
		topics: ["Adaptability", "Continuous learning", "Innovation"],
	}*/
];
