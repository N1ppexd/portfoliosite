
import froggyDaycareCapsule from '../pictures/froggy-daycare-capsule.jpg'

export const involvements = [
  {
    title: "Shifter",
    theme: 'shifter',
    description:
      "My solo game project under Ilta Games Oy, where I built core gameplay and systems including procedural generation, combat, and saving.",
    url: "https://store.steampowered.com/app/1683390/Shifter/",
    media: {
      type: 'video',
      autoPlay: true,
      src: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1683390/extras/e6b82e94ac7b00b60d4582b20978ed85.mp4?t=1787417454',
      poster: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/256964023/movie.293x165.jpg?t=1700425725',
      alt: 'Shifter gameplay video',
    },
  },
  {
    title: "Fusion Guards",
    theme: 'fusion',
    description:
      "A live-service game I worked on during my internship at Seppo Gamesmiths Oy, updating and refactoring its Nakama backend.",
    url: "https://play.google.com/store/apps/details?id=com.janeious.fusionguardslive",
    media: {
      type: 'image',
      src: 'https://play-lh.googleusercontent.com/vEBgv_1FhckOZMnLC4SiuttAgyyGp_ynf_gX-KnjgNLIbp6JYnstWS3IhIBy7uSk6FBbbg5QR-KI0J1rnZ8KvUg=w526-h296',
      alt: 'Fusion Guards gameplay screenshot',
    },
  },
  {
    title: "Froggy Daycare",
    theme: 'froggy',
    description:
      "A team project that began at Pelifarmi. I developed frog behaviour, needs and state-machine systems, as well as a VR test version.",
    url: "https://store.steampowered.com/app/4521720/Froggy_Daycare/",
    media: {
      type: 'image',
      src: froggyDaycareCapsule,
      alt: 'Froggy Daycare Steam capsule',
    },
  },
]