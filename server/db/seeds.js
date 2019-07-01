use mapps;
db.dropDatabase();

db.countries.insertMany([

  {
    name: "France",
    easy: [
      {
        question: "Which of these is the flag of France?",
        answers: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer: "flag_url1"
      },
      {
        question_2: "What is the capital city of France?",
        answers_q2: [ "Paris", "Glasgow", "London", "Milan" ],
        correct_answer_q2: "Paris"
      },
      {
        question_3: "What is the main lanuguge spoken in France?",
        answers_q3: [ "English", "French", "Italian", "Spanish" ],
        correct_answer_q3: "French"
      },
      {
        question_4: "Which of these is a well known landmark in France?",
        answers_q4: [ "London Bridge", "The Empire State Building", "The White House", "The Eiffel Tower" ],
        correct_answer_q4: "The Eiffel Tower"
      },
      {
        question_5: "Which of these is a famous French food?",
        answers_q5: [ "Pizza", "Sushi", "Baguette", "Scones" ],
        correct_answer_q5: "Baguette"
      }
    ],
    medium: [
      {
        question_1: "What is the national sport of France?",
        answers: [ "Football", "Tennis", "Cycling", "Rugby" ],
        correct_answer: "Football"
      },
      {
        question_2: "What is the main currency used in France?",
        answers_q2: [ "The Pound", "The Euro", "The Dollar", "The Yen" ],
        correct_answer_q2: "The Euro"
      },
      {
        question_3: "What is the approximate population of France in millions?",
        answers_q3: [ "75", "59", "81", "67" ],
        correct_answer_q3: "67"
      },
      {
        question_4: "Which is the most populated city of France?",
        answers_q4: [ "Toulouse", "Lyon", "Paris", "Marseille" ],
        correct_answer_q4: "Paris"
      },
      {
        question_5: "What is the national animal of France?",
        answers_q5: [ "The Dog", "The Rooster", "The Cat", "The Pigeon" ],
        correct_answer_q5: "The Rooster"
      }
    ],
    hard: [
      {
        question_1: "Which is the longest river that runs through France?",
        answers: [ "The Rhine", "The Loire", "The Rhone", "The Seine" ],
        correct_answer: "The Rhine"
      },
      {
        question_2: "Which is the second most populated city of France?",
        answers_q2: [ "Toulouse", "Lyon", "Nice", "Marseille" ],
        correct_answer_q2: "Marseille"
      },
      {
        question_3: "Which is the highest mountain in France?",
        answers_q3: [ "Grande Casse", "Mont Pourri", "Mont Pelvoux", "Mont Blanc" ],
        correct_answer_q3: "Mont Blanc"
      },
      {
        question_4: "What is the most common faith practised in France?",
        answers_q4: [ "Christianity", "Islam", "Judaism", "Hinduism" ],
        correct_answer_q4: "Christianity"
      },
      {
        question_5: "What is the population density per square kilometer of France?",
        answers_q5: [ "200", "138", "104", "89" ],
        correct_answer_q5: "104"
      }
    ],
    lat_long: "48.8566° N, 2.3522° E",
    flag: ""
  },

  {
    name: "Japan",
    easy: [
      {
        question_1: "Which of these is the flag of Japan?",
        answers: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer: "flag_url2"
      },
      {
        question_2: "What is the capital city of Japan?",
        answers_q2: [ "Paris", "Tokyo", "London", "Milan" ],
        correct_answer_q2: "Tokyo"
      },
      {
        question_3: "What is the main lanuguge spoken in Japan?",
        answers_q3: [ "English", "French", "Japanese", "Spanish" ],
        correct_answer_q3: "Janpanese"
      },
      {
        question_4: "Which of these is a well known landmark in Japan?",
        answers_q4: [ "London Bridge", "The Empire State Building", "Mount Fuji", "The Eiffel Tower" ],
        correct_answer_q4: "Mount Fuji"
      },
      {
        question_5: "Which of these is a famous Janpanese food?",
        answers_q5: [ "Pizza", "Sushi", "Baguette", "Scones" ],
        correct_answer_q5: "Sushi"
      }
    ],
    medium: [
      {
        question_1: "What is the national sport of Japan?",
        answers: [ "Judo", "Tennis", "Sumo Wrestling", "Baseball" ],
        correct_answer: "Sumo Wrestling"
      },
      {
        question_2: "What is the main currency used in Japan?",
        answers_q2: [ "The Won", "The Baht", "The Dollar", "The Yen" ],
        correct_answer_q2: "The Yen"
      },
      {
        question_3: "What is the approximate population of Japan in millions?",
        answers_q3: [ "126", "79", "81", "65" ],
        correct_answer_q3: "126"
      },
      {
        question_4: "Which is the most populated city of Japan?",
        answers_q4: [ "Tokyo", "Osaka", "Sapporo", "Kyoto" ],
        correct_answer_q4: "Tokyo"
      },
      {
        question_5: "What is the national animal of Japan?",
        answers_q5: [ "The Dog", "The Monkey", "The Wild Boar", "None!" ],
        correct_answer_q5: "None!"
      }
    ],
    hard: [
      {
        question_1: "Which is the longest river that runs through Japan?",
        answers: [ "The Mu", "The Tukoro", "The Teshio", "The Ishikari" ],
        correct_answer: "The Ishikari"
      },
      {
        question_2: "Which is the second most populated city of Japan?",
        answers_q2: [ "Yokohama", "Osaka", "Sapporo", "Kyoto" ],
        correct_answer_q2: "Yokohama"
      },
      {
        question_3: "Which is the highest mountain in Japan?",
        answers_q3: [ "Mount Yari", "Mount Aino", "Mount Kita", "Mount Fuji" ],
        correct_answer_q3: "Mount Fuji"
      },
      {
        question_4: "What is the most common faith practised in Japan?",
        answers_q4: [ "Christianity", "Shinto", "Buddhism", "Hinduism" ],
        correct_answer_q4: "Shinto"
      },
      {
        question_5: "What is the population density per square kilometer of Japan?",
        answers_q5: [ "245", "138", "110", "334" ],
        correct_answer_q5: "334"
      }
    ],
    lat_long: [35.6804, 139.7690],
    flag: ""
  },

  {
    name: "USA",
    easy: [
      {
        question_1: "Which of these is the flag of the USA?",
        answers: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer: "flag_url3"
      },
      {
        question_2: "What is the capital city of the USA?",
        answers_q2: [ "Washington DC", "New York", "London", "Milan" ],
        correct_answer_q2: "Washington DC"
      },
      {
        question_3: "What is the main lanuguge spoken in the USA?",
        answers_q3: [ "English", "French", "German", "Spanish" ],
        correct_answer_q3: "English"
      },
      {
        question_4: "Which of these is a well known landmark in the USA?",
        answers_q4: [ "London Bridge", "The Empire State Building", "Mount Fuji", "The Eiffel Tower" ],
        correct_answer_q4: "The Empire State Building"
      },
      {
        question_5: "Which of these is a famous food from the USA?",
        answers_q5: [ "Pizza", "Sushi", "Baguette", "Hamburgers" ],
        correct_answer_q5: "Hamburgers"
      }
    ],
    medium: [
      {
        question_1: "What is the national sport of the USA?",
        answers: [ "American Football", "Tennis", "Golf", "Baseball" ],
        correct_answer: "Basball"
      },
      {
        question_2: "What is the main currency used in the USA?",
        answers_q2: [ "The Pound", "The Baht", "The Dollar", "The Yen" ],
        correct_answer_q2: "The Dollar"
      },
      {
        question_3: "What is the approximate population of the USA in millions?",
        answers_q3: [ "327", "279", "181", "405" ],
        correct_answer_q3: "327"
      },
      {
        question_4: "Which is the most populated city of the USA?",
        answers_q4: [ "Los Angeles", "Houston", "Chicago", "New York City" ],
        correct_answer_q4: "New York City"
      },
      {
        question_5: "What is the national animal of the USA?",
        answers_q5: [ "The Dog", "The Bison", "The Bald Eagle", "The Bear" ],
        correct_answer_q5: "The Bison"
      }
    ],
    hard: [
      {
        question_1: "Which is the longest river that runs through the USA?",
        answers: [ "The Colorado", "The Ohio", "The Mississippi", "The Missouri" ],
        correct_answer: "The Missouri"
      },
      {
        question_2: "Which is the second most populated city of the USA?",
        answers_q2: [ "Los Angeles", "Houston", "Chicago", "Philadelphia" ],
        correct_answer_q2: "Los Angeles"
      },
      {
        question_3: "Which is the highest mountain in the USA?",
        answers_q3: [ "The Denali", "Mount Massive", "Mount Sanford", "Mount Blackburn" ],
        correct_answer_q3: "The Denali"
      },
      {
        question_4: "What is the most common faith practised in the USA?",
        answers_q4: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer_q4: "Christianity"
      },
      {
        question_5: "What is the population density per square kilometer of the USA?",
        answers_q5: [ "245", "85", "110", "234" ],
        correct_answer_q5: "85"
      }
    ],
    lat_long: "38.9072° N, 77.0369° W",
    flag: ""
  },

  {
    name: "Russia",
    easy: [
      {
        question_1: "Which of these is the flag of Russia?",
        answers: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer: "flag_url4"
      },
      {
        question_2: "What is the capital city of Russia?",
        answers_q2: [ "Paris", "New York", "London", "Moscow" ],
        correct_answer_q2: "Moscow"
      },
      {
        question_3: "What is the main lanuguge spoken in Russia?",
        answers_q3: [ "English", "French", "German", "Russian" ],
        correct_answer_q3: "Russian"
      },
      {
        question_4: "Which of these is a well known landmark in Russia?",
        answers_q4: [ "London Bridge", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer_q4: "The Moscow Kremlin"
      },
      {
        question_5: "Which of these is a famous food from Russia?",
        answers_q5: [ "Borscht", "Sushi", "Baguette", "Hamburgers" ],
        correct_answer_q5: "Borscht"
      }
    ],
    medium: [
      {
        question_1: "What is the national sport of Russia?",
        answers: [ "Football", "Tennis", "Wrestling", "Bandy" ],
        correct_answer: "Bandy"
      },
      {
        question_2: "What is the main currency used in Russia?",
        answers_q2: [ "The Ruble", "The Krona", "The Dollar", "The Yen" ],
        correct_answer_q2: "The Ruble"
      },
      {
        question_3: "What is the approximate population of Russia in millions?",
        answers_q3: [ "147", "279", "191", "305" ],
        correct_answer_q3: "147"
      },
      {
        question_4: "Which is the most populated city of Russia?",
        answers_q4: [ "St. Petersberg", "Moscow", "Samara", "Kazan" ],
        correct_answer_q4: "Moscow"
      },
      {
        question_5: "What is the national animal of Russia?",
        answers_q5: [ "The Dog", "The Siberian Tiger", "The Eagle", "The Brown Bear" ],
        correct_answer_q5: "The Brown Bear"
      }
    ],
    hard: [
      {
        question_1: "Which is the longest river that runs through Russia?",
        answers: [ "The Volga", "The Lena", "The Ob-Irtysh", "The Yenisei-Angara-Selenge" ],
        correct_answer: "The Yenisei-Angara-Selenge"
      },
      {
        question_2: "Which is the second most populated city of Russia?",
        answers_q2: [ "St. Petersberg", "Novosibirik", "Samara", "Kazan" ],
        correct_answer_q2: "St. Petersberg"
      },
      {
        question_3: "Which is the highest mountain in Russia?",
        answers_q3: [ "Mount Jimara", "Mount Kazbek", "Mount Pushkin", "Mount Elbrus" ],
        correct_answer_q3: "Mount Elbrus"
      },
      {
        question_4: "What is the most common faith practised in Russia?",
        answers_q4: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer_q4: "Christianity"
      },
      {
        question_5: "What is the population density per square kilometer of Russia?",
        answers_q5: [ "9", "85", "43", "62" ],
        correct_answer_q5: "9"
      }
    ],
      lat_long: "55.7558° N, 37.6173° E",
      flag: ""
  },

  {
    name: "China",
    easy: [
      {
        question_1: "Which of these is the flag of China?",
        answers: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer: "flag_url1"
      },
      {
        question_2: "What is the capital city of China?",
        answers_q2: [ "Paris", "Beijing", "Tokyo", "Moscow" ],
        correct_answer_q2: "Beijing"
      },
      {
        question_3: "What is the main lanuguge spoken in China?",
        answers_q3: [ "English", "French", "Chinese", "Russian" ],
        correct_answer_q3: "Chinese"
      },
      {
        question_4: "Which of these is a well known landmark in China?",
        answers_q4: [ "The Great Wall", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer_q4: "The Great Wall"
      },
      {
        question_5: "Which of these is a famous food from China?",
        answers_q5: [ "Borscht", "Sushi", "Chow Mein", "Hamburgers" ],
        correct_answer_q5: "Chow Mein"
      }
    ],
    medium: [
      {
        question_1: "What is the national sport of China?",
        answers: [ "Football", "Ping-Pong", "Wrestling", "Kung Fu" ],
        correct_answer: "Ping-Pong"
      },
      {
        question_2: "What is the main currency used in China?",
        answers_q2: [ "The Yuan", "The Krona", "The Dollar", "The Yen" ],
        correct_answer_q2: "The Yuan"
      },
      {
        question_3: "What is the approximate population of China in millions?",
        answers_q3: [ "991", "1109", "591", "1386" ],
        correct_answer_q3: "1386"
      },
      {
        question_4: "Which is the most populated city of China?",
        answers_q4: [ "Shanghai", "Beijing", "Tianjin", "Shenzhen" ],
        correct_answer_q4: "Shanghai"
      },
      {
        question_5: "What is the national animal of China?",
        answers_q5: [ "The Dog", "The Giant Panda", "The Monkey", "The Cat" ],
        correct_answer_q5: "The Giant Panda"
      }
    ],
    hard: [
      {
        question_1: "Which is the longest river that runs through China?",
        answers: [ "The Yangtze", "The Yarlung", "The Yellow", "The Heilongjiang" ],
        correct_answer: "The Yangtze"
      },
      {
        question_2: "Which is the second most populated city of China?",
        answers_q2: [ "Shanghai", "Beijing", "Tianjin", "Shenzhen" ],
        correct_answer_q2: "Beijing"
      },
      {
        question_3: "Which is the highest mountain in China?",
        answers_q3: [ "K2", "Mount Lhotse", "Mount Makalu", "Mount Everest" ],
        correct_answer_q3: "Mount Everest"
      },
      {
        question_4: "What is the most common faith practised in China?",
        answers_q4: [ "Christianity", "Chinese Folklore", "Buddhism", "Islam" ],
        correct_answer_q4: "Buddhism"
      },
      {
        question_5: "What is the population density per square kilometer of China?",
        answers_q5: [ "145", "285", "83", "71" ],
        correct_answer_q5: "145"
      }
    ],
      lat_long: "39.9042° N, 116.4074° E",
      flag: ""
  },

  {
    name: "Brazil",
    easy: [
      {
        question_1: "Which of these is the flag of Brazil?",
        answers: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer: "flag_url2"
      },
      {
        question_2: "What is the capital city of Brazil?",
        answers_q2: [ "Brasilia", "New York", "Tokyo", "Moscow" ],
        correct_answer_q2: "Brasilia"
      },
      {
        question_3: "What is the main lanuguge spoken in Brazil?",
        answers_q3: [ "English", "French", "Chinese", "Portuguese" ],
        correct_answer_q3: "Portuguese"
      },
      {
        question_4: "Which of these is a well known landmark in Brazil?",
        answers_q4: [ "Sugarloaf Mountain", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer_q4: "Sugarloaf Mountain"
      },
      {
        question_5: "Which of these is a famous food from Brazil?",
        answers_q5: [ "Picanha", "Sushi", "Chow Mein", "Hamburgers" ],
        correct_answer_q5: "Picanha"
      }
    ],
    medium: [
      {
        question_1: "What is the national sport of Brazil?",
        answers: [ "Football", "Golf", "Tennis", "Volleyball" ],
        correct_answer: "Football"
      },
      {
        question_2: "What is the main currency used in Brazil?",
        answers_q2: [ "The Peso", "The Krona", "The Dollar", "The Real" ],
        correct_answer_q2: "The Real"
      },
      {
        question_3: "What is the approximate population of Brazil in millions?",
        answers_q3: [ "178", "301", "191", "210" ],
        correct_answer_q3: "210"
      },
      {
        question_4: "Which is the most populated city of Brazil?",
        answers_q4: [ "Salvador", "Brasilia", "Sao Paulo", "Rio De Janeiro" ],
        correct_answer_q4: "Sao Paulo"
      },
      {
        question_5: "What is the national animal of Brazil?",
        answers_q5: [ "The Dog", "The Jaguar", "The Monkey", "The Cat" ],
        correct_answer_q5: "The Jaguar"
      }
    ],
    hard: [
      {
        question_1: "Which is the longest river that runs through Brazil?",
        answers: [ "The Rio Negro", "The Purus", "The Parana", "The Amazon" ],
        correct_answer: "The Amazon"
      },
      {
        question_2: "Which is the second most populated city of Brazil?",
        answers_q2: [ "Salvador", "Brasilia", "Sao Paulo", "Rio De Janeiro" ],
        correct_answer_q2: "Rio De Janeiro"
      },
      {
        question_3: "Which is the highest mountain in Brazil?",
        answers_q3: [ "Pedra Da Mina", "Mount Roraima", "Pico Da Bandeira", "Pico Da Neblina" ],
        correct_answer_q3: "Pico Da Neblina"
      },
      {
        question_4: "What is the most common faith practised in Brazil?",
        answers_q4: [ "Roman Catholicism", "Judaism", "Buddhism", "Islam" ],
        correct_answer_q4: "Roman Catholicism"
      },
      {
        question_5: "What is the population density per square kilometer of Brazil?",
        answers_q5: [ "65", "25", "183", "91" ],
        correct_answer_q5: "25"
      }
    ],
      lat_long: "15.8267° S, 47.9218° W",
      flag: ""
  },

  {
    name: "Australia",
    easy: [
      {
        question_1: "Which of these is the flag of Australia?",
        answers: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer: "flag_url3"
      },
      {
        question_2: "What is the capital city of Australia?",
        answers_q2: [ "Brasilia", "New York", "Tokyo", "Canberra" ],
        correct_answer_q2: "Canberra"
      },
      {
        question_3: "What is the main lanuguge spoken in Australia?",
        answers_q3: [ "English", "French", "Chinese", "Portuguese" ],
        correct_answer_q3: "English"
      },
      {
        question_4: "Which of these is a well known landmark in Australia?",
        answers_q4: [ "Sydney Opera House", "The Empire State Building", "The Moscow Kremlin", "The Eiffel Tower" ],
        correct_answer_q4: "Sydney Opera House"
      },
      {
        question_5: "Which of these is a famous food from Australia?",
        answers_q5: [ "Vegemite", "Sushi", "Chow Mein", "Hamburgers" ],
        correct_answer_q5: "Vegemite"
      }
    ],
    medium: [
      {
        question_1: "What is the national sport of Australia?",
        answers: [ "Football", "Rugby", "Tennis", "Cricket" ],
        correct_answer: "Cricket"
      },
      {
        question_2: "What is the main currency used in Australia?",
        answers_q2: [ "The Peso", "The Krona", "The Dollar", "The Pound" ],
        correct_answer_q2: "The Dollar"
      },
      {
        question_3: "What is the approximate population of Australia in millions?",
        answers_q3: [ "25", "39", "9", "49" ],
        correct_answer_q3: "25"
      },
      {
        question_4: "Which is the most populated city of Australia?",
        answers_q4: [ "Sydney", "Perth", "Brisbane", "Melbourne" ],
        correct_answer_q4: "Sydney"
      },
      {
        question_5: "What is the national animal of Australia?",
        answers_q5: [ "The Kangaroo", "The Dingo", "The Koala", "The Wombat" ],
        correct_answer_q5: "The Kangaroo"
      }
    ],
    hard: [
      {
        question_1: "Which is the longest river that runs through Australia?",
        answers: [ "The Darling", "Cooper Creek", "The Murray", "The Lachlan" ],
        correct_answer: "The Murray"
      },
      {
        question_2: "Which is the second most populated city of Australia?",
        answers_q2: [ "Sydney", "Perth", "Brisbane", "Melbourne" ],
        correct_answer_q2: "Melbourne"
      },
      {
        question_3: "Which is the highest mountain in Australia?",
        answers_q3: [ "Mount Townsend", "Mount Kosciuszko", "Rams Head", "Alice Rawson Peak" ],
        correct_answer_q3: "Mount Kosciuszko"
      },
      {
        question_4: "What is the most common faith practised in Australia?",
        answers_q4: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer_q4: "Christianity"
      },
      {
        question_5: "What is the population density per square kilometer of Australia?",
        answers_q5: [ "16", "3", "37", "41" ],
        correct_answer_q5: "3"
      }
    ],
      lat_long: "35.2809° S, 149.1300° E",
      flag: ""
  },

  {
    name: "India",
    easy: [
      {
        question_1: "Which of these is the flag of India?",
        answers: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer: "flag_url4"
      },
      {
        question_2: "What is the capital city of India?",
        answers_q2: [ "London", "New Delhi", "Tokyo", "Canberra" ],
        correct_answer_q2: "New Delhi"
      },
      {
        question_3: "What is the main lanuguge spoken in India?",
        answers_q3: [ "English", "Hindi", "Chinese", "Portuguese" ],
        correct_answer_q3: "Hindi"
      },
      {
        question_4: "Which of these is a well known landmark in India?",
        answers_q4: [ "Sydney Opera House", "The Empire State Building", "The Taj Mahal", "The Eiffel Tower" ],
        correct_answer_q4: "Taj Mahal"
      },
      {
        question_5: "Which of these is a famous food from India?",
        answers_q5: [ "Vegemite", "Sushi", "Chow Mein", "Naan Bread" ],
        correct_answer_q5: "Naan Bread"
      }
    ],
    medium: [
      {
        question_1: "What is the national sport of India?",
        answers: [ "Hockey", "Kaddabi", "None!", "Cricket" ],
        correct_answer: "None!"
      },
      {
        question_2: "What is the main currency used in India?",
        answers_q2: [ "The Rupee", "The Krona", "The Dollar", "The Dinar" ],
        correct_answer_q2: "The Rupee"
      },
      {
        question_3: "What is the approximate population of India in millions?",
        answers_q3: [ "1102", "894", "909", "1350" ],
        correct_answer_q3: "1350"
      },
      {
        question_4: "Which is the most populated city of India?",
        answers_q4: [ "Mumbai", "Bangalore", "Kolkata", "New Delhi" ],
        correct_answer_q4: "Mumbai"
      },
      {
        question_5: "What is the national animal of India?",
        answers_q5: [ "The Monkey", "The Bengal Tiger", "The Cow", "The Dog" ],
        correct_answer_q5: "The Bengal Tiger"
      }
    ],
    hard: [
      {
        question_1: "Which is the longest river that runs through India?",
        answers: [ "The Ganges", "The Krishna", "The Brahmaputra", "The Indus" ],
        correct_answer: "The Indus"
      },
      {
        question_2: "Which is the second most populated city of India?",
        answers_q2: [ "Mumbai", "Bangalore", "Kolkata", "New Delhi" ],
        correct_answer_q2: "New Delhi"
      },
      {
        question_3: "Which is the highest mountain in India?",
        answers_q3: [ "Mount Kamet", "Mount Nanda Devi", "K12", "Mount Kanchenjunga" ],
        correct_answer_q3: "Mount Kanchenjunga"
      },
      {
        question_4: "What is the most common faith practised in India?",
        answers_q4: [ "Hinduism", "Sikhism", "Buddhism", "Islam" ],
        correct_answer_q4: "Hinduism"
      },
      {
        question_5: "What is the population density per square kilometer of India?",
        answers_q5: [ "415", "302", "289", "350" ],
        correct_answer_q5: "415"
      }
    ],
      lat_long: "28.6139° N, 77.2090° E",
      flag: ""
  },

  {
    name: "South Africa",
    easy: [
      {
        question_1: "Which of these is the flag of South Africa?",
        answers: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer: "flag_url1"
      },
      {
        question_2: "What is the capital city of South Africa?",
        answers_q2: [ "London", "New Delhi", "Tokyo", "Pretoria" ],
        correct_answer_q2: "Pretoria"
      },
      {
        question_3: "What is the main lanuguge spoken in South Africa?",
        answers_q3: [ "English", "Zulu", "French", "Portuguese" ],
        correct_answer_q3: "Zulu"
      },
      {
        question_4: "Which of these is a well known landmark in South Africa?",
        answers_q4: [ "Sydney Opera House", "Table Mountain", "The Taj Mahal", "The Eiffel Tower" ],
        correct_answer_q4: "Table Mountain"
      },
      {
        question_5: "Which of these is a famous food from South Africa?",
        answers_q5: [ "Vegemite", "Sushi", "Chow Mein", "Biltong" ],
        correct_answer_q5: "Biltong"
      }
    ],
    medium: [
      {
        question_1: "What is the national sport of South Africa?",
        answers: [ "Rugby", "Football", "None!", "Cricket" ],
        correct_answer: "None!"
      },
      {
        question_2: "What is the main currency used in South Africa?",
        answers_q2: [ "The Rupee", "The Krona", "The Dollar", "The Rand" ],
        correct_answer_q2: "The Rand"
      },
      {
        question_3: "What is the approximate population of South Africa in millions?",
        answers_q3: [ "58", "102", "39", "65" ],
        correct_answer_q3: "58"
      },
      {
        question_4: "Which is the most populated city of South Africa?",
        answers_q4: [ "Cape Town", "Johannesburg", "Pretoria", "Durban" ],
        correct_answer_q4: "Cape Town"
      },
      {
        question_5: "What is the national animal of South Africa?",
        answers_q5: [ "The Springbok", "The Lion", "The Elephant", "The Leopard" ],
        correct_answer_q5: "The Springbok"
      }
    ],
    hard: [
      {
        question_1: "Which is the longest river that runs through South Africa?",
        answers: [ "The Vaal", "The Limpopo", "The Great Fish", "The Orange" ],
        correct_answer: "The Orange"
      },
      {
        question_2: "Which is the second most populated city of South Africa?",
        answers_q2: [ "Cape Town", "Johannesburg", "Pretoria", "Durban" ],
        correct_answer_q2: "Johannesburg"
      },
      {
        question_3: "Which is the highest mountain in South Africa?",
        answers_q3: [ "Mount Thabana Ntlenyana", "Red Wall Peak", "Mount Mafadi", "Mount Makheka" ],
        correct_answer_q3: "Mount Thabana Ntlenyana"
      },
      {
        question_4: "What is the most common faith practised in South Africa?",
        answers_q4: [ "Christianity", "Judaism", "Buddhism", "Islam" ],
        correct_answer_q4: "Christianity"
      },
      {
        question_5: "What is the population density per square kilometer of South Africa?",
        answers_q5: [ "28", "42", "89", "97" ],
        correct_answer_q5: "42"
      }
    ],
      lat_long: "25.7479° S, 28.2293° E",
      flag: ""
  },

  {
    name: "Scotland",
    easy: [
      {
        question_1: "Which of these is the flag of Scotland?",
        answers: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer: "flag_url2"
      },
      {
        question_2: "What is the capital city of Scotland?",
        answers_q2: [ "London", "New Delhi", "Tokyo", "Edinburgh" ],
        correct_answer_q2: "Edinburgh"
      },
      {
        question_3: "What is the main lanuguge spoken in Scotland?",
        answers_q3: [ "English", "Spanish", "French", "Portuguese" ],
        correct_answer_q3: "English"
      },
      {
        question_4: "Which of these is a well known landmark in Scotland?",
        answers_q4: [ "Sydney Opera House", "Edinburgh Castle", "The Taj Mahal", "The Eiffel Tower" ],
        correct_answer_q4: "Edinburgh Castle"
      },
      {
        question_5: "Which of these is a famous food from Scotland?",
        answers_q5: [ "Vegemite", "Sushi", "Chow Mein", "Haggis" ],
        correct_answer_q5: "Haggis"
      }
    ],
    medium: [
      {
        question_1: "What is the national sport of Scotland?",
        answers: [ "Rugby", "Football", "None!", "Darts" ],
        correct_answer: "Football"
      },
      {
        question_2: "What is the main currency used in Scotland?",
        answers_q2: [ "The Pound", "The Krona", "The Dollar", "The Peso" ],
        correct_answer_q2: "The Pound"
      },
      {
        question_3: "What is the approximate population of Scotland in millions?",
        answers_q3: [ "5.5", "10.2", "6.7", "2.3" ],
        correct_answer_q3: "5.5"
      },
      {
        question_4: "Which is the most populated city of Scotland?",
        answers_q4: [ "Aderdeen", "Edinburgh", "Dundee", "Glasgow" ],
        correct_answer_q4: "Glasgow"
      },
      {
        question_5: "What is the national animal of Scotland?",
        answers_q5: [ "The Deer", "The Lion", "The Golden Eagle", "The Unicorn" ],
        correct_answer_q5: "The Unicorn"
      }
    ],
    hard: [
      {
        question_1: "Which is the longest river that runs through Scotland?",
        answers: [ "The Spey", "The Clyde", "The Tay", "The Dee" ],
        correct_answer: "The Tay"
      },
      {
        question_2: "Which is the second most populated city of Scotland?",
        answers_q2: [ "Aderdeen", "Edinburgh", "Dundee", "Glasgow" ],
        correct_answer_q2: "Edinburgh"
      },
      {
        question_3: "Which is the highest mountain in Scotland?",
        answers_q3: [ "Ben Nevis", "Ben Macdui", "Cairn Gorm", "Cairn Toul" ],
        correct_answer_q3: "Ben Nevis"
      },
      {
        question_4: "What is the most common faith practised in Scotland?",
        answers_q4: [ "Christianity", "Hinduism", "Buddhism", "Islam" ],
        correct_answer_q4: "Christianity"
      },
      {
        question_5: "What is the population density per square kilometer of Scotland?",
        answers_q5: [ "33", "68", "49", "91" ],
        correct_answer_q5: "68"
      }
    ],
      lat_long: "55.9533° N, 3.1883° W",
      flag: ""
  }


])
