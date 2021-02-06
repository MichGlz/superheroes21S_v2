const superheroes = [
  {
    id: 7823768246723675,
    powers: ["Unlimited Minions", "JS", "Bloody Rich"],
    outfit: "Big shoulder pads",
    alias: "Lord Destroyer van der Doom",
    mission: "World Domination",
    cape: true,
    weaknesses: ["Has kids", "Curry Herring", "Rainbows"],
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/7/74/Necron10.jpg",
    enemies: 3,
    sidekick: {
      name: "YesMan",
      cape: false,
    },
  },
  {
    id: 1,
    powers: ["Shoveling", "beatboxing"],
    outfit: "Gloves & shovel",
    alias: "ShovelMan",
    mission: "Trees everywhere",
    cape: true,
    weaknesses: ["beer", "Playstation 5"],
    image:
      "https://pbs.twimg.com/profile_images/1143328243782582272/hxgd_dsN.png",
    enemies: 103,
    sidekick: {
      name: "RakeMan",
      cape: true,
    },
  },
  {
    id: 323200,
    powers: ["Superior Strength", "Independent", "Agility"],
    outfit: "All things golden, kick-ass boots and a whip",
    alias: "Wonder Woman",
    mission: "World Peace",
    cape: false,
    weaknesses: ["Sarcasm", "Long Hair", "Shiny Objects"],
    image:
      "https://media4.s-nbcnews.com/j/newscms/2020_53/3438779/201230-wonder-woman-1984-jm-1507_217b92abafb3a8b0b9af8643c2183f92.fit-760w.jpg",
    enemies: 5,
    sidekick: {
      name: "Wonder Girl",
      cape: true,
    },
  },
  {
    id: 16398402951604,
    powers: ["knits super fast", "can turn into liquid", "heavy walk"],
    outfit: "mittens",
    alias: "Thundress",
    mission: "Heavy walks are acceptable",
    cape: false,
    weaknesses: ["weird smells", "bubble baths"],
    image:
      "https://image.freepik.com/free-photo/angry-girl-toy-crown-posing-yellow-space_197531-7210.jpg",
    enemies: 7,
    sidekick: {
      name: "Old mrs Baum",
      cape: true,
    },
  },
  {
    id: 7823768246723675,
    powers: ["Pure awesome"],
    outfit: "Thong of Justice",
    alias: "Eubrick the Taco",
    mission: "Butt kicking",
    cape: true,
    weaknesses: ["Excesive pure awesomeness"],
    image: "https://i.gyazo.com/b5775aec4fe1ee728fe3614b07ecdd6b.png",
    enemies: -1,
    sidekick: {},
  },
  {
    id: 28345762,
    powers: ["Puppies Magnet", "Hell of a Cook", "Travel back in Time"],
    outfit: "Overall with sprinkles",
    alias: "Captain Sprinkles",
    mission: "Rescue all Dogs from the Streets",
    cape: false,
    weaknesses: ["Cupcakes", "Puppies", "Margaritas"],
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/66/92/super-woman-female-superhero-cartoon-clipart-vector-19326692.jpg",
    enemies: 2,
    sidekick: {
      name: "PuppyDoll",
      cape: false,
    },
  },
  {
    id: 782376824123456,
    powers: ["strength", "spider-sense", "agility"],
    outfit: "suit",
    alias: "Spiderman",
    mission: "Destroy bad people",
    cape: false,
    weaknesses: ["Ethyl Chloride pesticide", "family"],
    image:
      "https://www.fumettologica.it/wp-content/uploads/2019/07/Spider-Man-Far-From-Home.jpg",
    enemies: 10,
    sidekick: {
      name: "Ned",
      cape: false,
    },
  },

  {
    id: 1029837102983921,
    powers: [
      "Acess to all streaming services",
      "Good wifi",
      "Shoot fire from hands",
    ],
    outfit: "Track suit",
    alias: "Masked Couch Potato",
    mission: "Stay inside",
    cape: false,
    weaknesses: [
      "Longing for social interaction",
      "Grocery shopping",
      "Sunshine",
    ],
    image: "https://miro.medium.com/max/630/1*pKSKQW90N0CyV4K0pXCu9w.jpeg",
    enemies: 5822763,
    sidekick: {
      name: "Captain Quarantine",
      cape: false,
    },
  },
  {
    id: 7823768246723675,
    powers: ["fire", "magnetism"],
    outfit: "combat suit",
    alias: "invader",
    mission: "assasination",
    cape: false,
    weaknesses: ["ice", "math", "logical argument "],
    image:
      "https://images.pexels.com/photos/4055973/pexels-photo-4055973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    enemies: 3,
    sidekick: {
      name: "Juan",
      cape: false,
    },
  },
  {
    id: 1804725864820182,
    powers: ["Unlimited Positivsm", "Great chef", "Makes the sun comes out"],
    outfit: "Fluffy body",
    alias: "Gully",
    mission: "World Mindfulness",
    cape: false,
    weaknesses: ["Cakes", "Bad words", "Thunders"],
    image:
      "https://st.depositphotos.com/1787196/1330/i/950/depositphotos_13302091-stock-photo-cute-monster.jpg",
    enemies: 1,
    sidekick: {
      name: "Brutus",

      cape: true,
    },
  },
  {
    id: 123456789420,
    powers: ["Consuming large amounts of food", "Lactose tolerant"],
    outfit: "Sweatpants",
    alias: "Super Eater",
    mission: "Eat all the food in the world",
    cape: true,
    weaknesses: ["Always hungry", "Tomatoes"],
    image:
      "https://www.pngkey.com/png/detail/7-73704_fat-superhero-png-jpg-free-library-homer-simpson.png",
    enemies: 1,
    sidekick: {
      name: "Super Cook",
      cape: false,
    },
  },
  {
    id: 187526710,
    powers: ["No Spicy Threshold", "Flying", "Strength when Angry"],
    outfit: "Spandex Chicken Suit in Pastel Colors and Sriracha Bottle ",
    alias: "Angry Chicken Spicy Girl",
    mission: "Spread Fried Chicken to everyone in the World",
    cape: false,
    weaknesses: ["Under-spiced food", "Phone Calls", "Tofu"],
    image: "https://pixy.org/src/194/thumbs350/1949508.jpg",
    enemies: 2,
    sidekick: {
      name: "Sriracha-Boy",
      cape: false,
    },
  },
  {
    id: 1105,
    powers: ["superior strength, speed, agility, flys"],
    alias: "Wonder Woman",
    outfit: "Metalic dress high boots ",
    mission: "Bring peace to the outside world",
    weaknesses: [" vulnerability, weak skin"],
    cape: true,
    image:
      "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/121396611_179104227037715_1065848300839498755_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=4p7Ro4nffh8AX-VwVv9&tp=1&oh=ceab0b0d46ceb62268d6432ccd2b5da7&oe=60490587",
    enemies: 3,
    sidekick: {
      name: "Cassie",
      cape: false,
    },
  },

  {
    id: 7007007,
    powers: ["killer farts", "green farts"],
    outfit: "teddy bear pajamas",
    alias: "Killing Fart",
    mission: "Stop rush hour in the metro",
    cape: false,
    weaknesses: ["Roses", "Baking Soda", "Rain"],
    image:
      "https://images.vice.com/vice/images/articles/meta/2014/12/18/can-you-kill-someone-with-farts-971-1418930757.jpg?crop=1xw:0.8488430583501007xh;center,center",
    enemies: 5,
    sidekick: {
      name: "little bean",
      cape: true,
    },
  },
  {
    id: 13,
    powers: ["Extra loud barking", "Fur attack", "Surprise poop atack"],
    outfit: "Pink mask",
    alias: "Super Paws",
    mission: "Extinguish boredom and undesired baths in the world",
    cape: true,
    weaknesses: ["Cats", "Liquorice"],
    image:
      "https://images.pexels.com/photos/4587984/pexels-photo-4587984.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    enemies: 5,
    sidekick: {
      name: "Rick the Chihuahua",

      cape: false,
    },
  },
  {
    id: 20020,
    powers: ["reading", "cooking", "blueberry cake", "massive hair"],
    outfit: "Minimal BW outfit",
    alias: "Kat de ginger",
    mission: "To inspire kids to dream bigger",
    cape: false,
    weaknesses: [
      "Emotional",
      "Boyfriend who obsesses gummybears",
      "blonde from brain",
    ],
    image:
      "https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_320/images.spreaker.com/original/4bcc84ff017bf2cf8a626349771a265b.jpg",
    enemies: 1,
    sidekick: {
      name: "wine-tribe",
      cape: true,
    },
  },
  {
    id: 200512271,
    powers: [
      "Knows all the memes in the world",
      "Can make a meme within seconds",
    ],
    outfit: "Nerdy shirt and glasses",
    alias: "Lord of memes",
    mission: "Make everything a meme",
    cape: false,
    weaknesses: [
      "Too shy to post it",
      "Cannot communicate without memes",
      "Phone battery",
    ],
    image:
      "https://hybridtechcar.com/wp-content/uploads/2019/04/download-17.png",
    enemies: 2,
    sidekick: {
      name: "That one person who laughs",
      cape: false,
    },
  },
  {
    id: 12937197238,
    powers: ["Sleeping, Napping,"],
    outfit: "Blanket",
    alias: "Sleepy Matt",
    mission: "To find the best sleeping position",
    cape: true,
    weaknesses: ["waking up", "coffee", "exercise"],
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/20170801151554-GettyImages-643310502.jpeg?width=700&crop=2:1",
    enemies: 5,
    sidekick: {
      name: "Blankie",
      cape: false,
    },
  },
  {
    id: 782364849362,
    powers: ["Feeds Sharks", "Gives Joy to Ocean", "Farts Rainbows"],
    outfit: "Shark Skin Tight jacket",
    alias: "Lady of Sharks",
    mission: "Save Sharks",
    cape: true,
    weaknesses: ["Loves Ocean", "Has Sensitive Nipples"],
    image:
      "https://seanmills6.files.wordpress.com/2020/08/shark-list-03.jpg?w=524",
    enemies: 1,
    sidekick: {
      name: "Morena",
      cape: false,
    },
  },
  {
    id: 7823768246723675,
    powers: ["Unlimited Minions", "JS", "Bloody Rich"],
    outfit: "Big shoulder pads",
    alias: "Lord Destroyer van der Doom",
    mission: "World Domination",
    cape: true,
    weaknesses: ["Has kids", "Curry Herring", "Rainbows"],
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/7/74/Necron10.jpg",
    enemies: 3,
    sidekick: {
      name: "YesMan",

      cape: false,
    },
  },
  {
    id: 122409409283,
    powers: ["Rainfall", "Super Speed Plant Growth"],
    outfit: "Green Catsuit",
    alias: "The Green Machine",
    mission: "A Greener Earth",
    cape: true,
    weaknesses: ["Cloud Cover", "Hurricane", "Hailstorms"],
    image:
      "https://comps.canstockphoto.com/ecological-superhero-woman-in-green-clipart-vector_csp49296855.jpg",
    enemies: 1,
    sidekick: {
      name: "SunChild",
      cape: false,
    },
  },
  {
    id: 44553377,
    powers: ["Unlimited webs", "CSS"],
    outfit: "red morph suit",
    alias: "Queen of England",
    mission: "World Peace",
    cape: false,
    weaknesses: ["Puppies", "Coffee", "Ice"],
    image:
      "https://images.pexels.com/photos/2859016/pexels-photo-2859016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    enemies: 4,
    sidekick: {
      name: "NoBody",
      cape: false,
    },
  },
  {
    id: 6966131228,
    powers: ["extreme disorganization, stain master, puddle stomper"],
    outfit: "coffe spilled t-shirt, yesterday's jeans",
    alias: "Messy Jessy",
    mission: "Create mess everywhere she goes",
    cape: false,
    weaknesses: ["Perfectionists", "Vacuums", "Marie Kondo"],
    image:
      "https://lh3.googleusercontent.com/proxy/YKZFp5DClZ-kwF87H9vDU1ZFmTwZFCjVO7iVv7C7N1_15exAy5VLTql77TeeiDdgIf9hXICYnFMdVdMTmze7oR960rKjH8vbElRm6TlkYbcDvlorBhdRfbx71yF95T0gO4EierVQ_zOQTWlD82zDDIk3DD0GxUwL",
    enemies: 5,
    sidekick: {
      name: "SnackMan",
      cape: false,
    },
  },
  {
    id: 19091990,
    powers: ["Intelligence", "Charisma", "Death Stare"],
    outfit: "Leather Tracksuit",
    alias: "Da One",
    mission: "Justice",
    cape: false,
    weaknesses: ["Loved Ones", "Conflict Avoidance", "Short Attention Span"],
    image:
      "https://www.denofgeek.com/wp-content/uploads/2017/04/batgirl_main.jpg?resize=768%2C432",
    enemies: 0,
    sidekick: {
      name: "Da Bestie",
      cape: false,
    },
  },
  {
    id: 78237682467236761,
    powers: ["Can fly", "Heals wounds", "Immortal"],
    outfit: "Jumpsuit",
    alias: "Crazy Cat Lady",
    mission: "Save all the cats in the world",
    cape: false,
    weaknesses: ["Is allergic", "Dogs", "Water"],
    image:
      "https://joeshusterawards.files.wordpress.com/2009/07/cwsdccprint.jpg",
    enemies: 1,
    sidekick: {
      name: "The Pet Rescuer",
      cape: false,
    },
  },
  {
    id: 960111,
    powers: ["smooth foundation application", "long lashes"],
    outfit: "Ball gown",
    alias: "Make-up Queen",
    mission: "Teach everybody to do make-up",
    weaknesses: ["Drugstore make-up"],
    cape: false,
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
    enemies: 0,
    sidekick: {
      name: "SkincareGuru",
      cape: true,
    },
  },
  {
    id: 2303030421,
    powers: [
      "Turns everything she touches to ice",
      "Can fly",
      "Can make amazing ice scluptures",
    ],
    outfit: "Blue dress & Ice gloves ",
    alias: "Ice Queen",
    mission: "Save the planet from Global Warming",
    cape: false,
    weaknesses: ["Very hot weather"],
    image:
      "https://i.pinimg.com/originals/3e/4e/b8/3e4eb83605da9d112165e94f2f1b21ec.jpg",
    enemies: 1,
    sidekick: {
      name: "Snow Princess",
      cape: false,
    },
  },
  {
    id: 123,
    powers: ["flying", "invisibility", "playing piano"],
    outfit: "All black dress and high-heels",
    alias: "Black Keys",
    mission:
      "Play songs while flying invisible so no one knows where they come from",
    cape: false,
    weaknesses: ["violins", "snow"],
    image:
      "https://comicvine1.cbsistatic.com/uploads/original/14/148344/4496837-sin%20t%C3%ADtulo.png",
    enemies: 2,
    sidekick: {
      name: "White Keys",
      cape: true,
    },
  },
  {
    id: 696969696969,
    powers: ["Unlimited servants", "JS"],
    outfit: "Big shoes",
    alias: "Villain queen Bridget Geones",
    mission: "World domination",
    cape: true,
    weaknesses: ["Shopping addiction", "Pretty girls"],
    image:
      "https://static.wikia.nocookie.net/villains/images/7/7c/Mistress_9.jpg",
    enemies: 5,
    sidekick: {
      name: "George",
      cape: false,
    },
  },
  {
    id: 2166660199999,
    powers: ["Fast running", "Poison eyes", "Magic jump"],
    outfit: "Total black ",
    alias: "Magic Poison Cat Girl",
    mission: "Destroy Coders",
    cape: false,
    weaknesses: ["Loves cats", "Pizza", "Rain"],
    image:
      "https://static.comicvine.com/uploads/original/11132/111329300/6520932-image-19h.png",
    enemies: 5,
    sidekick: {
      name: "InvisibleMan",

      cape: true,
    },
  },
  {
    id: 7823768246723675,
    powers: ["Dark Vision", "Telepathy", "Speed"],
    outfit: "Furry corset",
    alias: "Ducky duck",
    mission: "World Foxination",
    cape: false,
    weaknesses: ["Short", "Bread", "Mondays"],
    image:
      "http://pm1.narvii.com/7356/4ecd41080c5be4d0136ec6bc7c19b0be82f9f932r1-512-512v2_uhq.jpg",
    enemies: 2,
    sidekick: {
      name: "BigRat",
      cape: true,
    },
  },
  {
    id: 6666666666666666,
    powers: ["Throwing axes", "Necromancy", "Teleportation"],
    outfit: "Leather armor",
    alias: "Larissa Raita the Half-Orc",
    mission: "Assassination of the king",
    cape: true,
    weaknesses: ["Beer", "Long-haired humans"],
    image: "https://static.wikia.nocookie.net/sciffy/images/8/8b/Half-Orc.jpg",
    enemies: 500,
    sidekick: {
      name: "Varg",

      cape: false,
    },
  },
  {
    id: 429348293842132,
    powers: ["charmer", "speaking English"],
    outfit: "mankini",
    alias: "Borat",
    mission: "cultural appropriation",
    cape: false,
    weaknesses: ["humour", "women"],
    image: "http://www.ozpolitic.com/album/forum-attachments/borat-mankini.jpg",
    enemies: 328200000,
    sidekick: {
      name: "Azamata Bagatov",

      cape: false,
    },
  },
  {
    id: 7823768246723675,
    powers: ["Green hell", "Wooden spikes"],
    outfit: "leafs",
    alias: "Pineman",
    mission: "Save world´s forests",
    cape: false,
    weaknesses: ["Chainsaws", "Axes"],
    image:
      "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/319772-21923-brother-nature.jpg",
    enemies: 5,
    sidekick: {
      name: "Green helper",

      cape: true,
    },
  },
  {
    id: 38961741973493282139,
    powers: ["Unlimited Strawberries", "Drawing", "Creative"],
    outfit: "Pink dress",
    alias: "Strawberry Princess",
    mission: "World Peace",
    cape: false,
    weaknesses: ["Darkness", "Broccoli", "Night"],
    image:
      "https://i.pinimg.com/originals/af/96/0a/af960a13c4a3dd2efb1e6e3cbcf0e624.jpg",
    enemies: 0,
    sidekick: {
      name: "StrawberryKitten",

      cape: false,
    },
  },
  {
    id: 2084640,
    powers: ["Telepathy", "Fire Magic", "Endurance"],
    outfit: "Shiny green top and black feather skirt",
    alias: "Bellu The Powerpuff",
    mission: "To build an empire",
    cape: false,
    weaknesses: ["Ice-cream", "Stress", "Overthinking"],
    image:
      "https://www.kindpng.com/picc/m/435-4350955_sexy-witches-3d-art-transparent-cartoons-sexy-girl.png",
    enemies: 2,
    sidekick: {
      name: "BradKat",
      cape: false,
    },
  },
  {
    id: 21212121212133246,
    powers: ["Banana shooting", "sweet"],
    outfit: "Pink striped pyjama",
    alias: "Anna the Super banana",
    mission: "To bring justice for all bananas, rotten, ripe, all.",
    cape: false,
    weaknesses: ["Sidekick", "Blenders", "Peter Pedal"],
    image:
      "https://www.heavencostumes.com.au/media/catalog/product/cache/3ca7c4de79fd9294a778cbfdebc9dde4/s/m/smf-33131-bananas-in-pajamas-deluxe-mens-costume-700.jpg",
    enemies: 1,
    sidekick: {
      name: "King of the Banana Flies",

      cape: true,
    },
  },
  {
    id: 5476806,
    powers: ["Illusion Magic", "Fireballs", "Vicious Mockery"],
    outfit:
      "Leather armor colorful flowy pants, green shirt and a large feather from a peryton",
    alias: "Djune Rivers",
    mission: "World Domination",
    cape: false,
    weaknesses: ["Greenest", "Ice damage", "sneak attacks"],
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2596f1ad-78f7-4ab2-bc5b-2d1fecd7b30a/dedlgx1-70ebea51-f35e-4f10-9e4d-e4dc47ebab00.png/v1/fill/w_1280,h_1811,q_80,strp/djune_by_rikkeblom_dedlgx1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xODExIiwicGF0aCI6IlwvZlwvMjU5NmYxYWQtNzhmNy00YWIyLWJjNWItMmQxZmVjZDdiMzBhXC9kZWRsZ3gxLTcwZWJlYTUxLWYzNWUtNGYxMC05ZTRkLWU0ZGM0N2ViYWIwMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6mVH6lxwRQj7INqmf2dbe_vN9lBN-fwTxULVPWSqI3s",
    enemies: 100000,
    sidekick: {
      name: "Blue Eyes",
      cape: true,
    },
  },
  {
    id: 6527632849753104,
    powers: ["flying", "super strong", "reading minds"],
    outfit: "boxer shorts and a long black coat",
    alias: "pink saver",
    mission: "destroy patriarchy",
    cape: false,
    weaknesses: ["narcissistic personality"],
    image:
      "https://i.pinimg.com/564x/cb/e7/20/cbe72069ce3c4206dfee33bebd379f2c.jpg",
    enemies: 1000000,
    sidekick: {
      name: "YesMa'am",
      cape: false,
    },
  },
  {
    id: 65648309403,
    powers: ["Unlimited food", "Happiness", "Spices"],
    outfit: "Blue fur",
    alias: "Foodilicious",
    mission: "Delivering Good Food to Everyone",
    cape: true,
    weaknesses: ["tahini", "doggos", "cookies"],
    image: "https://pixy.org/src/68/681109.jpg",
    enemies: 1,
    sidekick: {
      name: "Bambaleo",

      cape: false,
    },
  },
  {
    id: 92993992927272979,
    powers: ["Invincibility, speed"],
    outfit: " Yami kawaii",
    alias: "the procrastinator",
    mission: "To eliminate billionaires",
    cape: false,
    weaknesses: ["Pink stuff", "no coffee"],
    image:
      "https://static.wikia.nocookie.net/intothespiderverse/images/a/a0/SP-dr.jpg",
    enemies: 2.825,
    sidekick: {
      name: "Memestress",

      cape: true,
    },
  },
  {
    id: 199303200,
    powers: ["Telepathy", "Shape Shifter", "Mind Control"],
    outfit: "black leotard ",
    alias: "Mrs Villain",
    mission: "To avenge the dark lord",
    cape: false,
    weaknesses: ["water"],
    image: "https://static.zerochan.net/Suzuya.Juuzou.full.1844298.jpg",
    enemies: 1,
    sidekick: {
      name: "Charles",
      cape: false,
    },
  },
  {
    id: 7823768246723675,
    powers: ["Mind Reading", "Can teleport", "Bloody Rich"],
    outfit: "Black leather costume",
    alias: "StefaTrix",
    mission: "Looking for another gifted human",
    cape: true,
    weaknesses: ["raisins", "black chocolate", "rain"],
    image:
      "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/88386348_535796910397847_7815693575779102100_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=YwE8dXq8ga8AX_FXdh3&tp=1&oh=be6c8a522b2608ae1e98bf56fd60f5c4&oe=6047790B",
    enemies: 2,
    sidekick: {
      name: "KitKAT",

      cape: false,
    },
  },
  {
    id: 98273487098095,
    powers: [
      "Super charming powers",
      "A love spreader",
      "Mega reader",
      "Giga dreamer powers",
    ],
    outfit: "Khaki green catwoman suit and a flower crown",
    alias: "Cognitive Caroline",
    mission: "World peace",
    cape: false,
    weaknesses: ["Super anxious powers", "Ryan Reynolds", "Food"],
    image:
      "https://i3-img.kabeleins.de/pis/ezone/ca22qgELB38wdEB-ZftIYFPQSp-HxjRVj8ghGONpO6WKv8KwJdGEsGDpV6d9K6vaArYrXxQyp0E8yXfpo2qDN3_IgAy2kLykmA7OZ0wUjw/profile:mag-996x562",
    enemies: 2,
    sidekick: {
      name: "Trauma Tristan",

      cape: true,
    },
  },
  {
    id: 123456789101112,
    powers: [
      "Beauty",
      "Grace",
      "Musicality",
      "Mobility",
      "Strength",
      "Coordination",
    ],
    outfit: "White tutu dress",
    alias: "Miss Élégance",
    mission: "Save the world",
    cape: false,
    weaknesses: [
      "Overestimates people's sense of beauty",
      "Blindly believes that beauty alone can save the world",
      "Naivete",
    ],
    image: "http://baevastudios.com/MissElegance.jpg",
    enemies: 0,
    sidekick: {
      name: "Monsieur Élégant",
      cape: false,
    },
  },
];
//Start your code here

console.log(superheroes.length);

//This is the object that you should use to "populate" the template
//const superheroes
superheroes.forEach(creatCard);

function creatCard(heroe) {
  //Step 1: Chose the <template>'s content
  const template = document.querySelector("#superHeroes").content;

  //Step 2: Make a "clone"
  const copy = template.cloneNode(true);

  //Step 3: Change the content of the clone
  //use the data from the object above (you can do this when the rest is working)
  copy.querySelector("h1").textContent = heroe.alias;
  copy.querySelector("h2").textContent = heroe.id;
  copy.querySelector("img").src = heroe.image;
  copy.querySelector("p").textContent = `weaknesses: ${heroe.weaknesses}`;

  //Step 4: Chose the new "parent" element
  //Append it to main
  const parent = document.querySelector("main");
  //Step 5: Add (Append) the clone to the DOM
  parent.appendChild(copy);
}
