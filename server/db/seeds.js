use mapps;
db.dropDatabase();

db.countries.insertMany([

  {
    name: "France",
    greeting: "Bien. The nation of Proust, Monet and Napoleon... There is no more romantic language in the world.",
    easy: [
      {
        question: "Which of these is the flag of France?",
        answers: [ "../assets/images/france.png", "../assets/images/brazil.png", "../assets/images/japan.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/france.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of France?",
        answers: [ "Paris", "Glasgow", "London", "Milan" ],
        correct_answer: "Paris",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in France?",
        answers: [ "English", "French", "Italian", "Spanish" ],
        correct_answer: "French",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in France?",
        answers: [ "London Bridge", "The Empire State Building", "The White House", "The Eiffel Tower" ],
        correct_answer: "The Eiffel Tower",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous French food?",
        answers: [ "Pizza", "Sushi", "Baguette", "Scones" ],
        correct_answer: "Baguette",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is a well known landmark in France?",
        answers: [ "../assets/images/eiffel_tower.jpeg", "../assets/images/sugarloaf_mountain.jpeg", "../assets/images/mount_fuji.jpeg", "../assets/images/empire_state.jpeg" ],
        correct_answer: "../assets/images/eiffel_tower.jpeg",
        question_shorthand: "Landmark"
      },
      {
        question: "What is the national sport of France?",
        answers: [ "Football", "Tennis", "Cycling", "Rugby" ],
        correct_answer: "Football",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of France in millions?",
        answers: [ "75 million", "59 million", "81 million", "67 million" ],
        correct_answer: "67 million",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of France?",
        answers: [ "Toulouse", "Lyon", "Paris", "Marseille" ],
        correct_answer: "Paris",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of France?",
        answers: [ "The Dog", "The Rooster", "The Cat", "The Pigeon" ],
        correct_answer: "The Rooster",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the national animal of France?",
        answers: [ "../assets/images/rooster.jpeg", "../assets/images/jaguar.jpeg", "../assets/images/springbok.jpeg", "../assets/images/bison.jpeg" ],
        correct_answer: "../assets/images/rooster.jpeg",
        question_shorthand: "National Animal"
      },
      {
        question: "Which is the longest river that runs through France?",
        answers: [ "The Rhine", "The Loire", "The Rhone", "The Seine" ],
        correct_answer: "The Rhine",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in France?",
        answers: [ "Grande Casse", "Mont Pourri", "Mont Pelvoux", "Mont Blanc" ],
        correct_answer: "Mont Blanc",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in France?",
        answers: [ "Christianity", "Islam", "Judaism", "Hinduism" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of France?",
        answers: [ "200", "138", "104", "89" ],
        correct_answer: "104",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
    lat_long: [47.064034, 2.497441],
    zooms: [2.7, 3.6, 4.4, 5.2, 5.8],
    flag: ""
  },

  {
    name: "Japan",
    greeting: "Good choice, or 'yoi sentaku' as they'd say in Japan. You haven't seen the future until you've seen Tokyo!",
    easy: [
      {
        question: "Which of these is the flag of Japan?",
        answers: [ "../assets/images/russia.png", "../assets/images/japan.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/japan.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of Japan?",
        answers: [ "Paris", "Tokyo", "London", "Milan" ],
        correct_answer: "Tokyo",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in Japan?",
        answers: [ "English", "French", "Japanese", "Spanish" ],
        correct_answer: "Japanese",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in Japan?",
        answers: [ "London Bridge", "The Empire State Building", "Mount Fuji", "The Eiffel Tower" ],
        correct_answer: "Mount Fuji",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous Japanese food?",
        answers: [ "Pizza", "Sushi", "Baguette", "Scones" ],
        correct_answer: "Sushi",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is a well known landmark in Japan?",
        answers: [ "../assets/images/moscow_kremlin.jpeg", "../assets/images/mount_fuji.jpeg", "../assets/images/eiffel_tower.jpeg", "../assets/images/empire_state.jpeg" ],
        correct_answer: "../assets/images/mount_fuji.jpeg",
        question_shorthand: "Landmark"
      },
      {
        question: "What is the national sport of Japan?",
        answers: [ "Judo", "Tennis", "Sumo Wrestling", "Baseball" ],
        correct_answer: "Sumo Wrestling",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of Japan in millions?",
        answers: [ "126 million", "79 million", "81 million", "65 million" ],
        correct_answer: "126 million",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of Japan?",
        answers: [ "Tokyo", "Osaka", "Sapporo", "Kyoto" ],
        correct_answer: "Tokyo",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of Japan?",
        answers: [ "The Dog", "The Monkey", "The Wild Boar", "None!" ],
        correct_answer: "None!",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the national sport of Japan?",
        answers: [ "../assets/images/sumo_wrestling.jpeg", "../assets/images/judo.jpeg", "../assets/images/tennis.jpeg", "../assets/images/baseball.jpeg" ],
        correct_answer: "../assets/images/sumo_wrestling.jpeg",
        question_shorthand: "National Sport"
      },
      {
        question: "Which is the longest river that runs through Japan?",
        answers: [ "The Mu", "The Tukoro", "The Teshio", "The Ishikari" ],
        correct_answer: "The Ishikari",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in Japan?",
        answers: [ "Mount Yari", "Mount Aino", "Mount Kita", "Mount Fuji" ],
        correct_answer: "Mount Fuji",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in Japan?",
        answers: [ "Christianity", "Shinto", "Buddhism", "Hinduism" ],
        correct_answer: "Shinto",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of Japan?",
        answers: [ "245", "138", "110", "334" ],
        correct_answer: "334",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
    lat_long: [38.667580, 137.846949],
    zooms: [2.6, 3.3, 4.0, 4.7, 5.2],
    flag: ""
  },

  {
    name: "USA",
    greeting: "The nation of Hemingway, Franklin D. Roosevelt and Youtube. I was educated in the States, you know!",
    easy: [
      {
        question: "Which of these is the flag of the USA?",
        answers: [ "../assets/images/russia.png", "../assets/images/scotland.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/usa.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of the USA?",
        answers: [ "Washington DC", "New York", "London", "Milan" ],
        correct_answer: "Washington DC",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in the USA?",
        answers: [ "English", "French", "German", "Spanish" ],
        correct_answer: "English",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in the USA?",
        answers: [ "London Bridge", "The Empire State Building", "Mount Fuji", "The Eiffel Tower" ],
        correct_answer: "The Empire State Building",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from the USA?",
        answers: [ "Pizza", "Sushi", "Baguette", "Hamburgers" ],
        correct_answer: "Hamburgers",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is a well known landmark in the USA?",
        answers: [ "../assets/images/moscow_kremlin.jpeg", "../assets/images/edinburgh_castle.jpeg", "../assets/images/eiffel_tower.jpeg", "../assets/images/empire_state.jpeg" ],
        correct_answer: "../assets/images/empire_state.jpeg",
        question_shorthand: "Landmark"
      },
      {
        question: "What is the national sport of the USA?",
        answers: [ "American Football", "Tennis", "Golf", "Baseball" ],
        correct_answer: "Baseball",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of the USA in millions?",
        answers: [ "327 million", "279 million", "181 million", "405 million" ],
        correct_answer: "327 million",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of the USA?",
        answers: [ "Los Angeles", "Houston", "Chicago", "New York City" ],
        correct_answer: "New York City",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of the USA?",
        answers: [ "The Dog", "The Bison", "The Bald Eagle", "The Bear" ],
        correct_answer: "The Bison",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the national animal of the USA?",
        answers: [ "../assets/images/brown_bear.jpeg", "../assets/images/rooster.jpeg", "../assets/images/jaguar.jpeg", "../assets/images/bison.jpeg" ],
        correct_answer: "../assets/images/bison.jpeg",
        question_shorthand: "National Animal"
      },
      {
        question: "Which is the longest river that runs through the USA?",
        answers: [ "The Colorado", "The Ohio", "The Mississippi", "The Missouri" ],
        correct_answer: "The Missouri",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in the USA?",
        answers: [ "The Denali", "Mount Massive", "Mount Sanford", "Mount Blackburn" ],
        correct_answer: "The Denali",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in the USA?",
        answers: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of the USA?",
        answers: [ "245", "85", "110", "234" ],
        correct_answer: "85",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
    lat_long: [38.849452, -97.234994],
    zooms: [2.4, 3.0, 3.5, 4.0, 4.37],
    flag: ""
  },

  {
    name: "Russia",
    greeting: "In Russia, the tests take you! I jest- it's a beautiful country with the greatest writers in the world.",
    easy: [
      {
        question: "Which of these is the flag of Russia?",
        answers: [ "../assets/images/brazil.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/russia.png" ],
        correct_answer: "../assets/images/russia.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of Russia?",
        answers: [ "Paris", "New York", "London", "Moscow" ],
        correct_answer: "Moscow",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in Russia?",
        answers: [ "English", "French", "German", "Russian" ],
        correct_answer: "Russian",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in Russia?",
        answers: [ "London Bridge", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer: "The Moscow Kremlin",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from Russia?",
        answers: [ "Borscht", "Sushi", "Baguette", "Hamburgers" ],
        correct_answer: "Borscht",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is a well known landmark in Russia?",
        answers: [ "../assets/images/sugarloaf_mountain.jpeg", "../assets/images/great_wall.jpeg", "../assets/images/eiffel_tower.jpeg", "../assets/images/moscow_kremlin.jpeg" ],
        correct_answer: "../assets/images/moscow_kremlin.jpeg",
        question_shorthand: "Landmark"
      },
      {
        question: "What is the national sport of Russia?",
        answers: [ "Football", "Tennis", "Wrestling", "Bandy" ],
        correct_answer: "Bandy",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of Russia in millions?",
        answers: [ "147 million", "279 million", "191 million", "305 million" ],
        correct_answer: "147 million",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of Russia?",
        answers: [ "St. Petersberg", "Moscow", "Samara", "Kazan" ],
        correct_answer: "Moscow",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of Russia?",
        answers: [ "The Dog", "The Siberian Tiger", "The Eagle", "The Brown Bear" ],
        correct_answer: "The Brown Bear",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the national animal of Russia?",
        answers: [ "../assets/images/jaguar.jpeg", "../assets/images/giant_panda.jpeg", "../assets/images/rooster.jpeg", "../assets/images/brown_bear.jpeg" ],
        correct_answer: "../assets/images/brown_bear.jpeg",
        question_shorthand: "National Animal"
      },
      {
        question: "Which is the longest river that runs through Russia?",
        answers: [ "The Volga", "The Lena", "The Ob-Irtysh", "The Yenisei-Angara-Selenge" ],
        correct_answer: "The Yenisei-Angara-Selenge",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in Russia?",
        answers: [ "Mount Jimara", "Mount Kazbek", "Mount Pushkin", "Mount Elbrus" ],
        correct_answer: "Mount Elbrus",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in Russia?",
        answers: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of Russia?",
        answers: [ "9", "85", "43", "62" ],
        correct_answer: "9",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [64.093769, 106.478228],
      zooms: [2.2, 2.4, 2.6, 2.8, 3],
      flag: ""
  },

  {
    name: "China",
    greeting: "Good choice! Or hǎo de xuǎnzé as they'd say in China. I learnt kung fu and good manners there but I bet I can teach you a thing or two...",
    easy: [
      {
        question: "Which of these is the flag of China?",
        answers: [ "../assets/images/china.png", "../assets/images/india.png", "../assets/images/france.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/china.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of China?",
        answers: [ "Paris", "Beijing", "Tokyo", "Moscow" ],
        correct_answer: "Beijing",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in China?",
        answers: [ "English", "French", "Chinese", "Russian" ],
        correct_answer: "Chinese",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in China?",
        answers: [ "The Great Wall", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer: "The Great Wall",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from China?",
        answers: [ "Borscht", "Sushi", "Chow Mein", "Hamburgers" ],
        correct_answer: "Chow Mein",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is a well known landmark in China?",
        answers: [ "../assets/images/great_wall.jpeg", "../assets/images/taj_mahal.jpeg", "../assets/images/eiffel_tower.jpeg", "../assets/images/mount_fuji.jpeg" ],
        correct_answer: "../assets/images/great_wall.jpeg",
        question_shorthand: "Landmark"
      },
      {
        question: "What is the national sport of China?",
        answers: [ "Football", "Ping-Pong", "Wrestling", "Kung Fu" ],
        correct_answer: "Ping-Pong",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of China in millions?",
        answers: [ "991 million", "1109 million", "591 million", "1386 million" ],
        correct_answer: "1386 million",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of China?",
        answers: [ "Shanghai", "Beijing", "Tianjin", "Shenzhen" ],
        correct_answer: "Shanghai",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of China?",
        answers: [ "The Dog", "The Giant Panda", "The Monkey", "The Cat" ],
        correct_answer: "The Giant Panda",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the national animal of China?",
        answers: [ "../assets/images/giant_panda.jpeg", "../assets/images/bengal_tiger.jpeg", "../assets/images/rooster.jpeg", "../assets/images/bison.jpeg" ],
        correct_answer: "../assets/images/giant_panda.jpeg",
        question_shorthand: "National Animal"
      },
      {
        question: "Which is the longest river that runs through China?",
        answers: [ "The Yangtze", "The Yarlung", "The Yellow", "The Heilongjiang" ],
        correct_answer: "The Yangtze",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in China?",
        answers: [ "K2", "Mount Lhotse", "Mount Makalu", "Mount Everest" ],
        correct_answer: "Mount Everest",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in China?",
        answers: [ "Christianity", "Chinese Folklore", "Buddhism", "Islam" ],
        correct_answer: "Buddhism",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of China?",
        answers: [ "145", "285", "83", "71" ],
        correct_answer: "145",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [37, 104.501833],
      zooms: [2.3, 2.8, 3.2, 3.6, 3.95],
      flag: ""
  },

  {
    name: "Brazil",
    greeting: "There's an awful lot of coffee in Brazil! And also the greatest biodiversity of any nation on earth.",
    easy: [
      {
        question: "Which of these is the flag of Brazil?",
        answers: [ "../assets/images/russia.png", "../assets/images/brazil.png", "../assets/images/france.png", "../assets/images/usa.png" ],
        correct_answer: "../assets/images/brazil.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of Brazil?",
        answers: [ "Brasilia", "New York", "Tokyo", "Moscow" ],
        correct_answer: "Brasilia",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in Brazil?",
        answers: [ "English", "French", "Chinese", "Portuguese" ],
        correct_answer: "Portuguese",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in Brazil?",
        answers: [ "Sugarloaf Mountain", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer: "Sugarloaf Mountain",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from Brazil?",
        answers: [ "Picanha", "Sushi", "Chow Mein", "Hamburgers" ],
        correct_answer: "Picanha",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is a well known landmark in Brazil?",
        answers: [ "../assets/images/moscow_kremlin.jpeg", "../assets/images/sugarloaf_mountain.jpeg", "../assets/images/eiffel_tower.jpeg", "../assets/images/empire_state.jpeg" ],
        correct_answer: "../assets/images/sugarloaf_mountain.jpeg",
        question_shorthand: "Landmark"
      },
      {
        question: "What is the national sport of Brazil?",
        answers: [ "Football", "Golf", "Tennis", "Volleyball" ],
        correct_answer: "Football",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of Brazil in millions?",
        answers: [ "178 million", "301 million", "191 million", "210 million" ],
        correct_answer: "210 million",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of Brazil?",
        answers: [ "Salvador", "Brasilia", "Sao Paulo", "Rio De Janeiro" ],
        correct_answer: "Sao Paulo",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of Brazil?",
        answers: [ "The Dog", "The Jaguar", "The Monkey", "The Cat" ],
        correct_answer: "The Jaguar",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the national animal of Brazil?",
        answers: [ "../assets/images/brown_bear.jpeg", "../assets/images/jaguar.jpeg", "../assets/images/rooster.jpeg", "../assets/images/bison.jpeg" ],
        correct_answer: "../assets/images/jaguar.jpeg",
        question_shorthand: "National Animal"
      },
      {
        question: "Which is the longest river that runs through Brazil?",
        answers: [ "The Rio Negro", "The Purus", "The Parana", "The Amazon" ],
        correct_answer: "The Amazon",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in Brazil?",
        answers: [ "Pedra Da Mina", "Mount Roraima", "Pico Da Bandeira", "Pico Da Neblina" ],
        correct_answer: "Pico Da Neblina",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in Brazil?",
        answers: [ "Roman Catholicism", "Judaism", "Buddhism", "Islam" ],
        correct_answer: "Roman Catholicism",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of Brazil?",
        answers: [ "65", "25", "183", "91" ],
        correct_answer: "25",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [-14.181802, -52.468510],
      zooms: [2.2, 2.9, 3.3, 3.7, 4.1],
      flag: ""
  },

  {
    name: "Australia",
    greeting: "Down under... I got bit by a snake there... Nasty business. But if you insist.",
    easy: [
      {
        question: "Which of these is the flag of Australia?",
        answers: [ "../assets/images/france.png", "../assets/images/china.png", "../assets/images/australia.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/australia.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of Australia?",
        answers: [ "Brasilia", "New York", "Tokyo", "Canberra" ],
        correct_answer: "Canberra",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in Australia?",
        answers: [ "English", "French", "Chinese", "Portuguese" ],
        correct_answer: "English",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in Australia?",
        answers: [ "Sydney Opera House", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer: "Sydney Opera House",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from Australia?",
        answers: [ "Vegemite", "Sushi", "Chow Mein", "Hamburgers" ],
        correct_answer: "Vegemite",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is a well known landmark in Australia?",
        answers: [ "../assets/images/eiffel_tower.jpeg", "../assets/images/great_wall.jpeg", "../assets/images/sydney_opera_house.jpeg", "../assets/images/mount_fuji.jpeg" ],
        correct_answer: "../assets/images/sydney_opera_house.jpeg",
        question_shorthand: "Landmark"
      },
      {
        question: "What is the national sport of Australia?",
        answers: [ "Football", "Rugby", "Tennis", "Cricket" ],
        correct_answer: "Cricket",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of Australia in millions?",
        answers: [ "25 million", "39 million", "9 million", "49 million" ],
        correct_answer: "25 million",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of Australia?",
        answers: [ "Sydney", "Perth", "Brisbane", "Melbourne" ],
        correct_answer: "Sydney",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of Australia?",
        answers: [ "The Kangaroo", "The Dingo", "The Koala", "The Wombat" ],
        correct_answer: "The Kangaroo",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the national animal of Australia?",
        answers: [ "../assets/images/rooster.jpeg", "../assets/images/giant_panda.jpeg", "../assets/images/kangaroo.jpeg", "../assets/images/bison.jpeg" ],
        correct_answer: "../assets/images/kangaroo.jpeg",
        question_shorthand: "National Animal"
      },
      {
        question: "Which is the longest river that runs through Australia?",
        answers: [ "The Darling", "Cooper Creek", "The Murray", "The Lachlan" ],
        correct_answer: "The Murray",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in Australia?",
        answers: [ "Mount Townsend", "Mount Kosciuszko", "Rams Head", "Alice Rawson Peak" ],
        correct_answer: "Mount Kosciuszko",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in Australia?",
        answers: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of Australia?",
        answers: [ "16", "3", "37", "41" ],
        correct_answer: "3",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [-27.863754, 133.081807],
      zooms: [2.2, 2.7, 3.2, 3.7, 4.2],
      flag: ""
  },

  {
    name: "India",
    greeting: "Home of Gandhi and Mother Teresa, you can't name me a more spiritual country. I love India.",
    easy: [
      {
        question: "Which of these is the flag of India?",
        answers: [ "../assets/images/india.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/south-africa.png" ],
        correct_answer: "../assets/images/india.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of India?",
        answers: [ "London", "New Delhi", "Tokyo", "Canberra" ],
        correct_answer: "New Delhi",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in India?",
        answers: [ "English", "Hindi", "Chinese", "Portuguese" ],
        correct_answer: "Hindi",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in India?",
        answers: [ "Sydney Opera House", "The Empire State Building", "The Taj Mahal", "The Eiffel Tower" ],
        correct_answer: "Taj Mahal",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from India?",
        answers: [ "Vegemite", "Sushi", "Chow Mein", "Naan Bread" ],
        correct_answer: "Naan Bread",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is a well known landmark in India?",
        answers: [ "../assets/images/taj_mahal.jpeg", "../assets/images/great_wall.jpeg", "../assets/images/eiffel_tower.jpeg", "../assets/images/table_mountain.jpeg" ],
        correct_answer: "../assets/images/taj_mahal.jpeg",
        question_shorthand: "Landmark"
      },
      {
        question: "What is the national sport of India?",
        answers: [ "Hockey", "Kabaddi", "None!", "Cricket" ],
        correct_answer: "None!",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of India in millions?",
        answers: [ "1102 million", "894 million", "909 million", "1350 million" ],
        correct_answer: "1350 million",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of India?",
        answers: [ "Mumbai", "Bangalore", "Kolkata", "New Delhi" ],
        correct_answer: "Mumbai",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of India?",
        answers: [ "The Monkey", "The Bengal Tiger", "The Cow", "The Dog" ],
        correct_answer: "The Bengal Tiger",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the national animal of India?",
        answers: [ "../assets/images/bengal_tiger.jpeg", "../assets/images/giant_panda.jpeg", "../assets/images/rooster.jpeg", "../assets/images/springbok.jpeg" ],
        correct_answer: "../assets/images/bengal_tiger.jpeg",
        question_shorthand: "National Animal"
      },
      {
        question: "Which is the longest river that runs through India?",
        answers: [ "The Ganges", "The Krishna", "The Brahmaputra", "The Indus" ],
        correct_answer: "The Indus",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in India?",
        answers: [ "Mount Kamet", "Mount Nanda Devi", "K12", "Mount Kanchenjunga" ],
        correct_answer: "Mount Kanchenjunga",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in India?",
        answers: [ "Hinduism", "Sikhism", "Buddhism", "Islam" ],
        correct_answer: "Hinduism",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of India?",
        answers: [ "415", "302", "289", "350" ],
        correct_answer: "415",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [22.012176, 78.003143],
      zooms: [2.0, 2.6, 3.2, 3.8, 4.4],
      flag: ""
  },

  {
    name: "South Africa",
    greeting: "Great choice! I once befriended an ostrich in South Africa. She was... she was... beautiful... Oh, where was I.",
    easy: [
      {
        question: "Which of these is the flag of South Africa?",
        answers: [ "../assets/images/scotland.png", "../assets/images/south-africa.png", "../assets/images/usa.png", "../assets/images/japan.png" ],
        correct_answer: "../assets/images/south-africa.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of South Africa?",
        answers: [ "London", "New Delhi", "Tokyo", "Pretoria" ],
        correct_answer: "Pretoria",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in South Africa?",
        answers: [ "English", "Zulu", "French", "Portuguese" ],
        correct_answer: "Zulu",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in South Africa?",
        answers: [ "Sydney Opera House", "Table Mountain", "The Taj Mahal", "The Eiffel Tower" ],
        correct_answer: "Table Mountain",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from South Africa?",
        answers: [ "Vegemite", "Sushi", "Chow Mein", "Biltong" ],
        correct_answer: "Biltong",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is a well known landmark in South Africa?",
        answers: [ "../assets/images/edinburgh_castle.jpeg", "../assets/images/table_mountain.jpeg", "../assets/images/empire_state.jpeg", "../assets/images/mount_fuji.jpeg" ],
        correct_answer: "../assets/images/table_mountain.jpeg",
        question_shorthand: "Landmark"
      },
      {
        question: "What is the national sport of South Africa?",
        answers: [ "Rugby", "Football", "None!", "Cricket" ],
        correct_answer: "None!",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of South Africa in millions?",
        answers: [ "58 million", "102 million", "39 million", "65 million" ],
        correct_answer: "58 million",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of South Africa?",
        answers: [ "Cape Town", "Johannesburg", "Pretoria", "Durban" ],
        correct_answer: "Cape Town",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of South Africa?",
        answers: [ "The Springbok", "The Lion", "The Elephant", "The Leopard" ],
        correct_answer: "The Springbok",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the national animal of South Africa?",
        answers: [ "../assets/images/jaguar.jpeg", "../assets/images/springbok.jpeg", "../assets/images/bison.jpeg", "../assets/images/rooster.jpeg" ],
        correct_answer: "../assets/images/springbok.jpeg",
        question_shorthand: "National Animal"
      },
      {
        question: "Which is the longest river that runs through South Africa?",
        answers: [ "The Vaal", "The Limpopo", "The Great Fish", "The Orange" ],
        correct_answer: "The Orange",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in South Africa?",
        answers: [ "Mount Thabana Ntlenyana", "Red Wall Peak", "Mount Mafadi", "Mount Makheka" ],
        correct_answer: "Mount Thabana Ntlenyana",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in South Africa?",
        answers: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of South Africa?",
        answers: [ "28", "42", "89", "97" ],
        correct_answer: "42",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [-29.131173, 23.816596],
      zooms: [2.0, 2.9, 3.7, 4.6, 5.5],
      flag: ""
  },

  {
    name: "Scotland",
    greeting: "Scotland, eh? I once got into a fight there. I mean, a flight there. Yes. To learn about haggis. Ahem.",
    easy: [
      {
        question: "Which of these is the flag of Scotland?",
        answers: [ "../assets/images/scotland.png", "../assets/images/china.png", "../assets/images/france.png", "../assets/images/india.png" ],
        correct_answer: "../assets/images/scotland.png",
        question_shorthand: "Flag"
      },
      {
        question: "What is the capital city of Scotland?",
        answers: [ "London", "New Delhi", "Tokyo", "Edinburgh" ],
        correct_answer: "Edinburgh",
        question_shorthand: "Capital City"
      },
      {
        question: "What is the main language spoken in Scotland?",
        answers: [ "English", "Spanish", "French", "Portuguese" ],
        correct_answer: "English",
        question_shorthand: "Language"
      },
      {
        question: "Which of these is a well known landmark in Scotland?",
        answers: [ "Sydney Opera House", "Edinburgh Castle", "The Taj Mahal", "The Eiffel Tower" ],
        correct_answer: "Edinburgh Castle",
        question_shorthand: "Famous Landmark"
      },
      {
        question: "Which of these is a famous food from Scotland?",
        answers: [ "Vegemite", "Sushi", "Chow Mein", "Haggis" ],
        correct_answer: "Haggis",
        question_shorthand: "Common Food"
      }
    ],
    medium: [
      {
        question: "Which of these is a well known landmark in Scotland?",
        answers: [ "../assets/images/edinburgh_castle.jpeg", "../assets/images/great_wall.jpeg", "../assets/images/eiffel_tower.jpeg", "../assets/images/taj_mahal.jpeg" ],
        correct_answer: "../assets/images/edinburgh_castle.jpeg",
        question_shorthand: "Landmark"
      },
      {
        question: "What is the national sport of Scotland?",
        answers: [ "Rugby", "Football", "None!", "Darts" ],
        correct_answer: "Football",
        question_shorthand: "National Sport"
      },
      {
        question: "What is the approximate population of Scotland in millions?",
        answers: [ "5.5 million", "10.2 million", "6.7 million", "2.3 million" ],
        correct_answer: "5.5 million",
        question_shorthand: "Population"
      },
      {
        question: "Which is the most populated city of Scotland?",
        answers: [ "Aberdeen", "Edinburgh", "Dundee", "Glasgow" ],
        correct_answer: "Glasgow",
        question_shorthand: "Most Populated City"
      },
      {
        question: "What is the national animal of Scotland?",
        answers: [ "The Deer", "The Lion", "The Golden Eagle", "The Unicorn" ],
        correct_answer: "The Unicorn",
        question_shorthand: "National Animal"
      }
    ],
    hard: [
      {
        question: "Which of these is the national animal of Scotland?",
        answers: [ "../assets/images/unicorn.jpeg", "../assets/images/giant_panda.jpeg", "../assets/images/rooster.jpeg", "../assets/images/bengal_tiger.jpeg" ],
        correct_answer: "../assets/images/unicorn.jpeg",
        question_shorthand: "National Animal"
      },
      {
        question: "Which is the longest river that runs through Scotland?",
        answers: [ "The Spey", "The Clyde", "The Tay", "The Dee" ],
        correct_answer: "The Tay",
        question_shorthand: "Longest River"
      },
      {
        question: "Which is the highest mountain in Scotland?",
        answers: [ "Ben Nevis", "Ben Macdui", "Cairn Gorm", "Cairn Toul" ],
        correct_answer: "Ben Nevis",
        question_shorthand: "Highest Peak"
      },
      {
        question: "What is the most common faith practised in Scotland?",
        answers: [ "Christianity", "Hinduism", "Buddhism", "Islam" ],
        correct_answer: "Christianity",
        question_shorthand: "Most Common Faith"
      },
      {
        question: "What is the population density per square kilometre of Scotland?",
        answers: [ "33", "68", "49", "91" ],
        correct_answer: "68",
        question_shorthand: "Population Density (kmsq)"
      }
    ],
      lat_long: [57.866107, -4.149746],
      zooms: [2, 2.9, 3.9, 4.9, 5.9],
      flag: ""
  }

])

db.maps.insertMany(

  [{
    name: "National Geography",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png?apikey=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ"
  },
  {
    name: "Satellite View",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png?apikey=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ"
  },
  {
    name: "Ocean Base",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}.png?apikey=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ"
  },
  {
    name: "World Street Map",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png?apikey=pk.eyJ1Ijoic2hhdW5oayIsImEiOiJjanhqYTEyazIxeTE4M3lzODMzYjdtNTdhIn0.zjHGZ4T6dhbdg5dQayUugQ"
  },
  {
    name: "Wild West",
    url: "https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=a4a16163a7e14e1280e2d4e258ff71e2"
  },
  {
    name: "Earth At Night",
    url: "https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg"
  },
  {
    name: "Hell Fire",
    url: "https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=a4a16163a7e14e1280e2d4e258ff71e2"
  }

])

db.mi.insertMany(

  [{
    name: "result",
    score: 0,
    games: 0
  }
])
