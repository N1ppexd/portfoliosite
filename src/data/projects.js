import escapeFromPongCapsule from '../pictures/escape-from-pong-capsule.png'
import alienRescueCapsule from '../pictures/alien-rescue-capsule.png'
import foxInTheHorrorHouseCapsule from '../pictures/fox-in-the-horror-house-capsule.png'
import froggyDaycareCapsule from '../pictures/froggy-daycare-capsule.jpg'
import gettingRidOfItCapsule from '../pictures/getting-rid-of-it-capsule.png'
import gatheringCapsule from '../pictures/gathering-capsule.png'
import kabylehamCapsule from '../pictures/kabyleham-capsule.png'
import nuclearFallCapsule from '../pictures/nuclear-fall-capsule.png'
import shifterCapsule from '../pictures/shifter-capsule.jpg'
import swingSkateCapsule from '../pictures/swing-skate-capsule.gif'
import turboDrugsCapsule from '../pictures/turbo-drugs-capsule.png'
import kuoleCapsule from '../pictures/kuole-capsule.png'

// Shifter gallery
//import shifterGallery1 from '../pictures/Shifter/library_capsule_finalSeptember.png'
import shifterGallery2 from '../pictures/Shifter/ShifterNewsPic.png'
import shifterGallery3 from '../pictures/Shifter/ShifterBlueAreaScreenShot.png'
import shifterGallery4 from '../pictures/Shifter/Näyttökuva 2025-01-30 114658.png'
import shifterGallery5 from '../pictures/Shifter/ShifterExplosion.png'
import shifterGallery6 from '../pictures/Shifter/graphStructure.png'

// Nuclear Fall gallery
import nuclearFallGallery1 from '../pictures/NuclearFall/Näyttökuva 2023-12-14 133448.png'
import nuclearFallGallery2 from '../pictures/NuclearFall/Näyttökuva 2023-12-14 132614.png'
import nuclearFallGallery3 from '../pictures/NuclearFall/Näyttökuva 2023-12-11 161927.png'
import nuclearFallGallery4 from '../pictures/NuclearFall/Näyttökuva 2023-12-11 160846.png'
import nuclearFallGallery5 from '../pictures/NuclearFall/Näyttökuva 2023-12-04 002132.png'
import nuclearFallGallery6 from '../pictures/NuclearFall/Näyttökuva 2023-12-04 001928.png'

// Froggy Daycare gallery
import froggyGallery4 from '../pictures/FroggyDaycare/Näyttökuva 2026-10-11 191810.png'
import froggyGallery2 from '../pictures/FroggyDaycare/Näyttökuva 2026-10-11 191658.png'
import froggyGallery3 from '../pictures/FroggyDaycare/Näyttökuva 2026-10-11 174757.png'
import froggyGallery1 from '../pictures/FroggyDaycare/FroggoDayCareLibraryLogo.png'

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
          'A gravity-shifting third-person roguelike. I built systems for procedural and world-graph generation, saving and achievements, NPC behaviour, combat, parrying, and leaderboards.',
        stack: ['Unity', 'C#', 'Procedural generation', 'Combat systems'],
        status: 'In progress',
        image: shifterCapsule,
        gallery: [ shifterGallery2, shifterGallery3, shifterGallery4, shifterGallery5, shifterGallery6],
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
        gallery: [froggyGallery1, froggyGallery2, froggyGallery3, froggyGallery4],
        url: 'https://store.steampowered.com/app/4521720/Froggy_Daycare/',
      },
    ],
  },
  {
    id: 'itch-io',
    label: 'Itch.io games',
    title: 'Itch.io games.',
    description: 'Small games and game jam projects available to play online.',
    projects: [
      {
        title: 'Getting Rid Of It',
        smallDescription: 'Get rid of a body without getting caught.',
        description:
          'Get rid of a body without getting caught. I created activities such as cleaning and chopping up a body, a dialogue system with tools for game writers, and a suspicion meter.',
        stack: ['Game systems', 'Dialogue tools'],
        status: 'Play in browser',
        image: gettingRidOfItCapsule,
        url: 'https://n1ppe.itch.io/getting-rid-of-it',
        repoLink: 'https://github.com/N1ppexd/GettingRidOfItCode',
      },
      {
        title: 'Nuclear Fall',
        smallDescription: 'A browser game with procedural terrain generation on a hexagonal grid.',
        description:
          'A browser game with procedural terrain generation on a hexagonal grid. I created roads between towns using {A* pathfinding}, a flexible dice simulator, and tile-triggered events.',
        stack: ['Procedural generation', 'A* pathfinding', 'Hex grids'],
        status: 'Play in browser',
        image: nuclearFallCapsule,
        gallery: [nuclearFallGallery1, nuclearFallGallery2, nuclearFallGallery3, nuclearFallGallery4, nuclearFallGallery5, nuclearFallGallery6],
        url: 'https://n1ppe.itch.io/nuclear-fall',
        repoLink: 'https://github.com/N1ppexd/NuclearWinterCode',
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
        title: 'Gathering',
        smallDescription: 'A portfolio project I took part in at Seppo Gamesmiths.',
        description: 'This is not a game but a portfolio project: an atmospheric scene created by four artists, with some assistance from programmers.'
                      + ' For this project, I primarily contributed to the environment effects and lighting.',
        stack: ['Unity', 'C#', 'Visual effects'],
        status: 'Play in browser',
        image: gatheringCapsule,
        url: 'https://krapulainen.itch.io/gathering',
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
        smallDescription: 'An application that helps with studying.',
        description: 'An application that helps with studying. \nIt includes the ability to add courses, set deadlines, and track progress. \n' +
        'It also includes an {AI-powered} feature that creates Markdown notes {from pictures of handwritten notes.}',
        stack: ['React Native', 'TypeScript', 'Expo',  'AI features'],
        status: 'Private app',
        image: '', // Add the image import and path here
      },
      {
        title: 'Skydive Application',
        smallDescription: 'An application to assist with skydiving activities.',
        description: 'An application to assist with skydiving activities. \nIt includes the ability to track jumps, see the jump weather, see jump history, etc.',
        stack: ['React Native', 'TypeScript', 'Expo'],
        status: 'GitHub repository / school project',
        image: '', // Add the image import and path here
        url: 'https://github.com/Mobiilikehitysprojekti-R15/Mobiilikehitysprojekti', // Add the URL if available
        repoLink: 'https://github.com/Mobiilikehitysprojekti-R15/Mobiilikehitysprojekti',
      },

    ]
  },
  {
    id: "Game jam projects",
    label: "Game jams",
    title: "Game jams.",
    description: "Games developed during game jams.",
    projects: [
      {
        title: 'Turbo Drugs',
        smallDescription: 'A PlayStation 1 game about drug use, developed in 48 hours during the 2025 Retro Game Jam.',
        description: 'A PlayStation 1 game about drug use. Requires a PlayStation 1 console or emulator.',
        stack: [],
        status: 'Game jam',
        image: turboDrugsCapsule,
        url: 'https://n1ppe.itch.io/turbo-drugs',
      },
      {
        title: 'Käbylehäm',
        smallDescription: 'Play as a traditional toy called a "Käpylehmä." Developed in 48 hours during the 2024 Pelifarmi Game Jam.',
        description: 'A game developed during a game jam that I organized in 2024. In this game, you play as a traditional toy called a "Käpylehmä."',
        stack: [],
        status: 'Game jam',
        image: kabylehamCapsule,
        url: 'https://akit4.itch.io/kabyleham',
      },
      {
        title: 'Kuole!',
        smallDescription: 'Die quickly! Developed alone in 48 hours during a game jam in the summer of 2023.',
        description: 'In this game, your objective is to die as quickly as possible. You play as a head running around a planet with a scythe. Developed in 48 hours during a game jam.'+
                      ' For this game, I created a planetary gravity system using the normal vector of the surface.' +
                      ' I kept the character in the same orientation by taking its forward vector, calculating the cross product with the surface normal to get the right vector,' +
                      ' and rotating the character around the right vector by the angle between the forward vector and the surface normal.',
        stack: [],
        status: 'Game jam',
        image: kuoleCapsule,
        url: 'https://n1ppe.itch.io/kuole',
      },
      {
        title: 'Escape From Pong',
        smallDescription: 'Escape from Pong. Solo-developed in 48 hours during the 2020 Curious Game Jam.',
        description: 'A game developed during a game jam.',
        stack: [],
        status: 'Game jam',
        image: escapeFromPongCapsule,
        url: 'https://n1ppe.itch.io/escape-from-pong',
      }
    ]
  },

  /*
  {
    id: 'personal tinkering',
    label: 'Personal tinkering',
    title: 'Personal tinkering.',
    description: 'Various personal projects and experiments.',
    projects: [
      {
        title: 'Home Automation',
        smallDescription: 'Automate tasks and control smart devices at home.',
        description: 'I turned an old laptop into a home automation server using ubuntu server, to automate tasks and control smart devices at home.',
        stack: ['Home automation', 'IoT'],
        status: 'Completed',
        image: '', // Add the image import and path here
      }
    ]
  }*/
]
