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
        question: "What is the capital of France?",
        answers: [ "Paris", "Glasgow", "London", "Milan" ],
        correct_answer: "Paris"
      },
      {
        question: "What is the  main lanuguge spoken in France?",
        answers: [ "English", "French", "Italian", "Spanish" ],
        correct_answer: "French"
      },
      {
        question: "Which of these is a well known landmark in France?",
        answers: [ "London Bridge", "The Empire State Building", "The White House", "The Eiffel Tower" ],
        correct_answer: "The Eiffel Tower"
      },
      {
        question: "Which of these is a famous French food?",
        answers: [ "Pizza", "Sushi", "Baguette", "Scones" ],
        correct_answer: "Baguette"
      }
    ],
    medium: [],
    hard: [],
    lat_long: "48.8566° N, 2.3522° E",
    flag: ""
  },

  {
    name: "Japan",
    easy: [
      {
        question_1: "Which of these is the flag of Japan?",
        answers_q1: [ "flag_url1", "flag_url2", "flag_url3", "flag_url4" ],
        correct_answer_q1: "flag_url2"
      },
      {
        question_2: "What is the capital of Japan?",
        answers_q2: [ "Paris", "Tokyo", "London", "Milan" ],
        correct_answer_q2: "Tokyo"
      },
      {
        question_3: "What is the  main lanuguge spoken in Japan?",
        answers_q3: [ "English", "French", "Japanese", "Spanish" ],
        correct_answer_q3: "Janpanese"
      },
      {
        question_4: "Which of these is a well known landmark in Japan?",
        answers_q4: [ "London Bridge", "The Empire State Building", "Mount Fuji", "The Eiffel Tower" ],
        correct_answer_q4: "The Eiffel Tower"
      },
      {
        question_5: "Which of these is a famous Janpanese food?",
        answers_q5: [ "Pizza", "Sushi", "Baguette", "Scones" ],
        correct_answer_q5: "Sushi"
      }
    ],
    medium: [],
    hard: [],
    lat_long: "35.6804° N, 139.7690° E",
    flag: ""
  }

])
