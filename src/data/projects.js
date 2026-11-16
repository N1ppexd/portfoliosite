import alienRescueCapsule from '../pictures/alien-rescue-capsule.png'
import froggyDaycareCapsule from '../pictures/froggy-daycare-capsule.jpg'
import gettingRidOfItCapsule from '../pictures/getting-rid-of-it-capsule.png'
import nuclearFallCapsule from '../pictures/nuclear-fall-capsule.png'
import shifterCapsule from '../pictures/shifter-capsule.jpg'

export const projectSections = [
  {
    id: 'steam',
    label: 'Steam games',
    title: 'Steam games.',
    description: 'Games available on Steam or currently in development.',
    projects: [
      {
        title: 'Shifter',
        description:
          'A gravity-shifting third-person roguelike. I built procedural and world graph generation, save and achievement systems, NPC behaviour, combat, parrying, and leaderboards.',
        stack: ['Unity', 'C#', 'Procedural generation', 'Combat systems'],
        status: 'In progress',
        image: shifterCapsule,
        url: 'https://store.steampowered.com/app/1683390/Shifter/',
      },
      {
        title: 'Froggy Daycare',
        description:
          'A daycare management game where players care for frogs and their needs. I developed frog behaviour, a frog state machine, needs such as hunger and hygiene, and a virtual reality version.',
        stack: ['Unity', 'C#', 'State machines', 'Virtual reality'],
        status: 'Coming soon',
        image: froggyDaycareCapsule,
        url: 'https://store.steampowered.com/app/4521720/Froggy_Daycare/',
      },
    ],
  },
  {
    id: 'itch-io',
    label: 'itch.io games',
    title: 'itch.io games.',
    description: 'Small games and game jam projects available to play online.',
    projects: [
      {
        title: 'Getting Rid Of It',
        description:
          'Get rid of a body without getting caught. I created activities such as cleaning and chopping, a dialogue system with tools for game writers, and a suspicion meter.',
        stack: ['Game systems', 'Dialogue tools'],
        status: 'Play in browser',
        image: gettingRidOfItCapsule,
        url: 'https://n1ppe.itch.io/getting-rid-of-it',
      },
      {
        title: 'Nuclear Fall',
        description:
          'A browser game with procedural terrain generation on a hexagonal grid. I added A* roads between towns, a flexible dice simulator, and tile-triggered events.',
        stack: ['Procedural generation', 'A* pathfinding', 'Hex grids'],
        status: 'Play in browser',
        image: nuclearFallCapsule,
        url: 'https://n1ppe.itch.io/nuclear-fall',
      },
      {
        title: 'Alien Rescue',
        description: 'Save your alien children from humans or die.',
        stack: [],
        status: 'Play in browser',
        image: alienRescueCapsule,
        url: 'https://n1ppe.itch.io/alien-rescue',
      },
    ],
  },
]
