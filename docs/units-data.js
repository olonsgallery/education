// Full units dataset (5 units × 8 scenes) with narration audio paths.
// Update audio files at: assets/audio/units/unit{N}/scene{M}_narration.mp3
const units = [
	{
		id: 1,
		title: "My Morning Routine",
		emoji: "🌞",
		vocab: {
			Verbs: ["wake up", "stretch", "yawn", "brush", "wash", "get dressed", "pack", "eat", "walk", "run"],
			Nouns: ["alarm clock", "bed", "bathroom", "toothbrush", "towel", "breakfast", "bag", "uniform", "shoes"],
			Expressions: ["Good morning!", "I'm coming!", "Hurry up!", "I'm ready!", "Let's go!"]
		},
		scenes: [
			{
				id: 1,
				title: "Wake Up, Fiela!",
				setting: "Bedroom with morning sunlight",
				vocabFocus: "wake up, stretch, yawn, alarm clock",
				narrative: "The alarm clock rings loudly. Ring! Ring! Ring! Fiela slowly opens her eyes. She stretches her arms and lets out a big yawn. Her room is bright and warm. The sun is shining through the window. She whispers softly, 'Good morning…'",
				dialog: [{who:"Mom",text:"Fiela, wake up! It's time for school!"},{who:"Fiela",text:"Okay, Mom… I'm waking up."}],
				image: "🏠",
				interactive: ["🔔 Ring the alarm","😴 Yawn sound","📖 Word: stretch"],
				keyPhrase: "Good morning",
				audio: "assets/audio/units/unit1/scene1_narration.mp3"
			},
			{
				id: 2,
				title: "To the Bathroom!",
				setting: "Bathroom with toothbrush, soap, running water",
				vocabFocus: "brush, wash, toothbrush, water, towel",
				narrative: "Fiela walks to the bathroom. She picks up her blue toothbrush. She brushes her teeth carefully. Brush, brush, brush! Then she washes her face with cool water. It feels fresh. She dries her face with a soft towel.",
				dialog: [{who:"Fiela",text:"The water is cold!"},{who:"Mom (from outside)",text:"Don't forget your ears!"}],
				image: "🚿",
				interactive: ["💧 Click Water", "🪥 Click Toothbrush", "📖 Dictionary: Fresh"],
				keyPhrase: "I'm washing my face",
				audio: "assets/audio/units/unit1/scene2_narration.mp3"
			},
			{
				id: 3,
				title: "Shower Time",
				setting: "Shower with foam soap, water sound",
				vocabFocus: "bath, soap, bubbles, clean",
				narrative: "Fiela steps into the shower. Warm water falls gently. She rubs soap on her arms and legs. Bubbles float in the air. She feels clean and ready for the day.",
				dialog: [{ who: "Fiela", text: "I love bubbles!" }],
				image: "🛁",
				interactive: ["🫧 Click Soap → bubble effect", "🛁 Play 'bath' audio", "📖 Word: clean"],
				keyPhrase: "I love bubbles",
				audio: "assets/audio/units/unit1/scene3_narration.mp3"
			},
			{
				id: 4, title: "Choosing an Outfit", setting:"Bedroom with open closet, school clothes",
				vocabFocus:"uniform, shirt, skirt/pants, shoes, get dressed",
				narrative:"Fiela opens her wardrobe. She sees her school uniform neatly folded. She puts on her shirt, her skirt, and her white socks. Then she ties her shoelaces slowly.",
				dialog:[{who:"Fiela",text:"I'm almost ready!"},{who:"Mom",text:"Good job! Don't forget your shoes."}],
				image: "👗",
				interactive: ["👕 Click Clothes → audio 'shirt'", "👟 Drag clothes to Fiela (mini challenge)", "📖 Word: uniform"],
				keyPhrase: "I'm almost ready",
				audio: "assets/audio/units/unit1/scene4_narration.mp3"
			},
			{
				id:5, title:"Breakfast with Mom", setting:"Dining table with a simple breakfast", vocabFocus:"breakfast, rice, egg, milk, spoon",
				narrative:"Fiela sits at the dining table. Her mom has prepared rice, an egg, and a glass of milk. The food smells nice and warm. Fiela takes a moment before eating. Then, Fiela eats her breakfast happily.",
				dialog:[{who:"Mom",text:"Eat slowly."},{who:"Fiela",text:"Okay, Mom. This egg is yummy!"}],
				image: "🥣",
				interactive: ["🥛 Click Milk → audio", "🥚 Click Egg → audio", "📖 Word: spoon"],
				keyPhrase: "This egg is yummy",
				audio: "assets/audio/units/unit1/scene5_narration.mp3"
			},
			{
				id:6, title:"Packing the Bag", setting:"Near the door, school bags, books, bottle", vocabFocus:"bag, book, bottle, pack",
				narrative:"After breakfast, Fiela packs her school bag. She puts in her book, her pencil case, and her water bottle. Her bag is a little heavy, but she can carry it.",
				dialog:[{who:"Fiela",text:"Mom, I'm ready!"},{who:"Mom",text:"Great! Let's go."}],
				image: "🎒",
				interactive: ["🎒 Drag items to bag", "📚 Click Book → audio", "💧 Click Bottle → audio"],
				keyPhrase: "I'm ready for school",
				audio: "assets/audio/units/unit1/scene6_narration.mp3"
			},
			{
				id:7, title:"Walking to School", setting:"Morning walks, birds chirping, friends passing by", vocabFocus:"walk, run, school, friend",
				narrative:"Fiela walks outside. The air is fresh. Birds are singing on the tree. She sees her friend, Dira, waving from across the street. They walk together toward school.",
				dialog:[{who:"Dira",text:"Good morning, Fiela!"},{who:"Fiela",text:"Good morning! Let's walk together."}],
				image: "🚶",
				interactive: ["🐦 Click Bird → chirp audio", "👋 Click Friend → audio", "📖 Word: friend"],
				keyPhrase: "Let's walk together",
				audio: "assets/audio/units/unit1/scene7_narration.mp3"
			},
			{
				id:8, title:"Ready for Class!", setting:"School gate & morning atmosphere", vocabFocus:"ready, school, hello, morning",
				narrative:"Fiela reaches the school gate. She feels happy and ready to learn. She waves goodbye to her mom and walks into her classroom.",
				dialog:[{who:"Mom",text:"Have a great day!"},{who:"Fiela",text:"Thank you, Mom!"}],
				image: "🏫",
				interactive: ["🎓 Reward: 'You finished the story!'", "📚 Vocabulary List", "🎮 Mini-games unlocked"],
				keyPhrase: "Have a great day",
				audio: "assets/audio/units/unit1/scene8_narration.mp3"
			}
		]
	},
	{
		id: 2,
		title: "My Family",
		emoji: "👨‍👩‍👧‍👦",
		vocab: {
			"Family Nouns": ["mother", "father", "sister", "brother", "grandmother", "grandfather"],
			"House & Objects": ["living room", "kitchen", "table", "photo", "chair"],
			"Actions": ["help", "cook", "read", "talk", "play", "hug"],
			"Expressions": ["This is my…", "Let me help!", "Come here!", "Thank you!", "I love you!"]
		},
		scenes: [
			{
				id: 1,
				title: "Sunday Morning at Home",
				setting: "Fiela's house, warm morning",
				vocabFocus: "morning, family, living room, together",
				narrative: "It is Sunday morning. Fiela wakes up feeling happy. Today, her whole family is at home. She walks to the living room and sees her mother, father, and little sister sitting together.",
				dialog: [
					{ who: "Fiela", text: "Good morning, everyone!" },
					{ who: "Mother", text: "Good morning, Fiela!" }
				],
				image: "🏠",
				interactive: ["🛋️ Click Sofa → audio 'living room'", "📖 Word: family"],
				keyPhrase: "Good morning everyone",
				audio: "assets/audio/units/unit2/scene1_narration.mp3"
			},
			{
				id: 2,
				title: "Helping Mom in the Kitchen",
				setting: "Kitchen with vegetables, stove, apron",
				vocabFocus: "mother, kitchen, cook, vegetables, help",
				narrative: "Fiela goes to the kitchen. Her mother is cutting vegetables. The kitchen smells delicious. Fiela puts on a small apron. She wants to help.",
				dialog: [
					{ who: "Fiela", text: "Mom, let me help!" },
					{ who: "Mother", text: "Of course! Please wash the carrots." }
				],
				image: "👩‍🍳",
				interactive: ["🥕 Click Carrots → audio", "💧 Vegetable wash effect", "📖 Word: cook"],
				keyPhrase: "Let me help",
				audio: "assets/audio/units/unit2/scene2_narration.mp3"
			},
			{
				id: 3,
				title: "Dad’s Quiet Corner",
				setting: "Dad reading newspaper in chair",
				vocabFocus: "father, read, chair, newspaper, quiet",
				narrative: "Fiela walks to the corner of the living room. Her father is reading the newspaper in his favorite chair. He smiles softly when he sees Fiela.",
				dialog: [
					{ who: "Father", text: "Good morning, sweetheart." },
					{ who: "Fiela", text: "What are you reading, Dad?" },
					{ who: "Father", text: "Just the morning news." }
				],
				image: "📰",
				interactive: ["📰 Click Newspaper → audio", "👨 Dad gesture animation"],
				keyPhrase: "What are you reading",
				audio: "assets/audio/units/unit2/scene3_narration.mp3"
			},
			{
				id: 4,
				title: "Playing with Little Sister",
				setting: "Playroom with toys and blocks",
				vocabFocus: "sister, toys, play, blocks, share",
				narrative: "In the play area, Fiela’s little sister, Mila, is building a tower with colorful blocks. Fiela sits beside her and helps her add another block on top.",
				dialog: [
					{ who: "Mila", text: "Play with me!" },
					{ who: "Fiela", text: "Okay! Let's share the blocks." }
				],
				image: "🧱",
				interactive: ["🧱 Drag blocks", "👧 Click Sister → audio"],
				keyPhrase: "Let's share the blocks",
				audio: "assets/audio/units/unit2/scene4_narration.mp3"
			},
			{
				id: 5,
				title: "A Visit from Grandma",
				setting: "Front door, Grandma arrives with bag",
				vocabFocus: "grandmother, visit, hug, bag",
				narrative: "Ding dong! The doorbell rings. Fiela runs to the door. It is her grandmother! She gives Fiela a warm hug.",
				dialog: [
					{ who: "Grandma", text: "I brought some fresh fruit for you!" },
					{ who: "Fiela", text: "Thank you, Grandma!" }
				],
				image: "👵",
				interactive: ["🎁 Click Bag → audio", "🤗 Hug animation"],
				keyPhrase: "Thank you grandma",
				audio: "assets/audio/units/unit2/scene5_narration.mp3"
			},
			{
				id: 6,
				title: "Grandpa’s Story Time",
				setting: "Porch with grandfather, story time",
				vocabFocus: "grandfather, story, chair, afternoon, laugh",
				narrative: "Grandpa sits on the porch with his wooden cane. He loves telling stories from his childhood. Fiela sits close to him and listens carefully.",
				dialog: [
					{ who: "Grandfather", text: "Did I ever tell you about the mango tree?" },
					{ who: "Fiela", text: "No, Grandpa! Tell me!" }
				],
				image: "👴",
				interactive: ["📖 Play story audio", "🥭 Mango image popup"],
				keyPhrase: "Tell me a story",
				audio: "assets/audio/units/unit2/scene6_narration.mp3"
			},
			{
				id: 7,
				title: "Family Photo Time",
				setting: "Family gathers for photo",
				vocabFocus: "photo, smile, together, family",
				narrative: "Mother takes out her phone. 'Let's take a family photo!' she says. Everyone gathers in the living room. They smile brightly—click!—a beautiful picture is taken.",
				dialog: [
					{ who: "Father", text: "One more! Say cheese!" },
					{ who: "All", text: "Cheese!" }
				],
				image: "📸",
				interactive: ["📸 Camera flash animation", "😊 Smile audio"],
				keyPhrase: "Say cheese",
				audio: "assets/audio/units/unit2/scene7_narration.mp3"
			},
			{
				id: 8,
				title: "A Lovely Ending",
				setting: "Twilight in the living room",
				vocabFocus: "happy, love, home, evening",
				narrative: "In the evening, the family sits together once again. They laugh, talk, and enjoy the quiet night. Fiela looks at everyone and feels warm inside. 'This is my family,' she thinks. 'I love them so much.'",
				dialog: [
					{ who: "Mother", text: "Did you have a good day?" },
					{ who: "Fiela", text: "Yes, Mom. The best day!" }
				],
				image: "❤️",
				interactive: ["❤️ Family hug", "🏠 Home popup", "⭐ Reward badge"],
				keyPhrase: "I love you all",
				audio: "assets/audio/units/unit2/scene8_narration.mp3"
			}
		]
	},
	{
		id: 3,
		title: "In the Classroom",
		emoji: "🏫",
		vocab: {
			Objects: ["book", "pencil", "eraser", "bag", "table", "chair", "board", "marker", "clock", "window"],
			Actions: ["sit", "stand", "write", "read", "listen", "raise your hand", "open", "close", "point"],
			Expressions: ["Good morning, class!", "I don't understand", "Can you help me?", "May I go to the toilet?", "Let's work together!", "Very good!"]
		},
		scenes: [
			{
				id: 1,
				title: "Entering the Classroom",
				setting: "Before the lesson starts, students enter the class",
				vocabFocus: "classroom, bag, desk, chair, board",
				narrative: "The bell rings. Ding-dong! Fiela walks into her classroom. She puts her bag beside her desk and sits on her favorite chair. The room is bright and full of colorful posters. Her friends are taking out their books.",
				dialog: [
					{ who: "Teacher (Ms. Rani)", text: "Good morning, class!" },
					{ who: "Students", text: "Good morning, Teacher!" }
				],
				image: "🏫",
				interactive: ["🕐 Click Clock → audio", "🪑 Click Desk → audio"],
				keyPhrase: "Good morning class",
				audio: "assets/audio/units/unit3/scene1_narration.mp3"
			},
			{
				id: 2,
				title: "Time to Start",
				setting: "Teacher at whiteboard with colored markers",
				vocabFocus: "teacher, board, marker, write, listen",
				narrative: "Ms. Rani walks to the board. She picks up a blue marker. She writes the topic of the day: 'My Favorite Things'. The students listen quietly.",
				dialog: [
					{ who: "Teacher", text: "Today, we learn new words. Please listen carefully." },
					{ who: "Fiela (whispering to Dira)", text: "I like the blue marker!" }
				],
				image: "📝",
				interactive: ["✏️ Marker writing animation", "🔊 Play 'marker' audio"],
				keyPhrase: "Please listen carefully",
				audio: "assets/audio/units/unit3/scene2_narration.mp3"
			},
			{
				id: 3,
				title: "Learning New Words",
				setting: "Teacher shows picture cards",
				vocabFocus: "book, pencil, eraser, ruler, repeat",
				narrative: "Ms. Rani shows four picture cards: a book, a pencil, an eraser, and a ruler. She holds each card high so everyone can see.",
				dialog: [
					{ who: "Teacher", text: "Repeat after me: book." },
					{ who: "Students", text: "Book!" },
					{ who: "Teacher", text: "Pencil." },
					{ who: "Students", text: "Pencil!" }
				],
				image: "📚",
				interactive: ["📚 Click Card → pronunciation", "🎮 Matching mini-game"],
				keyPhrase: "Book pencil eraser",
				audio: "assets/audio/units/unit3/scene3_narration.mp3"
			},
			{
				id: 4,
				title: "Pair Work with Dira",
				setting: "Fiela paired up with Dira",
				vocabFocus: "pair, help, ask, answer, talk",
				narrative: "The students work in pairs. Fiela and Dira sit together and practice asking and answering questions. They smile and help each other pronounce the words correctly.",
				dialog: [
					{ who: "Dira", text: "What is this?" },
					{ who: "Fiela", text: "It's an eraser!" },
					{ who: "Fiela", text: "Your turn!" },
					{ who: "Dira", text: "Okay!" }
				],
				image: "👥",
				interactive: ["👥 Pair practice", "💬 Ask–answer activity"],
				keyPhrase: "What is this",
				audio: "assets/audio/units/unit3/scene4_narration.mp3"
			},
			{
				id: 5,
				title: "A Little Problem",
				setting: "Fiela's book falls — small learning moment",
				vocabFocus: "fall, pick up, careful, understand",
				narrative: "Suddenly, Fiela's book falls to the floor with a soft thud. She bends down to pick it up. But she doesn't understand one word on the page.",
				dialog: [
					{ who: "Fiela", text: "Teacher, I don't understand this word." },
					{ who: "Teacher", text: "Let me help you, Fiela." }
				],
				image: "📖",
				interactive: ["📚 Click Book → audio", "🔍 Highlight word"],
				keyPhrase: "I don't understand",
				audio: "assets/audio/units/unit3/scene5_narration.mp3"
			},
			{
				id: 6,
				title: "Teacher’s Explanation",
				setting: "Teacher explains with visual cards",
				vocabFocus: "point, show, say, meaning",
				narrative: "Ms. Rani comes to Fiela's desk. She points at the word and shows a picture card that matches it. Her explanation is clear and simple.",
				dialog: [
					{ who: "Teacher", text: "This word means 'clean'. Repeat after me." },
					{ who: "Fiela", text: "Clean." },
					{ who: "Teacher", text: "Very good!" }
				],
				image: "✨",
				interactive: ["👉 Pointing animation", "🔊 Pronounce 'clean'"],
				keyPhrase: "Clean means tidy",
				audio: "assets/audio/units/unit3/scene6_narration.mp3"
			},
			{
				id: 7,
				title: "Group Activity: Classroom Hunt",
				setting: "Object search activity in class",
				vocabFocus: "find, look for, window, clock, bag, chair",
				narrative: "It's activity time! Ms. Rani says: 'Find three things in the classroom!' The students walk around excitedly.",
				dialog: [
					{ who: "Fiela", text: "I found the clock!" },
					{ who: "Dira", text: "I found a window!" }
				],
				image: "🔍",
				interactive: ["🔍 Scavenger hunt mini-game", "🕐 Click Clock"],
				keyPhrase: "I found the clock",
				audio: "assets/audio/units/unit3/scene7_narration.mp3"
			},
			{
				id: 8,
				title: "Closing Time",
				setting: "End of lesson, students clean up",
				vocabFocus: "clean up, put away, goodbye, see you",
				narrative: "The class is almost over. Students put away their pencils and close their books. The room becomes quiet again.",
				dialog: [
					{ who: "Teacher", text: "Good job today, class. See you tomorrow!" },
					{ who: "Students", text: "See you, Teacher!" }
				],
				image: "👋",
				interactive: ["🧹 Clean up", "👋 Goodbye audio", "⭐ Reward badge"],
				keyPhrase: "See you tomorrow teacher",
				audio: "assets/audio/units/unit3/scene8_narration.mp3"
			}
		]
	},
	{
		id: 4,
		title: "My Favorite Food",
		emoji: "🍽️",
		vocab: {
			Food: ["rice", "noodles", "chicken", "fish", "vegetables", "fruit", "soup", "egg", "water"],
			Taste: ["sweet", "salty", "spicy", "crunchy", "warm", "delicious", "fresh"],
			Actions: ["eat", "cook", "wash", "cut", "mix", "taste", "choose", "enjoy"],
			Expressions: ["My favorite food is…", "I like…", "I don't like…", "Can I try?", "This is yummy!", "Let's eat!"]
		},
		scenes: [
			{
				id: 1,
				title: "What's for Lunch?",
				setting: "Kitchen, smell of food",
				vocabFocus: "lunch, food, smell, delicious",
				narrative: "It is almost lunchtime. Fiela walks into the kitchen and smells something delicious. Her stomach growls softly. She wonders what her mother is cooking today.",
				dialog: [
					{ who: "Fiela", text: "Mom, what's for lunch?" },
					{ who: "Mother", text: "Come and see!" }
				],
				image: "🍳",
				interactive: ["🍳 Pan sound", "👃 Click 'delicious' definition"],
				keyPhrase: "What's for lunch",
				audio: "assets/audio/units/unit4/scene1_narration.mp3"
			},
			{
				id: 2,
				title: "Helping in the Kitchen",
				setting: "Preparing ingredients",
				vocabFocus: "vegetables, chicken, egg, wash, cut",
				narrative: "On the table, there are fresh vegetables, pieces of chicken, and two eggs. Mother washes the vegetables under running water. She cuts the carrots and mixes them with other ingredients.",
				dialog: [
					{ who: "Fiela", text: "Can I help?" },
					{ who: "Mother", text: "Yes, please wash the tomatoes." }
				],
				image: "🥕",
				interactive: ["🍅 Wash tomatoes mini-game", "🥕 Cut vegetables animation"],
				keyPhrase: "Can I help",
				audio: "assets/audio/units/unit4/scene2_narration.mp3"
			},
			{
				id: 3,
				title: "Tasting the Soup",
				setting: "Soup pot with steam",
				vocabFocus: "soup, warm, taste, spoon",
				narrative: "A pot of warm soup is boiling gently. Mother dips a wooden spoon and tastes it. She smiles happily.",
				dialog: [
					{ who: "Mother", text: "The soup is ready. Do you want to try?" },
					{ who: "Fiela", text: "Yes, please!" }
				],
				image: "🍲",
				interactive: ["🥄 Click Spoon → audio 'taste'", "🌡️ 'Warm' popup"],
				keyPhrase: "Yes please",
				audio: "assets/audio/units/unit4/scene3_narration.mp3"
			},
			{
				id: 4,
				title: "Choosing My Favorite Food",
				setting: "Dining table full of food",
				vocabFocus: "rice, chicken, fruit, choose, favorite",
				narrative: "Lunch is ready! On the dining table, there is rice, chicken, soup, and a bowl of fresh fruit. Fiela looks at everything carefully. She wants to choose her favorite food.",
				dialog: [
					{ who: "Fiela", text: "Hmm… I like chicken. It's my favorite!" },
					{ who: "Mother", text: "Good choice!" }
				],
				image: "🍗",
				interactive: ["🍗 Click Chicken → audio", "🎮 Choose your favorite mini-game"],
				keyPhrase: "Chicken is my favorite",
				audio: "assets/audio/units/unit4/scene4_narration.mp3"
			},
			{
				id: 5,
				title: "Eating Together",
				setting: "Family meal time",
				vocabFocus: "eat, drink, enjoy, glass, water",
				narrative: "Fiela sits with her family. They take a short moment together before eating. Then they begin their meal. Fiela eats her rice and chicken happily and drinks a glass of cool water.",
				dialog: [
					{ who: "Father", text: "How is the food?" },
					{ who: "Fiela", text: "It's yummy!" }
				],
				image: "👨‍👩‍👧",
				interactive: ["🥤 Click Glass → audio", "😋 'Enjoy' popup"],
				keyPhrase: "It's yummy",
				audio: "assets/audio/units/unit4/scene5_narration.mp3"
			},
			{
				id: 6,
				title: "A Spicy Surprise",
				setting: "Chili sauce on the side",
				vocabFocus: "spicy, try, small, careful",
				narrative: "Next to the rice, there is a small spoon of chili sauce. Fiela looks at it curiously. She touches a tiny bit with her finger. Her eyes widen. 'It's spicy!' she laughs.",
				dialog: [
					{ who: "Fiela", text: "Can I try this?" },
					{ who: "Mother", text: "Just a little. It's spicy!" }
				],
				image: "🌶️",
				interactive: ["🌶️ Click Chili → 'Spicy' audio", "🔥 Small flame effect (fun)"],
				keyPhrase: "It's spicy",
				audio: "assets/audio/units/unit4/scene6_narration.mp3"
			},
			{
				id: 7,
				title: "Fruit Time!",
				setting: "Colorful fruit bowls",
				vocabFocus: "apple, banana, mango, sweet, fresh",
				narrative: "After lunch, it's fruit time. Fiela picks a slice of mango. It is sweet and fresh.",
				dialog: [
					{ who: "Dira (voice note)", text: "What are you eating?" },
					{ who: "Fiela", text: "A sweet mango!" }
				],
				image: "🥭",
				interactive: ["🥭 Click Mango → audio", "🍌 Click Banana → audio"],
				keyPhrase: "A sweet mango",
				audio: "assets/audio/units/unit4/scene7_narration.mp3"
			},
			{
				id: 8,
				title: "My Favorite Food",
				setting: "Fiela writes about her favorite food",
				vocabFocus: "write, favorite, food, love",
				narrative: "In the afternoon, Fiela writes about her favorite food for tomorrow’s class presentation. She draws a plate of chicken and rice. At the top of the card, she writes: 'My favorite food is chicken.'",
				dialog: [
					{ who: "Fiela", text: "I love chicken. It always makes me happy." }
				],
				image: "📝",
				interactive: ["📝 Click Card → read aloud", "⭐ Reward badge 'Food Explorer'"],
				keyPhrase: "My favorite food is chicken",
				audio: "assets/audio/units/unit4/scene8_narration.mp3"
			}
		]
	},
	{
		id: 5,
		title: "Let's Play Outside",
		emoji: "⚽",
		vocab: {
			"Outdoor & Environment": ["yard", "park", "playground", "slide", "swing", "ball", "tree", "grass", "sun", "wind"],
			"Action Verbs": ["run", "jump", "climb", "throw", "catch", "kick", "slide", "swing", "chase", "rest"],
			Expressions: ["Let's play!", "Be careful!", "Can I join?", "It's my turn!", "Let's take a break."]
		},
		scenes: [
			{
				id: 1,
				title: "A Sunny Afternoon",
				setting: "The yard, the sun is bright, birds chirp",
				vocabFocus: "sunny, outside, yard, grass",
				narrative: "It is a sunny afternoon. Fiela looks out the window and sees the bright yard. The grass is green, and the wind is gentle. She quickly puts on her shoes.",
				dialog: [
					{ who: "Fiela", text: "Mom, can I play outside?" },
					{ who: "Mother", text: "Yes, but be careful!" }
				],
				image: "☀️",
				interactive: ["☀️ Click Sun → audio", "🏡 Click Yard → popup"],
				keyPhrase: "Can I play outside",
				audio: "assets/audio/units/unit5/scene1_narration.mp3"
			},
			{
				id: 2,
				title: "Meeting Friends",
				setting: "Front of house with friends",
				vocabFocus: "friends, together, play, join",
				narrative: "When Fiela steps outside, she sees Dira and two other friends standing near a tree. They wave excitedly when they see her.",
				dialog: [
					{ who: "Friends", text: "Fiela! Let's play!" },
					{ who: "Fiela", text: "Sure! Can I join?" },
					{ who: "Friends", text: "Of course!" }
				],
				image: "👋",
				interactive: ["👋 Wave hello animation", "👥 Click Friend → audio"],
				keyPhrase: "Can I join",
				audio: "assets/audio/units/unit5/scene2_narration.mp3"
			},
			{
				id: 3,
				title: "Ball Game Time",
				setting: "Small field for playing",
				vocabFocus: "ball, throw, catch, kick, run",
				narrative: "The children start with a simple ball game. Fiela throws the ball to Dira. Dira catches it and kicks it gently to another friend. Everyone laughs and runs across the field.",
				dialog: [
					{ who: "Fiela", text: "Catch this!" },
					{ who: "Dira", text: "I got it!" }
				],
				image: "⚽",
				interactive: ["⚽ Ball mini-game", "🎾 Throw sound", "✋ Catch sound"],
				keyPhrase: "Catch the ball",
				audio: "assets/audio/units/unit5/scene3_narration.mp3"
			},
			{
				id: 4,
				title: "On the Playground",
				setting: "Playground with swings and slides",
				vocabFocus: "playground, slide, swing, climb, turn",
				narrative: "They move to the playground. Fiela climbs up the slide ladder. She slides down fast—whoosh! Her friends take turns on the swing.",
				dialog: [
					{ who: "Fiela", text: "It's fun!" },
					{ who: "Friend", text: "My turn next!" }
				],
				image: "🛝",
				interactive: ["🛝 Slide whoosh", "🎠 Swing sound"],
				keyPhrase: "It's so much fun",
				audio: "assets/audio/units/unit5/scene4_narration.mp3"
			},
			{
				id: 5,
				title: "A Small Challenge",
				setting: "Mini obstacle course",
				vocabFocus: "jump, step, challenge, careful",
				narrative: "The children decide to create a small obstacle course using sticks and stones. They jump over small rocks and step carefully between the sticks. Everyone tries to finish without touching the lines.",
				dialog: [
					{ who: "Dira", text: "Be careful!" },
					{ who: "Fiela", text: "I can do it!" }
				],
				image: "🤸",
				interactive: ["🤸 Jump challenge", "🏃 Run audio"],
				keyPhrase: "I can do it",
				audio: "assets/audio/units/unit5/scene5_narration.mp3"
			},
			{
				id: 6,
				title: "Windy Moment",
				setting: "Wind blows, leaves fall",
				vocabFocus: "wind, tree, leaves, fly, cool",
				narrative: "Suddenly, the wind blows stronger. Leaves fly around the yard like little butterflies. The children look up at the dancing branches.",
				dialog: [
					{ who: "Fiela", text: "Wow! The wind is cool!" },
					{ who: "Friend", text: "Look at the leaves!" }
				],
				image: "🍃",
				interactive: ["🍃 Falling leaves animation", "💨 Wind sound"],
				keyPhrase: "The wind is cool",
				audio: "assets/audio/units/unit5/scene6_narration.mp3"
			},
			{
				id: 7,
				title: "Taking a Break",
				setting: "Under a big tree for shade",
				vocabFocus: "rest, thirsty, water, shade",
				narrative: "After running and playing, the children sit under a big tree. The shade feels cool. Fiela drinks water from her bottle. Everyone takes a slow, long breath.",
				dialog: [
					{ who: "Fiela", text: "I'm thirsty." },
					{ who: "Dira", text: "Here, have some water." }
				],
				image: "💧",
				interactive: ["💧 Click Bottle → water audio", "😌 Rest animation"],
				keyPhrase: "I'm thirsty",
				audio: "assets/audio/units/unit5/scene7_narration.mp3"
			},
			{
				id: 8,
				title: "Time to Go Home",
				setting: "Sunset, afternoon",
				vocabFocus: "tired, happy, home, goodbye",
				narrative: "The sun begins to set. The children stand up and wave goodbye to each other. Fiela feels tired but very happy.",
				dialog: [
					{ who: "Friends", text: "See you tomorrow!" },
					{ who: "Fiela", text: "See you!" }
				],
				image: "🌅",
				interactive: ["👋 Goodbye wave", "🌟 Unit complete reward"],
				keyPhrase: "See you tomorrow",
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
