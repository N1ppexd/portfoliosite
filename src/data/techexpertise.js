export const expertiseAreas = [
	{
		number: "01",
		title: "Procedural generation",
		description:
			"I build systems that create varied content from a clear set of rules. The challenge is balancing useful randomness with enough control to make every result feel intentional.",
		details: [
			"For Shifter, I created a three-dimensional world-generation system built around the idea that the player could walk on walls in every direction. This required thinking about the world as connected surfaces rather than a conventional flat level, while keeping traversal, collisions, and generated layouts consistent.",
			"I also experimented with algorithms such as Wave Function Collapse to explore how constrained rules could produce interesting, structured environments while still leaving room for variation.",
			"For Nuclear Fall, I created a terrain generator using Perlin noise and custom curves to shape a hexagon-grid world. I used the flatter parts of the generated terrain to place cities and towns, then connected them with roads using the A* algorithm. The road system changed the weights of tiles based on their altitude, making routes avoid dramatic elevation changes instead of simply choosing the shortest path.",
		],
		topics: ["Rule-based systems", "Iteration", "Balancing"],
	},
	{
		number: "02",
		title: "AI tools",
		description:
			"I use AI tools, such as agents and custom skills, to perform tasks quicker and more efficiently.",
		details: [
			"I use AI tools to improve my workflow, automate repetitive tasks, and accelerate the prototyping process while ensuring that the final output remains under human control. ",
			"For example, I have used AI agents to quickly generate prototypes and test ideas, which allowed me to iterate faster and focus on refining the final product. "+
			" I have also made custom AI skills to handle specific tasks and to make sure the output from agentic coding is understandable and well structured, to make code review easier.",
		],
		topics: ["Creative workflows", "Rapid prototyping", "Human-led results"],
	},
	{
		number: "03",
		title: "Code Patterns & Structure",
		description:
			"Great understanding of code patterns, architecture, and maintainable structure. Especially when it comes to game development, but also in other areas.",
		details: [
			"I have lots of experience in designing and creating maintainable code. For example in Shifter. I had to implement things in such a way that the code is clean and easy to understand," +
			" Making sure that adding new functionality is easy and does not introduce unnecessary complexity.",
			" I also pay attention to code readability and consistency, ensuring that the codebase remains approachable for both current and future team members.",
			" I try to apply the principles of \"Programming Patterns\" and software design best practices to ensure that the code remains maintainable, scalable, and easy to understand.",
			" This has been especially important in game development, where complex systems and interactions require a well-structured and maintainable codebase." +
			" And with game designers, it is crucial to design the code in a way that supports easy adjustments and modifications to gameplay mechanics quickly. ",
			" If this is not done correctly, it can lead to the game being nearly impossible to complete."
		],
		topics: ["Code patterns", "Architecture", "Maintainability"],
	},
];
