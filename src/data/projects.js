import alienRescueCapsule from '../pictures/alien-rescue-capsule.png'
import foxInTheHorrorHouseCapsule from '../pictures/fox-in-the-horror-house-capsule.png'
import froggyDaycareCapsule from '../pictures/froggy-daycare-capsule.jpg'
import gettingRidOfItCapsule from '../pictures/getting-rid-of-it-capsule.png'
import nuclearFallCapsule from '../pictures/nuclear-fall-capsule.png'
import shifterCapsule from '../pictures/shifter-capsule.jpg'
import swingSkateCapsule from '../pictures/swing-skate-capsule.gif'

export const projectSections = [
  {
    id: 'steam',
    label: 'Steam games',
    title: 'Steam games.',
    description: 'Games available on Steam or currently in development.',
    projects: [
      {
        title: 'Shifter',
        smallDescription: 'A gravity-shifting third-person roguelike.',
        description:
          'A gravity-shifting third-person roguelike. I built procedural and world graph generation, save and achievement systems, NPC behaviour, combat, parrying, and leaderboards.',
        stack: ['Unity', 'C#', 'Procedural generation', 'Combat systems'],
        status: 'In progress',
        image: shifterCapsule,
        url: 'https://store.steampowered.com/app/1683390/Shifter/',
      },
      {
        title: 'Froggy Daycare',
        smallDescription: 'A daycare management game where players care for frogs.',
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
        smallDescription: 'Get rid of a body without getting caught.',
        description:
          'Get rid of a body without getting caught. I created activities such as cleaning and chopping, a dialogue system with tools for game writers, and a suspicion meter.',
        stack: ['Game systems', 'Dialogue tools'],
        status: 'Play in browser',
        image: gettingRidOfItCapsule,
        url: 'https://n1ppe.itch.io/getting-rid-of-it',
      },
      {
        title: 'Nuclear Fall',
        smallDescription: 'A browser game with procedural terrain generation on a hexagonal grid.',
        description:
          'A browser game with procedural terrain generation on a hexagonal grid. I created roads between towns using {A* pathfinding}, a flexible dice simulator, and tile-triggered events.',
        stack: ['Procedural generation', 'A* pathfinding', 'Hex grids'],
        status: 'Play in browser',
        image: nuclearFallCapsule,
        url: 'https://n1ppe.itch.io/nuclear-fall',
      },
      {
        title: 'Alien Rescue',
        smallDescription: 'Save your alien children from humans or die.',
        description: 'Save your alien children from humans or die.',
        stack: [],
        status: 'Play in browser',
        image: alienRescueCapsule,
        url: 'https://n1ppe.itch.io/alien-rescue',
      },
      {
        title: 'Fox In The Horror House',
        smallDescription: 'A horror game where you play as a fox navigating a haunted house.',
        description: 'A horror game where you play as a fox navigating a haunted house.',
        stack: ['Unity', 'C#', 'Horror mechanics'],
        status: 'Play in browser',
        image: foxInTheHorrorHouseCapsule,
        url: 'https://flanru.itch.io/fox-in-the-horror-house',
      },
      {
        title: 'Swing Skate (one of my first games)',
        smallDescription: 'A skateboarding game with swinging mechanics.',
        description: 'A skateboarding game with swinging mechanics.',
        stack: ['Unity', 'C#', 'Physics'],
        status: 'Play in browser',
        image: swingSkateCapsule,
        url: 'https://n1ppe.itch.io/swing-skate',
      }
    ],
  },
  {
    id: 'mobileApps',
    label: 'Mobile apps',
    title: 'Mobile apps.',
    description: 'Mobile applications I have developed.',
    projects: [
      {
        title: 'Study app for my girlfriend',
        smallDescription: 'Application to help with studying.',
        description: 'Application to help with studying. \n Includes ability to add courses, add their deadlines, and track progress. \n' +
        ' Includes {AI-powered} ability to create markdown notes {from taking pictures of handwritten notes.}',
        stack: ['React Native', 'TypeScript', 'Expo',  'AI features'],
        status: 'Private app',
        image: '', // Add the image import and path here
      },
      {
        title: 'Skydive Application',
        smallDescription: 'An application to assist with skydiving activities.',
        description: 'An application to assist with skydiving activities. \n Includes ability to track jumps, manage equipment, and log experiences.',
        stack: ['React Native', 'TypeScript', 'Expo'],
        status: 'GitHub Repository / School project',
        image: '', // Add the image import and path here
        url: 'https://github.com/Mobiilikehitysprojekti-R15/Mobiilikehitysprojekti', // Add the URL if available
      },

    ]
  },
  {
    id: 'personal tinkering',
    label: 'Personal tinkering',
    title: 'Personal tinkering.',
    description: 'Various personal projects and experiments.',
    projects: [
      {
        title: 'Home Automation',
        smallDescription: 'Automate tasks and control smart devices at home.',
        description: 'I turned an old laptop into a home automation server to automate tasks and control smart devices at home.',
        stack: ['Python', 'Home automation', 'IoT'],
        status: 'Completed',
        image: '', // Add the image import and path here
      }
    ]
  }
]
