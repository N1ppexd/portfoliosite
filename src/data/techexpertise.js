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
			"I am interested in practical uses of AI that help people move from an idea to a working result faster. This includes experimenting with AI-assisted note taking for a React Native study helper.",
			"I use AI as a support tool for research, prototyping, and repetitive development tasks, while keeping the final decisions, quality standards, and creative direction human-led.",
		],
		topics: ["Creative workflows", "Rapid prototyping", "Human-led results"],
	},
	{
		number: "03",
		title: "Problem solving",
		description:
			"When something does not work, I break it down, find the root cause, and test focused solutions. I value fixes that make a project more reliable as well as solutions that work now.",
		details: [
			"My approach combines careful debugging with a willingness to simplify a system when that is the better long-term solution. I break complex problems into smaller parts, identify the root cause, and test focused solutions instead of relying on guesswork.",
			"Whether I am refactoring a Nakama backend, tracking down gameplay issues, or designing a new system, I try to leave the project easier to understand and maintain.",
		],
		topics: ["Debugging", "Testing ideas", "Refinement"],
	},
];
