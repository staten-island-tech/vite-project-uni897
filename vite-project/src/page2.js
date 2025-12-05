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
  {id: 0, type: "Science", question: "What's the chemical formula for carbon dioxide?", answers: ["H2O", "CO2", "C12H22O11", "NH3"], correct: "CO2"},
  {id: 1, type: "Science", question: "What is the chemical symbol for gold?", answers: ["Pb", "Au", "Ag", "Fe"], correct: "Au"},
  {id: 2, type: "Science", question: "What planet is known as the Red Planet?", answers: ["Venus", "Earth", "Mars", "Jupiter"], correct: "Mars"},
  {id: 3, type: "Science", question: "What is the powerhouse of the cell?", answers: ["Nucleus", "Golgi apparatus", "Mitochondria", "Ribosome"], correct: "Mitochondria"},
  {id: 4, type: "Science", question: "What element has the atomic number 1?", answers: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"], correct: "Hydrogen"},
  {id: 5, type: "Science", question: "What is the most common gas in Earth's atmosphere?", answers: ["Oxygen", "Argon", "Nitrogen", "Carbon dioxide"], correct: "Nitrogen"},
  {id: 6, type: "Science", question: "Who developed the theory of relativity?", answers: ["Nikola Tesla", "Galileo Galilei", "Albert Einstein", "Isaac Newton"], correct: "Albert Einstein"},
  {id: 7, type: "Science", question: "What is the chemical formula for water?", answers: ["NaCl", "O2", "H2O", "CO2"], correct: "H2O"},
  {id: 8, type: "Science", question: "Which part of the plant conducts photosynthesis?", answers: ["Stem", "Leaves", "Roots", "Flowers"], correct: "Leaves"},
  {id: 9, type: "Science", question: "What is the boiling point of water in Celsius?", answers: ["50°C", "100°C", "0°C", "200°C"], correct: "100°C"},
  {id: 10, type: "Science", question: "What is the most abundant element in the Earth's crust?", answers: ["Silicon", "Oxygen", "Iron", "Aluminum"], correct: "Oxygen"},
  {id: 11, type: "Science", question: "What is the speed of light?", answers: ["300,000 km/s", "1,000,000 m/s", "299,792,458 m/s", "150,000 km/s"], correct: "299,792,458 m/s"},
  {id: 12, type: "Science", question: "What does DNA stand for?", answers: ["Dioxyribonucleic Acid", "Deoxyribonucleic Acid", "Deoxyribonitric Acid", "Dynamical Nucleic Acid"], correct: "Deoxyribonucleic Acid"},
  {id: 13, type: "Science", question: "Which planet is closest to the sun?", answers: ["Venus", "Mercury", "Earth", "Mars"], correct: "Mercury"},
  {id: 14, type: "Science", question: "Which of these is a noble gas?", answers: ["Oxygen", "Neon", "Nitrogen", "Hydrogen"], correct: "Neon"},
  {id: 15, type: "Science", question: "What is the largest organ in the human body?", answers: ["Liver", "Skin", "Heart", "Lungs"], correct: "Skin"},
  {id: 16, type: "Science", question: "Which part of the human body produces insulin?", answers: ["Liver", "Pancreas", "Kidneys", "Stomach"], correct: "Pancreas"},
  {id: 17, type: "Science", question: "What is the hardest known natural material?", answers: ["Gold", "Diamond", "Iron", "Platinum"], correct: "Diamond"},
  {id: 18, type: "Science", question: "What is the chemical symbol for sodium?", answers: ["S", "Na", "N", "So"], correct: "Na"},
  {id: 19, type: "Science", question: "What gas do plants absorb from the atmosphere?", answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correct: "Carbon dioxide"},

  // Geography (20)
  {id: 20, type: "Geography", question: "What is the capital of France?", answers: ["Berlin", "Paris", "Rome", "London"], correct: "Paris"},
  {id: 21, type: "Geography", question: "Which country has the longest coastline?", answers: ["Australia", "Canada", "United States", "Russia"], correct: "Canada"},
  {id: 22, type: "Geography", question: "What is the largest desert in the world?", answers: ["Kalahari", "Sahara", "Antarctic", "Arabian"], correct: "Antarctic"},
  {id: 23, type: "Geography", question: "Which continent is the Sahara Desert located on?", answers: ["Australia", "Africa", "Asia", "South America"], correct: "Africa"},
  {id: 24, type: "Geography", question: "Which country has the most volcanoes?", answers: ["Iceland", "Japan", "Indonesia", "United States"], correct: "Indonesia"},
  {id: 25, type: "Geography", question: "What is the longest river in the world?", answers: ["Yangtze River", "Amazon River", "Mississippi River", "Nile River"], correct: "Amazon River"},
  {id: 26, type: "Geography", question: "What is the smallest country in the world?", answers: ["San Marino", "Liechtenstein", "Vatican City", "Monaco"], correct: "Vatican City"},
  {id: 27, type: "Geography", question: "Which country is known as the Land of the Rising Sun?", answers: ["Thailand", "Japan", "China", "South Korea"], correct: "Japan"},
  {id: 28, type: "Geography", question: "Which ocean is the largest?", answers: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"], correct: "Pacific Ocean"},
  {id: 29, type: "Geography", question: "What is the capital of Japan?", answers: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"], correct: "Tokyo"},
  {id: 30, type: "Geography", question: "Which country has the most islands?", answers: ["Canada", "Norway", "Sweden", "Indonesia"], correct: "Sweden"},
  {id: 31, type: "Geography", question: "What is the highest mountain in the world?", answers: ["K2", "Mount Kilimanjaro", "Mount Everest", "Kangchenjunga"], correct: "Mount Everest"},
  {id: 32, type: "Geography", question: "Which country has the longest border with the United States?", answers: ["China", "Mexico", "Canada", "Russia"], correct: "Canada"},
  {id: 33, type: "Geography", question: "Which city is known as the Big Apple?", answers: ["Los Angeles", "New York City", "Chicago", "Miami"], correct: "New York City"},
  {id: 34, type: "Geography", question: "What is the largest island in the world?", answers: ["Greenland", "New Guinea", "Australia", "Borneo"], correct: "Greenland"},
  {id: 35, type: "Geography", question: "Which river flows through Egypt?", answers: ["Yangtze", "Amazon", "Nile", "Ganges"], correct: "Nile"},
  {id: 36, type: "Geography", question: "What is the capital of Australia?", answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"], correct: "Canberra"},
  {id: 37, type: "Geography", question: "Which country is the Sahara Desert located in?", answers: ["Egypt", "Morocco", "Algeria", "All of the above"], correct: "All of the above"},
  {id: 38, type: "Geography", question: "What is the capital of Canada?", answers: ["Toronto", "Ottawa", "Montreal", "Vancouver"], correct: "Ottawa"},
  {id: 39, type: "Geography", question: "Which continent has the most countries?", answers: ["Asia", "South America", "Africa", "Europe"], correct: "Africa"},

  // History(20)
  {id: 40, type: "History", question: "Who was the first President of the United States?", answers: ["John Adams", "George Washington", "Abraham Lincoln", "Thomas Jefferson"], correct: "George Washington"},
  {id: 41, type: "History", question: "In which year did the Titanic sink?", answers: ["1905", "1912", "1920", "1898"], correct: "1912"},
  {id: 42, type: "History", question: "Who wrote the play 'Romeo and Juliet'?", answers: ["George Orwell", "William Shakespeare", "Jane Austen", "Charles Dickens"], correct: "William Shakespeare"},
  {id: 43, type: "History", question: "Who was the first woman to fly solo across the Atlantic Ocean?", answers: ["Amelia Earhart", "Bessie Coleman", "Valentina Tereshkova", "Harriet Tubman"], correct: "Amelia Earhart"},
  {id: 44, type: "History", question: "Which country was ruled by Julius Caesar?", answers: ["Persia", "Egypt", "Roman Empire", "Greece"], correct: "Roman Empire"},
  {id: 45, type: "History", question: "Who was the leader of the Soviet Union during World War II?", answers: ["Vladimir Lenin", "Mikhail Gorbachev", "Joseph Stalin", "Leon Trotsky"], correct: "Joseph Stalin"},
  {id: 46, type: "History", question: "In which year did World War II end?", answers: ["1918", "1939", "1941", "1945"], correct: "1945"},
  {id: 47, type: "History", question: "Who was the first emperor of China?", answers: ["Han Wudi", "Qin Shi Huang", "Wu Zetian", "Li Shimin"], correct: "Qin Shi Huang"},
  {id: 48, type: "History", question: "Which battle is considered Napoleon's greatest defeat?", answers: ["Battle of Leipzig", "Battle of Waterloo", "Battle of Austerlitz", "Battle of Trafalgar"], correct: "Battle of Waterloo"},
  {id: 49, type: "History", question: "Which empire was ruled by Alexander the Great?", answers: ["Roman Empire", "Macedonian Empire", "Persian Empire", "Ottoman Empire"], correct: "Macedonian Empire"},
  {id: 50, type: "History", question: "In which year did the Berlin Wall fall?", answers: ["1961", "1989", "1991", "1979"], correct: "1989"},
  {id: 51, type: "History", question: "Who was the queen of ancient Egypt famous for her alliances with Julius Caesar and Mark Antony?", answers: ["Isis", "Hatshepsut", "Cleopatra", "Nefertiti"], correct: "Cleopatra"},
  {id: 52, type: "History", question: "What was the primary cause of the American Civil War?", answers: ["All of the above", "Slavery", "Economic differences", "State's rights"], correct: "All of the above"},
  {id: 53, type: "History", question: "Which year did the United States declare independence?", answers: ["1800", "1492", "1776", "1620"], correct: "1776"},
  {id: 54, type: "History", question: "Who was the first man to set foot on the moon?", answers: ["Michael Collins", "Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin"], correct: "Neil Armstrong"},
  {id: 55, type: "History", question: "Which war ended with the Treaty of Versailles?", answers: ["World War II", "The Napoleonic Wars", "World War I", "The Korean War"], correct: "World War I"},
  {id: 56, type: "History", question: "Who was the first emperor of Rome?", answers: ["Nero", "Augustus", "Julius Caesar", "Tiberius"], correct: "Augustus"},
  {id: 57, type: "History", question: "What event marked the beginning of the French Revolution?", answers: ["Execution of Louis XVI", "Storming of the Bastille", "Declaration of the Rights of Man", "Reign of Terror"], correct: "Storming of the Bastille"},
  {id: 58, type: "History", question: "Who was the leader of the civil rights movement in the United States during the 1960s?", answers: ["Frederick Douglass", "Malcolm X", "Rosa Parks", "Martin Luther King Jr."], correct: "Martin Luther King Jr."},
  {id: 59, type: "History", question: "What was the name of the ship that brought the Pilgrims to America in 1620?", answers: ["Santa Maria", "Mayflower", "Endeavour", "Beagle"], correct: "Mayflower"}
];

function shuffle(min, max) {
  const shuffled = questions.slice(min, max + 1)
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }
  return shuffled
}

function display(min, max){
  let correct = 0
  let index = 0
  let answered = false
  const shuffled = shuffle(min, max)

  function show(){
    if(index < shuffled.length){
      box.textContent = shuffled[index].question
      console.log(index)
    for(let i = 0; i < 4; i++){
      buttons[i].textContent = shuffled[index].answers[i]
      buttons[i].classList.remove("correct", "incorrect")
    }
    answered = false
    index++
    }else{
      localStorage.setItem('grade', (correct/(max-min+1)*100).toFixed(2))
      window.location.href = 'index.html'
    }
  }
  const box = document.querySelector(".question")
  const buttons = Array.from(document.querySelectorAll(".choice"))
  buttons.forEach(btn => {
    btn.addEventListener("click", () =>{
      if(btn.textContent === shuffled[index-1].correct && !answered){
        answered = true
        correct++
      }
      buttons.forEach(b =>{
        if(b.textContent === shuffled[index-1].correct){
          b.classList.add("correct")
        }else{
          b.classList.add("incorrect")
        }
      })
    })
  });
  show()
  document.querySelector(".next").addEventListener("click", show)
}

function trivia(){
  const category = localStorage.getItem('type')
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

trivia()
