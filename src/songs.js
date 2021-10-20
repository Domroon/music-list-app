const songs = [
  {
    title: "All Along The Watchtower",
    interpreter: "Bob Dylan",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/All%20Along%20The%20Watchtower.pdf?alt=media&token=2f7b7b95-9a83-465e-b80f-6e92cbc2bc26",
    music:
      "https://www.youtube.com/watch?v=bT7Hj-ea0VE&ab_channel=BobDylanVEVO",
  },
  {
    title: "Because the Night",
    interpreter: "Patti Smith",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Because%20The%20Night%20(Patti%20Smith).pdf?alt=media&token=f6885b90-11fb-41dd-a4c9-17bb2e7024fe",
    music:
      "https://www.youtube.com/watch?v=c_BcivBprM0&ab_channel=pattismithVEVO",
  },
  {
    title: "Beds Are Burning",
    interpreter: "Midnight Oil",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Beds%20Are%20Burning%20Version%202.pdf?alt=media&token=bc22cc79-2a25-48d8-948c-286a841937e6",
    music:
      "https://www.youtube.com/watch?v=ejorQVy3m8E&ab_channel=MidnightOilVEVO",
  },
  {
    title: "Californication",
    interpreter: "Red Hot Chili Peppers",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Californication.pdf?alt=media&token=4b24be91-8c5d-44db-a44f-aab2c6f6a201",
    music:
      "https://www.youtube.com/watch?v=YlUKcNNmywk&ab_channel=RedHotChiliPeppers",
  },
  {
    title: "Don't Look Back In Anger",
    interpreter: "Oasis",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Don't%20look%20back%20in%20anger.pdf?alt=media&token=0d4e0b62-d60b-411c-979a-cbe54b819f19",
    music: "https://www.youtube.com/watch?v=r8OipmKFDeM&ab_channel=Oasis",
  },
  {
    title: "Et letzte Leed",
    interpreter: "BAP",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Et%20letze%20Leed.pdf?alt=media&token=66c7cbe2-51aa-4a11-a74b-4296c8497a89",
    music:
      "https://www.youtube.com/watch?v=geYFObld6KQ&ab_channel=NiedeckensBAP-Topic",
  },
  {
    title: "Hey Joe",
    interpreter: "Jimi Hendrix",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Hey%20Joe.pdf?alt=media&token=b7954627-308e-4d77-8298-6cf4b2e87e06",
    music:
      "https://www.youtube.com/watch?v=rXwMrBb2x1Q&ab_channel=JimiHendrixVEVO",
  },
  {
    title: "Hurt",
    interpreter: "Johnny Cash (?)",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Hurt.pdf?alt=media&token=55e29ffd-efb0-4e9a-846c-bb3f404ffc23",
    music:
      "https://www.youtube.com/watch?v=8AHCfZTRGiI&ab_channel=JohnnyCashVEVO",
  },
  {
    title: "KHE SANH",
    interpreter: "Cold Chisel",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Khe%20Sanh.pdf?alt=media&token=d6000e81-d284-41d8-983c-912af4be912c",
    music: "https://www.youtube.com/watch?v=dTjvG4WJD_A&ab_channel=ColdChisel",
  },
  {
    title: "Knockin' On Heaven's Door",
    interpreter: "Bob Dylan",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Knockin'%20on%20heavens%20door%20G-Dur.pdf?alt=media&token=43d262cc-65f4-43c3-a72d-a480e0c3a6dc",
    music:
      "https://www.youtube.com/watch?v=rm9coqlk8fY&ab_channel=BobDylanVEVO",
  },
  {
    title: "Mr. Jones",
    interpreter: "Counting Crows",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Mr.Jones.pdf?alt=media&token=8240e3f8-d779-487a-b9f8-0e6b8f1d9721",
    music:
      "https://www.youtube.com/watch?v=-oqAU5VxFWs&ab_channel=CountingCrowsVEVO",
  },
  {
    title: "No Surrender",
    interpreter: "Bruce Springsteen",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/No%20Surrender.pdf?alt=media&token=ee43c1b0-11db-413d-a998-c816e9a64420",
    music:
      "https://www.youtube.com/watch?v=txKhQ9cbhgo&ab_channel=BruceSpringsteen-Topic",
  },
  {
    title: "So so long",
    interpreter: "Jane",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/So%20so%20long.pdf?alt=media&token=a5fa150c-63a9-49e5-b5e6-2a1d11a9df9c",
    music:
      "https://www.youtube.com/watch?v=ApU24LtbvO0&ab_channel=FanisTsokanas",
  },
  {
    title: "Thank You",
    interpreter: "Led Zeppelin",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Thank%20You%20.pdf?alt=media&token=dd06dc0e-6e2d-4ce5-a56f-f9d64ec29cbd",
    music: "https://www.youtube.com/watch?v=12KbOAc8vmk&ab_channel=LedZeppelin",
  },
  {
    title: "The Boxer",
    interpreter: "Simon & Garfunkel",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/The%20Boxer.pdf?alt=media&token=b1a7ea11-3aef-4d58-9c8f-0ca4bc493356",
    music:
      "https://www.youtube.com/watch?v=l3LFML_pxlY&ab_channel=SimonGarfunkelVEVO",
  },
  {
    title: "The River (A-Moll)",
    interpreter: "Bruce Springsteen",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/The%20River%20a-moll.pdf?alt=media&token=eaf21e6b-7f90-481b-8201-1eac7d99607d",
    music: "https://www.youtube.com/watch?v=nAB4vOkL6cE&ab_channel=leppst2ty",
  },
  {
    title: "The River (E-Moll)",
    interpreter: "Bruce Springsteen",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/The%20River%20e-moll.pdf?alt=media&token=7ee1e581-4175-45ec-b21a-43ea8e73d3f9",
    music: "https://www.youtube.com/watch?v=nAB4vOkL6cE&ab_channel=leppst2ty",
  },
  {
    title: "Verdamp lang her",
    interpreter: "BAP",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Verdamp%20lang%20her.pdf?alt=media&token=2dfbc76e-6688-497d-82e7-536917227fb8",
    music: "https://www.youtube.com/watch?v=TB751ZCh_zU&ab_channel=Purket1995",
  },
  {
    title: "WILLIN'",
    interpreter: "Little Feat",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Willin'.pdf?alt=media&token=ebee511d-5736-4511-92e5-fba6fc3f80f9",
    music: "https://www.youtube.com/watch?v=Il9VFC6-Inw&ab_channel=Byenia",
  },
  {
    title: "Wish You Were Here",
    interpreter: "Pink Floyd",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Wish%20You%20Were%20Here.pdf?alt=media&token=b9a0f66e-23eb-4a76-8689-f69aff6a8a40",
    music: "https://www.youtube.com/watch?v=IXdNnw99-Ic&ab_channel=chartrand",
  },
  {
    title: "Zombie (A-Moll)",
    interpreter: "The Cranberries",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Zombie%20A-Moll.pdf?alt=media&token=cbc4982b-0a99-4409-9660-0f39939747de",
    music:
      "https://www.youtube.com/watch?v=6Ejga4kJUts&ab_channel=TheCranberriesVEVO",
  },
  {
    title: "Zombie (E-Moll)",
    interpreter: "The Cranberries",
    leadsheet:
      "https://firebasestorage.googleapis.com/v0/b/music-list-andreas.appspot.com/o/Zombie%20E-Moll%202%20Seiten.pdf?alt=media&token=10c87f11-8910-4028-9a5b-393fe27b8831",
    music:
      "https://www.youtube.com/watch?v=6Ejga4kJUts&ab_channel=TheCranberriesVEVO",
  },
]

export default songs
