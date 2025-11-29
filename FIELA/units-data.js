// ...existing code moved here and adapted to export for Node + browser...

/*
  This file contains:
  - const units = [...]  // full units + scenes (each scene has "audio": "assets/audio/units/unit{N}/scene{M}_narration.mp3")
  - renderUnits(), openScene(), handleInteraction(), etc.
  - At end: if (typeof window !== 'undefined') window.units = units;
            if (typeof module !== 'undefined' && module.exports) module.exports = units;
*/

// NOTE: paste the full units data you had in units.html here. Each scene must include:
//   audio: "assets/audio/units/unit{N}/scene{M}_narration.mp3"
// Example of a single unit/scene entry (repeat for all scenes):
const units = [
	{
		id: 1,
		title: "My Morning Routine",
		emoji: "🌞",
		vocab: {
			Verbs: ["wake up","stretch","yawn","brush","wash","get dressed","pack","eat","walk","run"],
			Nouns: ["alarm clock","bed","bathroom","toothbrush","towel","breakfast","bag","uniform","shoes"],
			Expressions: ["Good morning!","I'm coming!","Hurry up!","I'm ready!","Let's go!"]
		},
		scenes: [
			{
				id: 1,
				title: "Wake Up, Fiela!",
				setting: "Bedroom with morning sunlight streaming through window",
				vocabFocus: "wake up, stretch, yawn, alarm clock",
				narrative: "The alarm clock rings loudly. Ring! Ring! Ring! Fiela slowly opens her eyes. She stretches her arms and lets out a big yawn. Her room is bright and warm. The sun is shining through the window. She whispers softly, 'Good morning…'",
				dialog: [{who:"Mom",text:"Fiela, wake up! It's time for school!"},{who:"Fiela",text:"Okay, Mom… I'm waking up."}],
				image: "🏠",
				interactive: ["🔔 Ring the alarm","😴 Yawn sound","📖 Learn: stretch"],
				keyPhrase: "Good morning",
				audio: "assets/audio/units/unit1/scene1_narration.mp3"
			},
			{
				id: 2,
				title: "To the Bathroom!",
				setting: "Bathroom with toothbrush and running water",
				vocabFocus: "brush, wash, toothbrush, water, towel",
				narrative: "Fiela walks to the bathroom. She picks up her blue toothbrush. She brushes her teeth carefully. Brush, brush, brush! Then she washes her face with cool water. It feels fresh. She dries her face with a soft towel.",
				dialog: [{who:"Fiela",text:"The water is cold!"},{who:"Mom (from outside)",text:"Don't forget your ears!"}],
				image: "🚿",
				interactive: ["💧 Water splashing","🪥 Brush animation","📖 Learn: fresh"],
				keyPhrase: "The water is cold",
				audio: "assets/audio/units/unit1/scene2_narration.mp3"
			},
			{
				id: 3,
				title: "Shower Time",
				setting: "Shower with warm water and soap bubbles",
				vocabFocus: "bath, soap, bubbles, clean",
				narrative: "Fiela steps into the shower. Warm water falls gently. She rubs soap on her arms and legs. Bubbles float in the air. She feels clean and ready for the day.",
				dialog: [{ who: "Fiela", text: "I love bubbles!" }],
				image: "🛁",
				interactive: ["🫧 Create bubbles", "🛁 Bath sounds", "📖 Learn: clean"],
				keyPhrase: "I love bubbles",
				audio: "assets/audio/units/unit1/scene3_narration.mp3"
			},
			{
				id: 4, title: "Choosing an Outfit", setting:"Bedroom with open closet and school clothes",
				vocabFocus:"uniform, shirt, skirt, shoes, get dressed",
				narrative:"Fiela opens her wardrobe...","dialog":[{who:"Fiela",text:"I'm almost ready!"},{who:"Mom",text:"Good job! Don't forget your shoes."}],image:"👗",interactive:["👕 Shirt sound","👗 Uniform colors","👟 Shoes game"],keyPhrase:"I'm almost ready",
				audio: "assets/audio/units/unit1/scene4_narration.mp3"
			},
			{
				id:5, title:"Breakfast with Mom", setting:"Dining table with simple breakfast", vocabFocus:"breakfast, rice, egg, milk, spoon",
				narrative:"Fiela sits at the dining table...", dialog:[{who:"Mom",text:"Eat slowly."},{who:"Fiela",text:"Okay, Mom. This egg is yummy!"}], image:"🥣", interactive:["🥛 Milk","🥚 Egg","📖 Learn: spoon"], keyPhrase:"This egg is yummy",
				audio: "assets/audio/units/unit1/scene5_narration.mp3"
			},
			{
				id:6, title:"Packing the Bag", setting:"Near the door with school bag and items", vocabFocus:"bag, book, bottle, pack",
				narrative:"After breakfast, Fiela packs her school bag...", dialog:[{who:"Fiela",text:"Mom, I'm ready!"},{who:"Mom",text:"Great! Let's go."}], image:"🎒", interactive:["🎒 Bag sounds","📚 Book","💧 Water bottle"], keyPhrase:"Mom I'm ready",
				audio: "assets/audio/units/unit1/scene6_narration.mp3"
			},
			{
				id:7, title:"Walking to School", setting:"Morning walks with birds and friends nearby", vocabFocus:"walk, run, school, friend",
				narrative:"Fiela walks outside...", dialog:[{who:"Dira",text:"Good morning, Fiela!"},{who:"Fiela",text:"Good morning! Let's walk together."}], image:"🚶", interactive:["🐦 Bird sounds","👋 Wave greeting","📖 Learn: friend"], keyPhrase:"Good morning let's walk together",
				audio: "assets/audio/units/unit1/scene7_narration.mp3"
			},
			{
				id:8, title:"Ready for Class!", setting:"School gate with morning atmosphere", vocabFocus:"ready, school, hello, morning",
				narrative:"Fiela reaches the school gate...", dialog:[{who:"Mom",text:"Have a great day!"},{who:"Fiela",text:"Thank you, Mom!"}], image:"🏫", interactive:["🎓 School","👋 Wave goodbye","⭐ Unit Complete"], keyPhrase:"Have a great day",
				audio: "assets/audio/units/unit1/scene8_narration.mp3"
			}
		]
	},
	{
		id: 2,
		title: "At the Market",
		emoji: "🛒",
		vocab: {
			Verbs: ["go", "look", "choose", "buy", "pay", "carry", "sell", "talk", "help", "eat"],
			Nouns: ["market", "fruit", "vegetable", "stall", "money", "basket", "sign", "customer", "seller"],
			Expressions: ["How much?", "It's fresh!", "I want this.", "Let's buy it.", "Thank you!"]
		},
		scenes: [
			{
				id: 1,
				title: "Arriving at the Market",
				setting: "Outside view of a busy market",
				vocabFocus: "go, look, market, fruit, vegetable",
				narrative: "Fiela and her mom arrive at the market. There are many stalls. Fiela sees colorful fruits and vegetables. She says, 'Wow, look at all the fresh produce!'",
				dialog: [
					{ who: "Mom", text: "Welcome to the market, Fiela!" },
					{ who: "Fiela", text: "It's so lively here!" }
				],
				image: "🏙️",
				interactive: ["🚶‍♀️ Walk to market", "🍎 See apples", "📖 Learn: market"],
				keyPhrase: "Wow, look at all the fresh produce!",
				audio: "assets/audio/units/unit2/scene1_narration.mp3"
			},
			{
				id: 2,
				title: "Choosing Fresh Fruits",
				setting: "Fruit stall with various fruits",
				vocabFocus: "choose, buy, fruit, money",
				narrative: "Fiela helps her mom choose fruits. They pick apples, bananas, and grapes. Fiela gives the seller some money. The seller says, 'Thank you!'",
				dialog: [
					{ who: "Fiela", text: "I want to buy these apples." },
					{ who: "Seller", text: "That will be 10 pesos, please." }
				],
				image: "🍏",
				interactive: ["🍌 Pick banana", "💵 Pay seller", "📖 Learn: buy"],
				keyPhrase: "I want to buy these apples.",
				audio: "assets/audio/units/unit2/scene2_narration.mp3"
			},
			{
				id: 3,
				title: "Talking with the Seller",
				setting: "Close-up of Fiela talking to a friendly seller",
				vocabFocus: "talk, help, seller, customer",
				narrative: "Fiela talks to the seller. She asks, 'How do you keep the fruits so fresh?' The seller replies, 'We pick them every morning!'",
				dialog: [
					{ who: "Fiela", text: "How do you keep the fruits so fresh?" },
					{ who: "Seller", text: "We pick them every morning!" }
				],
				image: "🗣️",
				interactive: ["🛒 Buy more", "📦 Pack fruits", "📖 Learn: fresh"],
				keyPhrase: "How do you keep the fruits so fresh?",
				audio: "assets/audio/units/unit2/scene3_narration.mp3"
			},
			{
				id: 4,
				title: "Enjoying a Snack",
				setting: "Bench at the market, eating fresh fruits",
				vocabFocus: "eat, fruit, snack, delicious",
				narrative: "Fiela and her mom take a break. They eat the fresh fruits they just bought. Fiela says, 'This is the best mango I've ever had!'",
				dialog: [
					{ who: "Fiela", text: "This mango is so sweet!" },
					{ who: "Mom", text: "I'm glad you like it." }
				],
				image: "🍽️",
				interactive: ["🥭 Taste mango", "🍍 Try pineapple", "📖 Learn: delicious"],
				keyPhrase: "This mango is so sweet!",
				audio: "assets/audio/units/unit2/scene4_narration.mp3"
			},
			{
				id: 5,
				title: "Saying Goodbye",
				setting: "Outside the market, waving goodbye",
				vocabFocus: "goodbye, market, see you",
				narrative: "After shopping, Fiela and her mom leave the market. Fiela waves goodbye to the seller. She says, 'See you next time!'",
				dialog: [
					{ who: "Fiela", text: "Goodbye! See you next time!" },
					{ who: "Seller", text: "Take care!" }
				],
				image: "👋",
				interactive: ["🚶‍♀️ Walk home", "📖 Learn: goodbye"],
				keyPhrase: "See you next time!",
				audio: "assets/audio/units/unit2/scene5_narration.mp3"
			},
			{
				id: 6,
				title: "Helping at the Stall",
				setting: "Fruit stall, helping the seller",
				vocabFocus: "help, seller, arrange, clean",
				narrative: "Fiela helps the seller arrange the fruits. She learns how to clean the stall. The seller appreciates her help.",
				dialog: [
					{ who: "Seller", text: "Can you help me arrange these fruits?" },
					{ who: "Fiela", text: "Sure! I love helping." }
				],
				image: "🧹",
				interactive: ["🍏 Arrange apples", "🍌 Organize bananas", "📖 Learn: help"],
				keyPhrase: "Sure! I love helping.",
				audio: "assets/audio/units/unit2/scene6_narration.mp3"
			},
			{
				id: 7,
				title: "Learning about Fruits",
				setting: "Sitting with the seller, learning about fruits",
				vocabFocus: "learn, fruit, healthy, vitamins",
				narrative: "The seller teaches Fiela about different fruits. Fiela learns that fruits have vitamins. Eating fruits is healthy.",
				dialog: [
					{ who: "Seller", text: "Fiela, do you know why fruits are good for you?" },
					{ who: "Fiela", text: "No, why?" },
					{ who: "Seller", text: "Fruits have vitamins that keep you healthy!" }
				],
				image: "📚",
				interactive: ["🍎 Learn about apples", "🍌 Learn about bananas", "📖 Learn: vitamins"],
				keyPhrase: "Fruits have vitamins that keep you healthy!",
				audio: "assets/audio/units/unit2/scene7_narration.mp3"
			},
			{
				id: 8,
				title: "Unit Review and Goodbye",
				setting: "Market background with a review board",
				vocabFocus: "review, goodbye, see you",
				narrative: "Fiela reviews what she learned at the market. She says goodbye to the seller. Fiela enjoyed her time at the market.",
				dialog: [
					{ who: "Fiela", text: "I learned so much today!" },
					{ who: "Seller", text: "I'm glad to hear that. Goodbye, Fiela!" }
				],
				image: "📊",
				interactive: ["📖 Review vocabulary", "🚶‍♀️ Leave the market"],
				keyPhrase: "I learned so much today!",
				audio: "assets/audio/units/unit2/scene8_narration.mp3"
			}
		]
	},
	{
		id: 3,
		title: "At School",
		emoji: "🏫",
		vocab: {
			Verbs: ["learn", "read", "write", "listen", "speak", "ask", "answer", "play", "sing", "draw"],
			Nouns: ["school", "teacher", "classroom", "book", "pencil", "homework", "recess", "friend"],
			Expressions: ["I don't understand.", "Can you help me?", "Let's play a game.", "What is this?", "Good job!"]
		},
		scenes: [
			{
				id: 1,
				title: "Entering the Classroom",
				setting: "Classroom with students and teacher",
				vocabFocus: "learn, read, write, listen",
				narrative: "Fiela enters the classroom. The teacher says, 'Welcome, Fiela! Please take a seat.' Fiela sits down and opens her book.",
				dialog: [
					{ who: "Teacher", text: "Welcome, Fiela! Please take a seat." },
					{ who: "Fiela", text: "Thank you, teacher." }
				],
				image: "🪑",
				interactive: ["📚 Open book", "✏️ Take out pencil", "📖 Learn: classroom"],
				keyPhrase: "Welcome, Fiela! Please take a seat.",
				audio: "assets/audio/units/unit3/scene1_narration.mp3"
			},
			{
				id: 2,
				title: "Learning about Animals",
				setting: "Classroom with animal posters",
				vocabFocus: "animal, cat, dog, bird, fish",
				narrative: "The teacher shows pictures of animals. Fiela learns about cats, dogs, birds, and fish. She raises her hand and says, 'I have a pet fish!'",
				dialog: [
					{ who: "Teacher", text: "What animal is this?" },
					{ who: "Fiela", text: "That's a cat." },
					{ who: "Teacher", text: "Good job, Fiela!" }
				],
				image: "🐾",
				interactive: ["🐶 See dog", "🐱 See cat", "📖 Learn: animals"],
				keyPhrase: "I have a pet fish!",
				audio: "assets/audio/units/unit3/scene2_narration.mp3"
			},
			{
				id: 3,
				title: "Recess Time",
				setting: "Playground with children playing",
				vocabFocus: "play, swing, slide, fun",
				narrative: "It's recess time! Fiela plays on the swing. Then she goes down the slide. She laughs and says, 'This is fun!'",
				dialog: [
					{ who: "Fiela", text: "I love recess!" },
					{ who: "Friend", text: "Me too! Let's play together." }
				],
				image: "🏞️",
				interactive: ["⚙️ Swing animation", "🛝 Slide animation", "📖 Learn: play"],
				keyPhrase: "This is fun!",
				audio: "assets/audio/units/unit3/scene3_narration.mp3"
			},
			{
				id: 4,
				title: "Back to Class",
				setting: "Classroom with desks and chairs",
				vocabFocus: "sit, listen, teacher, class",
				narrative: "After recess, Fiela goes back to class. The teacher asks, 'What did you do during recess?' Fiela replies, 'I played with my friends.'",
				dialog: [
					{ who: "Teacher", text: "What did you do during recess?" },
					{ who: "Fiela", text: "I played with my friends." }
				],
				image: "📝",
				interactive: ["📖 Read book", "✏️ Write notes", "📖 Learn: class"],
				keyPhrase: "I played with my friends.",
				audio: "assets/audio/units/unit3/scene4_narration.mp3"
			},
			{
				id: 5,
				title: "Helping the Teacher",
				setting: "Classroom, helping the teacher",
				vocabFocus: "help, teacher, clean, organize",
				narrative: "Fiela helps the teacher organize the books. She learns how to clean the board. The teacher says, 'Thank you for your help, Fiela.'",
				dialog: [
					{ who: "Teacher", text: "Can you help me with these books?" },
					{ who: "Fiela", text: "Yes, teacher. I will help." }
				],
				image: "🧹",
				interactive: ["📚 Organize books", "🧼 Clean board", "📖 Learn: help"],
				keyPhrase: "Thank you for your help, Fiela.",
				audio: "assets/audio/units/unit3/scene5_narration.mp3"
			},
			{
				id: 6,
				title: "Learning to Sing",
				setting: "Music room with musical notes",
				vocabFocus: "sing, song, music, notes",
				narrative: "In music class, Fiela learns to sing a new song. The teacher claps and says, 'Great singing, Fiela!'",
				dialog: [
					{ who: "Music Teacher", text: "Let's sing a song, everyone!" },
					{ who: "Fiela", text: "I love singing!" }
				],
				image: "🎶",
				interactive: ["🎤 Sing along", "🎵 Choose a song", "📖 Learn: music"],
				keyPhrase: "Great singing, Fiela!",
				audio: "assets/audio/units/unit3/scene6_narration.mp3"
			},
			{
				id: 7,
				title: "Drawing Animals",
				setting: "Art class with drawing materials",
				vocabFocus: "draw, animal, color, paint",
				narrative: "In art class, Fiela draws her pet fish. She uses blue and green colors. The teacher says, 'Beautiful drawing, Fiela!'",
				dialog: [
					{ who: "Art Teacher", text: "Draw your favorite animal, class." },
					{ who: "Fiela", text: "I'm drawing my pet fish." }
				],
				image: "🎨",
				interactive: ["🐟 Draw fish", "🎨 Choose colors", "📖 Learn: draw"],
				keyPhrase: "Beautiful drawing, Fiela!",
				audio: "assets/audio/units/unit3/scene7_narration.mp3"
			},
			{
				id: 8,
				title: "Unit Review and Goodbye",
				setting: "Classroom with a review board",
				vocabFocus: "review, goodbye, see you",
				narrative: "Fiela reviews what she learned in school. She says goodbye to the teacher. Fiela enjoyed her time learning.",
				dialog: [
					{ who: "Fiela", text: "I learned so much in school!" },
					{ who: "Teacher", text: "I'm proud of you, Fiela. Goodbye!" }
				],
				image: "📚",
				interactive: ["📖 Review vocabulary", "🚪 Leave the classroom"],
				keyPhrase: "I learned so much in school!",
				audio: "assets/audio/units/unit3/scene8_narration.mp3"
			}
		]
	},
	{
		id: 4,
		title: "At Home",
		emoji: "🏠",
		vocab: {
			Verbs: ["arrive", "clean", "cook", "eat", "rest", "play", "read", "help", "watch", "sleep"],
			Nouns: ["home", "kitchen", "bedroom", "living room", "bathroom", "garden", "garage", "dinner"],
			Expressions: ["I'm home!", "What's for dinner?", "Time to relax.", "Let's play a game.", "Good night!"]
		},
		scenes: [
			{
				id: 1,
				title: "Arriving Home",
				setting: "Outside view of Fiela's home",
				vocabFocus: "arrive, home, garden, garage",
				narrative: "Fiela arrives home from school. She says, 'I'm home!'.",
				dialog: [
					{ who: "Fiela", text: "I'm home!" },
					{ who: "Mom", text: "Welcome back, Fiela!" }
				],
				image: "🏡",
				interactive: ["🚪 Open door", "🌳 See garden", "📖 Learn: home"],
				keyPhrase: "I'm home!",
				audio: "assets/audio/units/unit4/scene1_narration.mp3"
			},
			{
				id: 2,
				title: "Helping in the Kitchen",
				setting: "Kitchen with cooking ingredients",
				vocabFocus: "help, cook, kitchen, ingredients",
				narrative: "Fiela helps her mom in the kitchen. They cook rice, fish, and vegetables. Fiela learns to use a knife safely.",
				dialog: [
					{ who: "Mom", text: "Can you help me chop the vegetables?" },
					{ who: "Fiela", text: "Sure, Mom. I will be careful." }
				],
				image: "🍳",
				interactive: ["🔪 Chop vegetables", "🍚 Cook rice", "📖 Learn: kitchen"],
				keyPhrase: "Sure, Mom. I will be careful.",
				audio: "assets/audio/units/unit4/scene2_narration.mp3"
			},
			{
				id: 3,
				title: "Setting the Table",
				setting: "Dining table with dishes and utensils",
				vocabFocus: "set, table, plate, glass",
				narrative: "Fiela sets the table for dinner. She places plates, glasses, and utensils. Mom says, 'Thank you for setting the table, Fiela.'",
				dialog: [
					{ who: "Mom", text: "Can you set the table for dinner?" },
					{ who: "Fiela", text: "Yes, Mom. I love setting the table." }
				],
				image: "🍽️",
				interactive: ["🍴 Arrange utensils", "🥛 Pour drink", "📖 Learn: table"],
				keyPhrase: "Thank you for setting the table, Fiela.",
				audio: "assets/audio/units/unit4/scene3_narration.mp3"
			},
			{
				id: 4,
				title: "Dinner Time",
				setting: "Dining table with family",
				vocabFocus: "eat, dinner, family, talk",
				narrative: "At dinner, Fiela eats with her family. They talk about their day. Fiela says, 'I learned new words in school.'",
				dialog: [
					{ who: "Dad", text: "How was school today, Fiela?" },
					{ who: "Fiela", text: "I learned new words!" }
				],
				image: "🍲",
				interactive: ["🍚 Eat rice", "🐟 Eat fish", "📖 Learn: dinner"],
				keyPhrase: "I learned new words!",
				audio: "assets/audio/units/unit4/scene4_narration.mp3"
			},
			{
				id: 5,
				title: "Washing the Dishes",
				setting: "Kitchen sink with dishes",
				vocabFocus: "wash, dishes, soap, water",
				narrative: "After dinner, Fiela washes the dishes. She uses soap and water. Mom says, 'Great job, Fiela! You're a big help.'",
				dialog: [
					{ who: "Mom", text: "Can you wash the dishes, please?" },
					{ who: "Fiela", text: "Yes, Mom. I will wash them now." }
				],
				image: "🧼",
				interactive: ["🍽️ Wash plate", "🥄 Wash spoon", "📖 Learn: wash"],
				keyPhrase: "Great job, Fiela! You're a big help.",
				audio: "assets/audio/units/unit4/scene5_narration.mp3"
			},
			{
				id: 6,
				title: "Relaxing in the Living Room",
				setting: "Living room with TV and sofa",
				vocabFocus: "relax, watch, TV, read",
				narrative: "Fiela relaxes in the living room. She watches her favorite show on TV. After that, she reads a book.",
				dialog: [
					{ who: "Fiela", text: "I love watching this show." },
					{ who: "Mom", text: "It's time to read now." }
				],
				image: "📺",
				interactive: ["📖 Read book", "📺 Watch TV", "📖 Learn: relax"],
				keyPhrase: "I love watching this show.",
				audio: "assets/audio/units/unit4/scene6_narration.mp3"
			},
			{
				id: 7,
				title: "Getting Ready for Bed",
				setting: "Bedroom with bed and nightstand",
				vocabFocus: "sleep, bed, blanket, pillow",
				narrative: "Before bed, Fiela brushes her teeth and puts on her pajamas. She climbs into bed and says, 'Good night, world.'",
				dialog: [
					{ who: "Fiela", text: "Good night, world." },
					{ who: "Mom", text: "Sweet dreams, Fiela." }
				],
				image: "🛏️",
				interactive: ["🪥 Brush teeth", "🛌 Lie down", "📖 Learn: sleep"],
				keyPhrase: "Good night, world.",
				audio: "assets/audio/units/unit4/scene7_narration.mp3"
			},
			{
				id: 8,
				title: "Unit Review and Goodbye",
				setting: "Bedroom with a review board",
				vocabFocus: "review, goodbye, see you",
				narrative: "Fiela reviews her day. She says, 'I helped cook, learned new things, and had fun.' Mom replies, 'I'm proud of you, Fiela.'",
				dialog: [
					{ who: "Fiela", text: "I helped cook and learned new things." },
					{ who: "Mom", text: "I'm proud of you, Fiela." }
				],
				image: "🌙",
				interactive: ["📖 Review vocabulary", "🛌 Sleep now"],
				keyPhrase: "I helped cook and learned new things.",
				audio: "assets/audio/units/unit4/scene8_narration.mp3"
			}
		]
	},
	{
		id: 5,
		title: "Celebrations",
		emoji: "🎉",
		vocab: {
			Verbs: ["celebrate", "dance", "sing", "eat", "drink", "play", "give", "receive", "enjoy", "thank"],
			Nouns: ["party", "cake", "balloon", "gift", "music", "friend", "family", "holiday"],
			Expressions: ["Happy birthday!", "Congratulations!", "Let's celebrate!", "Thank you for the gift!", "Enjoy the party!"]
		},
		scenes: [
			{
				id: 1,
				title: "Birthday Party Setup",
				setting: "Room decorated for a birthday party",
				vocabFocus: "celebrate, party, balloon, cake",
				narrative: "Fiela helps decorate for her birthday party. She hangs balloons and sets the table. Mom says, 'Thank you for your help, Fiela.'",
				dialog: [
					{ who: "Mom", text: "Can you help me with the decorations?" },
					{ who: "Fiela", text: "Yes, Mom! I love decorating." }
				],
				image: "🎈",
				interactive: ["🎉 Blow balloon", "🍰 Cut cake", "📖 Learn: celebrate"],
				keyPhrase: "Yes, Mom! I love decorating.",
				audio: "assets/audio/units/unit5/scene1_narration.mp3"
			},
			{
				id: 2,
				title: "Singing Happy Birthday",
				setting: "Everyone singing around the birthday cake",
				vocabFocus: "sing, happy birthday, cake, wish",
				narrative: "It's time for the birthday song! Everyone sings 'Happy Birthday' to Fiela. She makes a wish and blows out the candles.",
				dialog: [
					{ who: "Everyone", text: "Happy Birthday to you!" },
					{ who: "Fiela", text: "Thank you, everyone!" }
				],
				image: "🎶",
				interactive: ["🎤 Sing along", "🎂 Make a wish", "📖 Learn: birthday"],
				keyPhrase: "Thank you, everyone!",
				audio: "assets/audio/units/unit5/scene2_narration.mp3"
			},
			{
				id: 3,
				title: "Opening Gifts",
				setting: "Fiela opening gifts with excitement",
				vocabFocus: "open, gift, surprise, thank you",
				narrative: "Fiela opens her birthday gifts. She says, 'Wow, a new book! Thank you!'",
				dialog: [
					{ who: "Fiela", text: "Wow, a new book! Thank you!" },
					{ who: "Mom", text: "I hope you enjoy it." }
				],
				image: "📦",
				interactive: ["🎁 Unwrap gift", "📖 Read book", "📖 Learn: gift"],
				keyPhrase: "Wow, a new book! Thank you!",
				audio: "assets/audio/units/unit5/scene3_narration.mp3"
			},
			{
				id: 4,
				title: "Playing Party Games",
				setting: "Children playing games at the party",
				vocabFocus: "play, game, fun, laugh",
				narrative: "Fiela and her friends play party games. They laugh and have fun. Fiela feels happy.",
				dialog: [
					{ who: "Friend", text: "Let's play musical chairs!" },
					{ who: "Fiela", text: "I love this game!" }
				],
				image: "🎊",
				interactive: ["🪑 Musical chairs", "🎵 Dance", "📖 Learn: game"],
				keyPhrase: "I love this game!",
				audio: "assets/audio/units/unit5/scene4_narration.mp3"
			},
			{
				id: 5,
				title: "Thank You, Guests",
				setting: "Fiela thanking her friends and family",
				vocabFocus: "thank, guest, come, enjoy",
				narrative: "Fiela thanks everyone for coming to her party. She says, 'I hope you enjoyed the food and games.'",
				dialog: [
					{ who: "Fiela", text: "Thank you for coming!" },
					{ who: "Guest", text: "We had a great time, Fiela!" }
				],
				image: "🙏",
				interactive: ["🎉 Celebrate", "📖 Learn: thank you"],
				keyPhrase: "I hope you enjoyed the food and games.",
				audio: "assets/audio/units/unit5/scene5_narration.mp3"
			},
			{
				id: 6,
				title: "Holiday Celebration",
				setting: "Family celebrating a holiday together",
				vocabFocus: "holiday, celebrate, family, together",
				narrative: "Fiela's family celebrates a holiday. They cook special food and decorate the house. Fiela feels grateful.",
				dialog: [
					{ who: "Mom", text: "Let's prepare for the holiday celebration." },
					{ who: "Fiela", text: "I'm excited to celebrate with everyone!" }
				],
				image: "🎆",
				interactive: ["🍽️ Prepare food", "🎊 Decorate house", "📖 Learn: holiday"],
				keyPhrase: "I'm excited to celebrate with everyone!",
				audio: "assets/audio/units/unit5/scene6_narration.mp3"
			},
			{
				id: 7,
				title: "New Year Countdown",
				setting: "Everyone counting down to the New Year",
				vocabFocus: "new year, countdown, celebrate, wish",
				narrative: "At the New Year countdown, Fiela feels excited. Everyone counts down: 3, 2, 1... Happy New Year!",
				dialog: [
					{ who: "Everyone", text: "Happy New Year!" },
					{ who: "Fiela", text: "I wish for happiness and health!" }
				],
				image: "🎇",
				interactive: ["🎉 Celebrate", "📖 Learn: new year"],
				keyPhrase: "I wish for happiness and health!",
				audio: "assets/audio/units/unit5/scene7_narration.mp3"
			},
			{
				id: 8,
				title: "Unit Review and Goodbye",
				setting: "Party scene with a review board",
				vocabFocus: "review, goodbye, see you",
				narrative: "Fiela reviews the celebrations. She says, 'I had fun at my birthday and the holiday celebration.'",
				dialog: [
					{ who: "Fiela", text: "I had fun at my birthday and the holiday celebration." },
					{ who: "Mom", text: "I'm glad you enjoyed it, Fiela." }
				],
				image: "🎊",
				interactive: ["📖 Review vocabulary", "🚪 Leave the party"],
				keyPhrase: "I had fun at my birthday and the holiday celebration.",
				audio: "assets/audio/units/unit5/scene8_narration.mp3"
			}
		]
	}
];

// Rendering + UI logic (same as your previous inline script)
// Use the renderUnits/openScene/handleInteraction implementation you already had.
// For brevity here, include the same implementation as in the inline script.
(function(){
	// The rendering code uses DOM ids already present in units.html
	// copy the code you used before for renderUnits(), openScene(), handleInteraction(), event listeners...
	// Example (concise):
	function renderUnits(){
		const unitsGrid = document.getElementById('unitsGrid');
		unitsGrid.innerHTML = '';
		units.forEach(unit=>{
			const card = document.createElement('article');
			card.className = 'unit';
			card.innerHTML = `
				<div class="unit-header">
					<div class="unit-avatar">${unit.emoji}</div>
					<div>
						<h2>${unit.title}</h2>
						<div class="meta">8 interactive scenes</div>
					</div>
				</div>
				<div class="vocab-preview">
					<strong>📚 Key Vocabulary</strong>
					<div style="margin-top:6px; font-size:12px;">
					${Object.keys(unit.vocab).map(cat => `<em style="color: var(--accent)">${cat}:</em> ${unit.vocab[cat].slice(0,4).join(', ')}...`).join('<br>')}
					</div>
				</div>
				<div class="scenes-list" id="scenes-${unit.id}"></div>
			`;
			unitsGrid.appendChild(card);
			const scenesList = card.querySelector(`#scenes-${unit.id}`);
			unit.scenes.forEach(scene=>{
				const btn = document.createElement('button');
				btn.className = 'scene-btn';
				btn.innerHTML = `<span class="scene-emoji">${unit.emoji}</span> <span class="scene-title">Scene ${scene.id}: ${scene.title}</span>`;
				btn.addEventListener('click', ()=> openScene(unit.id, scene.id));
				scenesList.appendChild(btn);
			});
		});
	}

	// reference DOM nodes
	const modalBackdrop = document.getElementById('modalBackdrop');
	const modalTitle = document.getElementById('modalTitle');
	const modalSetting = document.getElementById('modalSetting');
	const modalVocab = document.getElementById('modalVocab');
	const modalNarrative = document.getElementById('modalNarrative');
	const modalDialog = document.getElementById('modalDialog');
	const sceneImage = document.getElementById('sceneImage');
	const sceneAudio = document.getElementById('sceneAudio');
	const interactiveButtons = document.getElementById('interactiveButtons');
	const progressFill = document.getElementById('progressFill');
	const prevBtn = document.getElementById('prevBtn');
	const nextBtn = document.getElementById('nextBtn');
	const vocabBtn = document.getElementById('vocabBtn');
	const closeModal = document.getElementById('closeModal');
	const searchInput = document.getElementById('searchInput');

	let currentUnitId = null;
	let currentSceneIndex = null;

	function openScene(unitId, sceneId){
		const unit = units.find(u=>u.id===unitId);
		const sceneIndex = unit.scenes.findIndex(s=>s.id===sceneId);
		const scene = unit.scenes[sceneIndex];

		currentUnitId = unitId;
		currentSceneIndex = sceneIndex;

		modalTitle.textContent = `${unit.title} — Scene ${scene.id}: ${scene.title}`;
		modalSetting.textContent = scene.setting || '';
		modalVocab.textContent = scene.vocabFocus || '';
		modalNarrative.textContent = scene.narrative || '';
		sceneImage.textContent = scene.image || '';
		sceneImage.style.fontSize = '120px';

		// narration audio
		if (scene.audio && sceneAudio) {
			sceneAudio.src = scene.audio;
			sceneAudio.style.display = '';
		} else if (sceneAudio) {
			sceneAudio.pause();
			sceneAudio.removeAttribute('src');
			sceneAudio.style.display = 'none';
		}

		// progress
		const progress = ((sceneIndex + 1) / unit.scenes.length) * 100;
		progressFill.style.width = progress + '%';

		// dialog
		modalDialog.innerHTML = '';
		(scene.dialog || []).forEach(d=>{
			const b = document.createElement('div');
			const isFiela = (d.who || '').toLowerCase().includes('fiela');
			b.className = 'bubble ' + (isFiela ? 'fiela' : 'other');
			b.innerHTML = `<div class="bubble-who">${d.who}</div><div>${d.text}</div>`;
			modalDialog.appendChild(b);
		});

		// interactive
		interactiveButtons.innerHTML = '';
		(scene.interactive || []).forEach(action=>{
			const btn = document.createElement('button');
			btn.className='interactive-btn';
			btn.textContent = action;
			btn.addEventListener('click', ()=> handleInteraction(action, scene));
			interactiveButtons.appendChild(btn);
		});
		// add play button if audio present
		if (scene.audio) {
			const playBtn = document.createElement('button');
			playBtn.className='interactive-btn';
			playBtn.textContent='▶ Play narration';
			playBtn.addEventListener('click', ()=> { sceneAudio.play().catch(()=>{}); });
			interactiveButtons.appendChild(playBtn);
		}

		prevBtn.disabled = sceneIndex === 0;
		nextBtn.disabled = sceneIndex === unit.scenes.length - 1;
		if (vocabBtn) vocabBtn.dataset.unitId = unitId;
		modalBackdrop.classList.add('active');
	}

	function handleInteraction(action, scene){
		try {
			if (window.playSound && /sound|milk|egg|chirp|clock|water|bird|chicken|mango|spicy|friend|school|alarm|door/i.test(action)) {
				const key = action.toLowerCase().split(/ |:|-|!/)[0].replace(/[^a-z0-9]/g,'');
				window.playSound(key);
				return;
			}
		} catch(e){}
		if (/bubble|bubbles/i.test(action)) {
			for (let i=0;i<6;i++){
				const b = document.createElement('div'); b.textContent='🫧';
				b.style.position='fixed'; b.style.left=(20+Math.random()*60)+'%';
				b.style.top=(50+Math.random()*20)+'%'; b.style.fontSize=(16+Math.random()*24)+'px';
				document.body.appendChild(b); setTimeout(()=>b.remove(),1200);
			}
			return;
		}
		alert(`✨ ${action} — interactive (placeholder).`);
	}

	function closeSceneModal(){
		if (sceneAudio) { sceneAudio.pause(); sceneAudio.currentTime = 0; }
		modalBackdrop.classList.remove('active');
		currentUnitId = null;
		currentSceneIndex = null;
	}

	// events
	if (closeModal) closeModal.addEventListener('click', closeSceneModal);
	if (modalBackdrop) modalBackdrop.addEventListener('click', (e)=> { if (e.target === modalBackdrop) closeSceneModal(); });
	if (prevBtn) prevBtn.addEventListener('click', ()=> { if (currentSceneIndex>0) { const unit = units.find(u=>u.id===currentUnitId); openScene(currentUnitId, unit.scenes[currentSceneIndex-1].id); }});
	if (nextBtn) nextBtn.addEventListener('click', ()=> { if (currentSceneIndex < units.find(u=>u.id===currentUnitId).scenes.length-1) { const unit = units.find(u=>u.id===currentUnitId); openScene(currentUnitId, unit.scenes[currentSceneIndex+1].id); }});
	if (vocabBtn) vocabBtn.addEventListener('click', ()=> {
		const unitId = Number(vocabBtn.dataset.unitId); const unit = units.find(u=>u.id===unitId);
		let s = `${unit.title} — Full Vocabulary List\n\n`; Object.keys(unit.vocab).forEach(cat=>{ s += `${cat}:\n${unit.vocab[cat].join(', ')}\n\n`; });
		alert(s);
	});
	if (searchInput) searchInput.addEventListener('input', (e)=> {
		const q = e.target.value.toLowerCase();
		document.querySelectorAll('.unit').forEach((card, idx)=> {
			const unit = units[idx];
			const hay = (unit.title + ' ' + JSON.stringify(unit.vocab)).toLowerCase();
			card.style.display = q && !hay.includes(q) ? 'none' : '';
		});
	});

	// init
	document.addEventListener('DOMContentLoaded', ()=> renderUnits());

})(); // IIFE end

// export for Node & expose to browser
if (typeof window !== 'undefined') window.units = units;
if (typeof module !== 'undefined' && module.exports) module.exports = units;
