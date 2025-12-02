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
  // Science (20)
  {id: 0, type: "Science", question: "What's the chemical formula for carbon dioxide?", answers: ["CO2", "H2O", "C12H22O11", "NH3"], correct: "CO2"},
  {id: 1, type: "Science", question: "What is the chemical symbol for gold?", answers: ["Au", "Ag", "Pb", "Fe"], correct: "Au"},
  {id: 2, type: "Science", question: "What planet is known as the Red Planet?", answers: ["Mars", "Venus", "Earth", "Jupiter"], correct: "Mars"},
  {id: 3, type: "Science", question: "What is the powerhouse of the cell?", answers: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"], correct: "Mitochondria"},
  {id: 4, type: "Science", question: "What element has the atomic number 1?", answers: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"], correct: "Hydrogen"},
  {id: 5, type: "Science", question: "What is the most common gas in Earth's atmosphere?", answers: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"], correct: "Nitrogen"},
  {id: 6, type: "Science", question: "Who developed the theory of relativity?", answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correct: "Albert Einstein"},
  {id: 7, type: "Science", question: "What is the chemical formula for water?", answers: ["H2O", "CO2", "O2", "NaCl"], correct: "H2O"},
  {id: 8, type: "Science", question: "Which part of the plant conducts photosynthesis?", answers: ["Leaves", "Roots", "Stem", "Flowers"], correct: "Leaves"},
  {id: 9, type: "Science", question: "What is the boiling point of water in Celsius?", answers: ["100°C", "0°C", "50°C", "200°C"], correct: "100°C"},
  {id: 10, type: "Science", question: "What is the most abundant element in the Earth's crust?", answers: ["Oxygen", "Silicon", "Iron", "Aluminum"], correct: "Oxygen"},
  {id: 11, type: "Science", question: "What is the speed of light?", answers: ["299,792,458 m/s", "300,000 km/s", "150,000 km/s", "1,000,000 m/s"], correct: "299,792,458 m/s"},
  {id: 12, type: "Science", question: "What does DNA stand for?", answers: ["Deoxyribonucleic Acid", "Dioxyribonucleic Acid", "Deoxyribonitric Acid", "Dynamical Nucleic Acid"], correct: "Deoxyribonucleic Acid"},
  {id: 13, type: "Science", question: "Which planet is closest to the sun?", answers: ["Mercury", "Venus", "Earth", "Mars"], correct: "Mercury"},
  {id: 14, type: "Science", question: "Which of these is a noble gas?", answers: ["Neon", "Oxygen", "Nitrogen", "Hydrogen"], correct: "Neon"},
  {id: 15, type: "Science", question: "What is the largest organ in the human body?", answers: ["Skin", "Liver", "Heart", "Lungs"], correct: "Skin"},
  {id: 16, type: "Science", question: "Which part of the human body produces insulin?", answers: ["Pancreas", "Liver", "Kidneys", "Stomach"], correct: "Pancreas"},
  {id: 17, type: "Science", question: "What is the hardest known natural material?", answers: ["Diamond", "Gold", "Iron", "Platinum"], correct: "Diamond"},
  {id: 18, type: "Science", question: "What is the chemical symbol for sodium?", answers: ["Na", "S", "N", "So"], correct: "Na"},
  {id: 19, type: "Science", question: "What gas do plants absorb from the atmosphere?", answers: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: "Carbon dioxide"},

  // Geography (20)
  {id: 20, type: "Geography", question: "What is the capital of France?", answers: ["Paris", "London", "Rome", "Berlin"], correct: "Paris"},
  {id: 21, type: "Geography", question: "Which country has the longest coastline?", answers: ["Canada", "Australia", "Russia", "United States"], correct: "Canada"},
  {id: 22, type: "Geography", question: "What is the largest desert in the world?", answers: ["Sahara", "Arabian", "Kalahari", "Antarctic"], correct: "Antarctic"},
  {id: 23, type: "Geography", question: "Which continent is the Sahara Desert located on?", answers: ["Africa", "Asia", "Australia", "South America"], correct: "Africa"},
  {id: 24, type: "Geography", question: "Which country has the most volcanoes?", answers: ["Indonesia", "Japan", "United States", "Iceland"], correct: "Indonesia"},
  {id: 25, type: "Geography", question: "What is the longest river in the world?", answers: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], correct: "Amazon River"},
  {id: 26, type: "Geography", question: "What is the smallest country in the world?", answers: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"], correct: "Vatican City"},
  {id: 27, type: "Geography", question: "Which country is known as the Land of the Rising Sun?", answers: ["Japan", "China", "South Korea", "Thailand"], correct: "Japan"},
  {id: 28, type: "Geography", question: "Which ocean is the largest?", answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"], correct: "Pacific Ocean"},
  {id: 29, type: "Geography", question: "What is the capital of Japan?", answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], correct: "Tokyo"},
  {id: 30, type: "Geography", question: "Which country has the most islands?", answers: ["Sweden", "Indonesia", "Canada", "Norway"], correct: "Sweden"},
  {id: 31, type: "Geography", question: "What is the highest mountain in the world?", answers: ["Mount Everest", "K2", "Kangchenjunga", "Mount Kilimanjaro"], correct: "Mount Everest"},
  {id: 32, type: "Geography", question: "Which country has the longest border with the United States?", answers: ["Canada", "Mexico", "Russia", "China"], correct: "Canada"},
  {id: 33, type: "Geography", question: "Which city is known as the Big Apple?", answers: ["New York City", "Los Angeles", "Chicago", "Miami"], correct: "New York City"},
  {id: 34, type: "Geography", question: "What is the largest island in the world?", answers: ["Greenland", "Australia", "New Guinea", "Borneo"], correct: "Greenland"},
  {id: 35, type: "Geography", question: "Which river flows through Egypt?", answers: ["Nile", "Amazon", "Yangtze", "Ganges"], correct: "Nile"},
  {id: 36, type: "Geography", question: "What is the capital of Australia?", answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"], correct: "Canberra"},
  {id: 37, type: "Geography", question: "Which country is the Sahara Desert located in?", answers: ["Algeria", "Morocco", "Egypt", "All of the above"], correct: "All of the above"},
  {id: 38, type: "Geography", question: "What is the capital of Canada?", answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"], correct: "Ottawa"},
  {id: 39, type: "Geography", question: "Which continent has the most countries?", answers: ["Africa", "Asia", "Europe", "South America"], correct: "Africa"},

  // History (20)
  {id: 40, type: "History", question: "Who was the first President of the United States?", answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], correct: "George Washington"},
  {id: 41, type: "History", question: "In which year did the Titanic sink?", answers: ["1912", "1905", "1920", "1898"], correct: "1912"},
  {id: 42, type: "History", question: "Who wrote the play 'Romeo and Juliet'?", answers: ["William Shakespeare", "Charles Dickens", "Jane Austen", "George Orwell"], correct: "William Shakespeare"},
  {id: 43, type: "History", question: "Who was the first woman to fly solo across the Atlantic Ocean?", answers: ["Amelia Earhart", "Harriet Tubman", "Valentina Tereshkova", "Bessie Coleman"], correct: "Amelia Earhart"},
  {id: 44, type: "History", question: "Which country was ruled by Julius Caesar?", answers: ["Roman Empire", "Greece", "Egypt", "Persia"], correct: "Roman Empire"},
  {id: 45, type: "History", question: "Who was the leader of the Soviet Union during World War II?", answers: ["Joseph Stalin", "Vladimir Lenin", "Mikhail Gorbachev", "Leon Trotsky"], correct: "Joseph Stalin"},
  {id: 46, type: "History", question: "In which year did World War II end?", answers: ["1945", "1939", "1941", "1918"], correct: "1945"},
  {id: 47, type: "History", question: "Who was the first emperor of China?", answers: ["Qin Shi Huang", "Han Wudi", "Li Shimin", "Wu Zetian"], correct: "Qin Shi Huang"},
  {id: 48, type: "History", question: "Which battle is considered Napoleon's greatest defeat?", answers: ["Battle of Waterloo", "Battle of Leipzig", "Battle of Austerlitz", "Battle of Trafalgar"], correct: "Battle of Waterloo"},
  {id: 49, type: "History", question: "Which empire was ruled by Alexander the Great?", answers: ["Macedonian Empire", "Roman Empire", "Ottoman Empire", "Persian Empire"], correct: "Macedonian Empire"},
  {id: 50, type: "History", question: "In which year did the Berlin Wall fall?", answers: ["1989", "1979", "1991", "1961"], correct: "1989"},
  {id: 51, type: "History", question: "Who was the queen of ancient Egypt famous for her alliances with Julius Caesar and Mark Antony?", answers: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"], correct: "Cleopatra"},
  {id: 52, type: "History", question: "What was the primary cause of the American Civil War?", answers: ["Slavery", "Economic differences", "State's rights", "All of the above"], correct: "All of the above"},
  {id: 53, type: "History", question: "Which year did the United States declare independence?", answers: ["1776", "1800", "1492", "1620"], correct: "1776"},
  {id: 54, type: "History", question: "Who was the first man to set foot on the moon?", answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], correct: "Neil Armstrong"},
  {id: 55, type: "History", question: "Which war ended with the Treaty of Versailles?", answers: ["World War I", "World War II", "The Korean War", "The Napoleonic Wars"], correct: "World War I"},
  {id: 56, type: "History", question: "Who was the first emperor of Rome?", answers: ["Augustus", "Julius Caesar", "Tiberius", "Nero"], correct: "Augustus"},
  {id: 57, type: "History", question: "What event marked the beginning of the French Revolution?", answers: ["Storming of the Bastille", "Execution of Louis XVI", "Declaration of the Rights of Man", "Reign of Terror"], correct: "Storming of the Bastille"},
  {id: 58, type: "History", question: "Who was the leader of the civil rights movement in the United States during the 1960s?", answers: ["Martin Luther King Jr.", "Malcolm X", "Rosa Parks", "Frederick Douglass"], correct: "Martin Luther King Jr."},
  {id: 59, type: "History", question: "What was the name of the ship that brought the Pilgrims to America in 1620?", answers: ["Mayflower", "Santa Maria", "Endeavour", "Beagle"], correct: "Mayflower"}
];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function display(min, max){
  let usedid = []
  for (var i = min; i < max; i++) {

  }
}

function trivia(){
  const category = localStorage.getItem('type')
  const question = document.querySelector(".question")
  if(category === "Science"){
    display(0, 19)
  }else if(category === "Geography"){
    display(20, 39)
  }else if(category === "History"){
    display(40, 59)
  }else(
    display(0, 59)
  )
}

document.addEventListener("DOMContentLoaded", () => {
  trivia()
})
