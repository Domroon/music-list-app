const songs = [
  {
    title: "A Forest",
    interpreter: "The Cure",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/A%20forest%20%20The%20Cure.pdf?alt=media&token=8dacd816-2d8c-4752-b643-7422e953f058",
    music: "",
  },
  {
    title: "All Along The Watchtower",
    interpreter: "Bob Dylan",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/All%20Along%20The%20Watchtower.pdf?alt=media&token=09f0f5db-6b02-4dc6-9252-1e03f20bb76f",
    music: "",
  },
  {
    title: "51 State",
    interpreter: "New Model Army",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/51st%20State.pdf?alt=media&token=db88b8fe-6de8-4fec-8336-0ff7b3fbf50c",
    music: "",
  },
  {
    title: "Beds Are Burning",
    interpreter: "Midnight Oil",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Beds%20Are%20Burning%20Version%202.pdf?alt=media&token=c646143c-4064-4ddb-905c-00004864d925",
    music: "",
  },
  {
    title: "The Boys of summer",
    interpreter: "Don Henley Eagles",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/The%20Boys%20Of%20Summer.pdf?alt=media&token=5d844175-37d2-4abd-b61f-1f6e37897c39",
    music: "",
  },
  {
    title: "Brothers in arms",
    interpreter: "Dire Straits",
    leadsheet: "",
    music: "",
  },
  {
    title: "Burn",
    interpreter: "The Cure",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Burn%20%20%20The%20Cure.pdf?alt=media&token=ec5f4d01-e9d6-407b-acb2-14d7fa161170",
    music: "",
  },
  {
    title: "Californication",
    interpreter: "Red Hot Chili Peppers",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Californication.pdf?alt=media&token=9893f21f-a9ef-46d8-a4e4-0fe0472985d5",
    music: "",
  },
  {
    title: "Child in time",
    interpreter: "Deep Purple",
    leadsheet: "",
    music: "",
  },
  {
    title: "City of New Orleans",
    interpreter: "Arlo Guthrie",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/City%20of%20New%20Orleans%20%20Arlo%20Guthrie.pdf?alt=media&token=3abead59-7b56-4d5e-b3f8-500109c2dedf",
    music: "",
  },
  {
    title: "Doctor Doctor",
    interpreter: "UFO / M.Schenker",
    leadsheet: "",
    music: "",
  },
  {
    title: "Dont't drag me down",
    interpreter: "Social Disortion",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Don't%20drag%20me%20down.pdf?alt=media&token=7feafa8f-344a-4908-b990-d8f6570a945c",
    music: "",
  },
  {
    title: "Don't Look Back In Anger",
    interpreter: "Oasis",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Don't%20look%20back%20in%20anger.pdf?alt=media&token=11670c37-90cb-4cb6-a18c-0e8b592e2023",
    music: "https://www.youtube.com/watch?v=r8OipmKFDeM&ab_channel=Oasis",
  },
  {
    title: "Down under",
    interpreter: "Men at Work",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Down%20Under%20C-Dur(D-Dur).pdf?alt=media&token=28906b20-2424-4757-86e1-002f931ca5cb",
    music: "",
  },
  {
    title: "Et letzte Leed",
    interpreter: "BAP",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Et%20letze%20Leed.pdf?alt=media&token=7be7c8fe-13be-40b6-a649-6c1538fa70bc",
    music:
      "https://www.youtube.com/watch?v=geYFObld6KQ&ab_channel=NiedeckensBAP-Topic",
  },
  {
    title: "Forever Young",
    interpreter: "Alphaville",
    leadsheet: "",
    music: "",
  },
  {
    title: "Forgotten Years",
    interpreter: "Midnight Oil",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Forgotten%20Years%20.pdf?alt=media&token=f221efaf-4b5e-4547-a5da-07245d841282",
    music: "",
  },
  {
    title: "Fortunate son",
    interpreter: "CCR",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Fortunate%20son.pdf?alt=media&token=b7437580-7afb-4a11-bcce-b65730317661",
    music: "",
  },
  {
    title: "Good riddance",
    interpreter: "Green Day",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Good%20riddance%20G-Dur.pdf?alt=media&token=2bf20103-89d1-4a7e-9a1f-8f0ce45d53dd",
    music: "",
  },
  {
    title: "Gotta know the rules",
    interpreter: "Social Disortion",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Gotta%20know%20the%20rules.pdf?alt=media&token=9c8791ff-d0b0-4ac1-879b-388231be6f71",
    music: "",
  },
  {
    title: "Here comes the sun",
    interpreter: "Beatles",
    leadsheet: "",
    music: "",
  },
  {
    title: "Hey Joe",
    interpreter: "Jimi Hendrix",
    leadsheet: "",
    music:
      "https://www.youtube.com/watch?v=rXwMrBb2x1Q&ab_channel=JimiHendrixVEVO",
  },
  {
    title: "Hurt",
    interpreter: "Johnny Cash (?)",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Hurt.pdf?alt=media&token=ca0c7b1c-8d53-4ae8-b667-f3d8929b11cd",
    music:
      "https://www.youtube.com/watch?v=8AHCfZTRGiI&ab_channel=JohnnyCashVEVO",
  },
  {
    title: "Jupp",
    interpreter: "BAP",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Jupp.pdf?alt=media&token=8ec0bc32-a977-4e6c-9381-d096397539ca",
    music: "",
  },
  {
    title: "Just like heaven",
    interpreter: "The cure",
    leadsheet: "",
    music: "",
  },
  {
    title: "KHE SANH",
    interpreter: "Cold Chisel",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Khe%20Sanh.pdf?alt=media&token=5ae649d8-8940-4c8b-94ea-48456db27718",
    music: "https://www.youtube.com/watch?v=dTjvG4WJD_A&ab_channel=ColdChisel",
  },
  {
    title: "Kick it out",
    interpreter: "Fury in the slaughterhouse",
    leadsheet: "",
    music: "",
  },
  {
    title: "Knockin' On Heaven's Door",
    interpreter: "Bob Dylan",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Knockin'%20on%20heavens%20door%20G-Dur.pdf?alt=media&token=0e06c9e8-cb18-4582-a9bc-777762999a8a",
    music:
      "https://www.youtube.com/watch?v=rm9coqlk8fY&ab_channel=BobDylanVEVO",
  },
  {
    title: "Learning to fly",
    interpreter: "Tom Petty",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Learning%20To%20Fly.pdf?alt=media&token=4a89a84b-4b02-4adc-bcfd-8d57be8d63a8",
    music: "",
  },
  {
    title: "Let it be",
    interpreter: "Beatles",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Let%20It%20Be.pdf?alt=media&token=f9706f8c-0404-4eb3-8faf-3011d50dac62",
    music: "",
  },
  {
    title: "Listen to your heart",
    interpreter: "Roxette",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Listen%20To%20Your%20Heart.pdf?alt=media&token=c23f8bf6-c72b-4d8d-847e-4d2e75a062ab",
    music: "",
  },
  {
    title: "Little wing",
    interpreter: "Jimi Hendrix",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Little%20Wing.pdf?alt=media&token=2f3be7f2-53df-4da3-b361-2c8bcb3dd429",
    music: "",
  },
  {
    title: "Lost for words",
    interpreter: "Pink Floyd",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Lost%20for%20words%20%20Pink%20Floyd.pdf?alt=media&token=cfdd3d57-8179-405e-8c30-c60b6f836881",
    music: "",
  },
  {
    title: "Death of a clown",
    interpreter: "Dave Davies",
    leadsheet: "",
    music: "",
  },
  {
    title: "No Surrender",
    interpreter: "Bruce Springsteen",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/No%20Surrender%20C-Dur.pdf?alt=media&token=9a0c6201-b476-4b78-895f-f91210b28a74",
    music:
      "https://www.youtube.com/watch?v=txKhQ9cbhgo&ab_channel=BruceSpringsteen-Topic",
  },
  {
    title: "On the turning away",
    interpreter: "Pink Floyd",
    leadsheet: "",
    music: "",
  },
  {
    title: "Paranoid",
    interpreter: "Black Sabbath",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Paranoid%20.pdf?alt=media&token=a79d53a6-11c0-40c7-bc56-5d06472ec796",
    music: "",
  },
  {
    title: "Rock n Roll",
    interpreter: "Led Zeppelin",
    leadsheet: "",
    music: "",
  },
  {
    title: "Rocki'n in the free",
    interpreter: "Neil Young",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Rockin'%20In%20A%20Free%20World.pdf?alt=media&token=65d56acb-5f4c-4b61-bc1c-03f0fcad3803",
    music: "",
  },
  {
    title: "Smalltown",
    interpreter: "Mellencamp",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Small%20Town.pdf?alt=media&token=6a59beb7-1dbe-4bff-a3d9-0e9087ea87ce",
    music: "",
  },
  {
    title: "So so long",
    interpreter: "Jane",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/So%20so%20long.pdf?alt=media&token=29215bb4-7235-4ab5-81f2-5f065a5448c9",
    music:
      "https://www.youtube.com/watch?v=ApU24LtbvO0&ab_channel=FanisTsokanas",
  },
  {
    title: "Solsbury hill",
    interpreter: "Peter Gabriel",
    leadsheet: "",
    music: "",
  },
  {
    title: "Something good coming",
    interpreter: "Tom Petty",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Something%20Good%20Coming.pdf?alt=media&token=f413eecd-eaa7-44c1-a934-d12070419dd7",
    music: "",
  },
  {
    title: "Stairway to heaven",
    interpreter: "Led Zeppelin",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Stairway%20To%20Heaven.pdf?alt=media&token=6e26a81d-15cd-42e2-9c3e-7a185454bf35",
    music: "",
  },
  {
    title: "Sultans of swing",
    interpreter: "Dire Straits",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Sultans%20Of%20Swing.pdf?alt=media&token=1e3944eb-d346-48d3-bf8c-73bcee320113",
    music: "",
  },
  {
    title: "Talk to the Lawyer",
    interpreter: "David Lindley",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Talk%20to%20the%20lawyer.pdf?alt=media&token=2a277843-a5f9-4774-adaf-516bd2913631",
    music: "",
  },
  {
    title: "Thank You",
    interpreter: "Led Zeppelin",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Thank%20You%20.pdf?alt=media&token=6ad7721b-cda3-4699-9dea-cd3765dee05a",
    music: "https://www.youtube.com/watch?v=12KbOAc8vmk&ab_channel=LedZeppelin",
  },
  {
    title: "The Boxer",
    interpreter: "Simon & Garfunkel",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/The%20Boxer.pdf?alt=media&token=bab8cc06-33eb-464f-bc2a-83cdc4512826",
    music:
      "https://www.youtube.com/watch?v=l3LFML_pxlY&ab_channel=SimonGarfunkelVEVO",
  },
  {
    title: "The Boys Of Summer",
    interpreter: "Don Henley",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/The%20Boys%20Of%20Summer.pdf?alt=media&token=5d844175-37d2-4abd-b61f-1f6e37897c39",
    music: "",
  },
  {
    title: "The night they drove",
    interpreter: "Dixie down",
    leadsheet: "",
    music: "",
  },
  {
    title: "The River",
    interpreter: "Bruce Springsteen",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/The%20River%20a-moll.pdf?alt=media&token=a75618cd-0bfe-4501-bee5-a62dcd520dcf",
    music: "https://www.youtube.com/watch?v=nAB4vOkL6cE&ab_channel=leppst2ty",
  },
  {
    title: "The ship song",
    interpreter: "Nick Cave",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/The%20Ship%20Song.pdf?alt=media&token=ab216c87-11b5-4c13-8c15-c0ad6b9f6162",
    music: "",
  },
  {
    title: "The Weight",
    interpreter: "The Band",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/The%20weight%20%20The%20Band.pdf?alt=media&token=857e0c6c-70f4-4b67-9112-cbc55da660ad",
    music: "",
  },
  {
    title: "The wind cries",
    interpreter: "Jimi Hendrix",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/The%20Wind%20cries%20Mary%20%20%20Jimi%20Hendrix.pdf?alt=media&token=3ce7f18f-0a9b-4f4e-88c1-a210d6b90969",
    music: "",
  },
  {
    title: "Tunnel of love",
    interpreter: "Dire Straits",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Tunnel%20of%20Love%20%20Dire%20Straits.pdf?alt=media&token=63a271e3-abc5-4077-a8ba-aec8ec985163",
    music: "",
  },
  {
    title: "Verdamp lang her",
    interpreter: "BAP",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Verdamp%20lang%20her.pdf?alt=media&token=7764e673-e658-46f4-8767-57776957df75",
    music: "https://www.youtube.com/watch?v=TB751ZCh_zU&ab_channel=Purket1995",
  },
  {
    title: "Take me home country roads",
    interpreter: "John Denver",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Take%20Me%20Home%2C%20Country%20Roads%20CAPO3.pdf?alt=media&token=af5cab41-bd76-4e09-88e5-1a8252f89985",
    music: "",
  },
  {
    title: "Wheels",
    interpreter: "Foo Fighters",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Wheels%20C-Dur.pdf?alt=media&token=c2761285-11ac-4b9c-bf56-0c77bb9cbfde",
    music: "",
  },
  {
    title: "Willin'",
    interpreter: "Little Feat",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Willin'.pdf?alt=media&token=fbdfb9a1-cab9-4e64-baa6-8b7e81ed515c",
    music: "https://www.youtube.com/watch?v=Il9VFC6-Inw&ab_channel=Byenia",
  },
  {
    title: "Wish You Were Here",
    interpreter: "Pink Floyd",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Wish%20You%20Were%20Here.pdf?alt=media&token=8d4f9106-bff3-45bb-bca4-cf10709bcb56",
    music: "https://www.youtube.com/watch?v=IXdNnw99-Ic&ab_channel=chartrand",
  },
  {
    title: "Zombie",
    interpreter: "The Cranberries",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Zombie%20E-Moll%202%20Seiten.pdf?alt=media&token=1c861c1c-6e18-4fed-98e6-a3a7ec6a5edb",
    music:
      "https://www.youtube.com/watch?v=6Ejga4kJUts&ab_channel=TheCranberriesVEVO",
  },
  {
    title: "Death of a clown",
    interpreter: "Dave Dacies",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Death%20of%20a%20Clown.pdf?alt=media&token=6724a415-a499-4312-8711-a6aa7decf1e9",
    music: "",
  },
]

export default songs
