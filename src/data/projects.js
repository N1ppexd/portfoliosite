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
        description: 'Gravity Shifting third person roguelike game',
        stack: ['Unity', 'C#'],
        status: 'In progress',
        image: shifterCapsule,
        url: 'https://store.steampowered.com/app/1683390/Shifter/',
      },
      {
        title: 'Froggy Daycare',
        description:
          'A daycare management game where you take care of frogs and their needs.',
        stack: ['Unity', 'C#'],
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
        description: 'Get rid of a body and do not get caught.',
        stack: [],
        status: 'Play in browser',
        image: gettingRidOfItCapsule,
        url: 'https://n1ppe.itch.io/getting-rid-of-it',
      },
      {
        title: 'Nuclear Fall',
        description: 'A browser game available on itch.io.',
        stack: [],
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
