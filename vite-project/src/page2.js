import './style.css'

//trivia page js
document.querySelector(".wol").addEventListener("click", function () {
  if (document.body.classList.contains("blue")) {
    document.body.classList.add("purple");
    document.body.classList.remove("blue");
  } else {
    document.body.classList.add("blue");
    document.body.classList.remove("purple");
  }
});

const questions = [
  // Science Questions
  {type: "Science", question: "What's the chemical formula for carbon dioxide?", answers: ["CO2", "H2O", "C12H22O11", "NH3"], correct: "CO2"},
  {type: "Science", question: "What is the chemical symbol for gold?", answers: ["Au", "Ag", "Pb", "Fe"], correct: "Au"},
  {type: "Science", question: "What planet is known as the Red Planet?", answers: ["Mars", "Venus", "Earth", "Jupiter"], correct: "Mars"},
  {type: "Science", question: "What is the powerhouse of the cell?", answers: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"], correct: "Mitochondria"},
  {type: "Science", question: "What element has the atomic number 1?", answers: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"], correct: "Hydrogen"},
  {type: "Science", question: "What is the most common gas in Earth's atmosphere?", answers: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"], correct: "Nitrogen"},
  {type: "Science", question: "Who developed the theory of relativity?", answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correct: "Albert Einstein"},
  {type: "Science", question: "What is the chemical formula for water?", answers: ["H2O", "CO2", "O2", "NaCl"], correct: "H2O"},
  {type: "Science", question: "Which part of the plant conducts photosynthesis?", answers: ["Leaves", "Roots", "Stem", "Flowers"], correct: "Leaves"},
  {type: "Science", question: "What is the boiling point of water in Celsius?", answers: ["100°C", "0°C", "50°C", "200°C"], correct: "100°C"},
  {type: "Science", question: "What is the most abundant element in the Earth's crust?", answers: ["Oxygen", "Silicon", "Iron", "Aluminum"], correct: "Oxygen"},
  {type: "Science", question: "What is the speed of light?", answers: ["299,792,458 m/s", "300,000 km/s", "150,000 km/s", "1,000,000 m/s"], correct: "299,792,458 m/s"},
  {type: "Science", question: "What does DNA stand for?", answers: ["Deoxyribonucleic Acid", "Dioxyribonucleic Acid", "Deoxyribonitric Acid", "Dynamical Nucleic Acid"], correct: "Deoxyribonucleic Acid"},
  {type: "Science", question: "Which planet is closest to the sun?", answers: ["Mercury", "Venus", "Earth", "Mars"], correct: "Mercury"},
  {type: "Science", question: "Which of these is a noble gas?", answers: ["Neon", "Oxygen", "Nitrogen", "Hydrogen"], correct: "Neon"},
  {type: "Science", question: "What is the largest organ in the human body?", answers: ["Skin", "Liver", "Heart", "Lungs"], correct: "Skin"},
  {type: "Science", question: "Which part of the human body produces insulin?", answers: ["Pancreas", "Liver", "Kidneys", "Stomach"], correct: "Pancreas"},
  {type: "Science", question: "What is the hardest known natural material?", answers: ["Diamond", "Gold", "Iron", "Platinum"], correct: "Diamond"},
  {type: "Science", question: "What is the chemical symbol for sodium?", answers: ["Na", "S", "N", "So"], correct: "Na"},

  // Geography Questions
  {type: "Geography", question: "What is the capital of France?", answers: ["Paris", "London", "Rome", "Berlin"], correct: "Paris"},
  {type: "Geography", question: "Which country has the longest coastline?", answers: ["Canada", "Australia", "Russia", "United States"], correct: "Canada"},
  {type: "Geography", question: "What is the largest desert in the world?", answers: ["Sahara", "Arabian", "Kalahari", "Antarctic"], correct: "Antarctic"},
  {type: "Geography", question: "Which continent is the Sahara Desert located on?", answers: ["Africa", "Asia", "Australia", "South America"], correct: "Africa"},
  {type: "Geography", question: "Which country has the most volcanoes?", answers: ["Indonesia", "Japan", "United States", "Iceland"], correct: "Indonesia"},
  {type: "Geography", question: "What is the longest river in the world?", answers: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], correct: "Amazon River"},
  {type: "Geography", question: "What is the smallest country in the world?", answers: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"], correct: "Vatican City"},
  {type: "Geography", question: "Which country is known as the Land of the Rising Sun?", answers: ["Japan", "China", "South Korea", "Thailand"], correct: "Japan"},
  {type: "Geography", question: "Which ocean is the largest?", answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"], correct: "Pacific Ocean"},
  {type: "Geography", question: "What is the capital of Japan?", answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], correct: "Tokyo"},
  {type: "Geography", question: "Which country has the most islands?", answers: ["Sweden", "Indonesia", "Canada", "Norway"], correct: "Sweden"},
  {type: "Geography", question: "What is the highest mountain in the world?", answers: ["Mount Everest", "K2", "Kangchenjunga", "Mount Kilimanjaro"], correct: "Mount Everest"},
  {type: "Geography", question: "Which country has the longest border with the United States?", answers: ["Canada", "Mexico", "Russia", "China"], correct: "Canada"},
  {type: "Geography", question: "Which city is known as the Big Apple?", answers: ["New York City", "Los Angeles", "Chicago", "Miami"], correct: "New York City"},
  {type: "Geography", question: "What is the largest island in the world?", answers: ["Greenland", "Australia", "New Guinea", "Borneo"], correct: "Greenland"},
  {type: "Geography", question: "Which country has the most populous city in the world?", answers: ["China", "India", "Brazil", "Mexico"], correct: "China"},
  {type: "Geography", question: "Which river flows through Egypt?", answers: ["Nile", "Amazon", "Yangtze", "Ganges"], correct: "Nile"},
  {type: "Geography", question: "What is the capital of Australia?", answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"], correct: "Canberra"},
  {type: "Geography", question: "Which country is the Sahara Desert located in?", answers: ["Algeria", "Morocco", "Egypt", "All of the above"], correct: "All of the above"},

  // History Questions
  {type: "History", question: "Who was the first President of the United States?", answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], correct: "George Washington"},
  {type: "History", question: "In which year did the Titanic sink?", answers: ["1912", "1905", "1920", "1898"], correct: "1912"},
  {type: "History", question: "Who wrote the play 'Romeo and Juliet'?", answers: ["William Shakespeare", "Charles Dickens", "Jane Austen", "George Orwell"], correct: "William Shakespeare"},
  {type: "History", question: "Who was the first woman to fly solo across the Atlantic Ocean?", answers: ["Amelia Earhart", "Harriet Tubman", "Valentina Tereshkova", "Bessie Coleman"], correct: "Amelia Earhart"},
  {type: "History", question: "Which country was ruled by Julius Caesar?", answers: ["Roman Empire", "Greece", "Egypt", "Persia"], correct: "Roman Empire"},
  {type: "History", question: "Who was the leader of the Soviet Union during World War II?", answers: ["Joseph Stalin", "Vladimir Lenin", "Mikhail Gorbachev", "Leon Trotsky"], correct: "Joseph Stalin"},
  {type: "History", question: "In which year did World War II end?", answers: ["1945", "1939", "1941", "1918"], correct: "1945"},
  {type: "History", question: "Who was the first emperor of China?", answers: ["Qin Shi Huang", "Han Wudi", "Li Shimin", "Wu Zetian"], correct: "Qin Shi Huang"},
  {type: "History", question: "Which battle is considered Napoleon's greatest defeat?", answers: ["Battle of Waterloo", "Battle of Leipzig", "Battle of Austerlitz", "Battle of Trafalgar"], correct: "Battle of Waterloo"},
  {type: "History", question: "Which empire was ruled by Alexander the Great?", answers: ["Macedonian Empire", "Roman Empire", "Ottoman Empire", "Persian Empire"], correct: "Macedonian Empire"},
  {type: "History", question: "In which year did the Berlin Wall fall?", answers: ["1989", "1979", "1991", "1961"], correct: "1989"},
  {type: "History", question: "Who was the queen of ancient Egypt famous for her alliances with Julius Caesar and Mark Antony?", answers: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"], correct: "Cleopatra"},
  {type: "History", question: "What was the primary cause of the American Civil War?", answers: ["Slavery", "Economic differences", "State's rights", "All of the above"], correct: "All of the above"},
  {type: "History", question: "Which year did the United States declare independence?", answers: ["1776", "1800", "1492", "1620"], correct: "1776"},
  {type: "History", question: "Who was the first man to set foot on the moon?", answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], correct: "Neil Armstrong"},
  {type: "History", question: "Which war ended with the Treaty of Versailles?", answers: ["World War I", "World War II", "The Korean War", "The Napoleonic Wars"], correct: "World War I"},
  {type: "History", question: "Who was the first emperor of Rome?", answers: ["Augustus", "Julius Caesar", "Tiberius", "Nero"], correct: "Augustus"},
  {type: "History", question: "What event marked the beginning of the French Revolution?", answers: ["Storming of the Bastille", "Execution of Louis XVI", "Declaration of the Rights of Man", "Reign of Terror"], correct: "Storming of the Bastille"},
  {type: "History", question: "Who was the leader of the civil rights movement in the United States during the 1960s?", answers: ["Martin Luther King Jr.", "Malcolm X", "Rosa Parks", "Frederick Douglass"], correct: "Martin Luther King Jr."},
  {type: "History", question: "What was the name of the ship that brought the Pilgrims to America in 1620?", answers: ["Mayflower", "Santa Maria", "Endeavour", "Beagle"], correct: "Mayflower"}
]
