import './style.css'

//trivia page js
document.querySelector(".wol").addEventListener("click", function () {
  console.log("ochen da")
  if (document.body.classList.contains("blue")) {
    document.body.classList.add("purple");
    document.body.classList.remove("blue");
  } else {
    document.body.classList.add("blue");
    document.body.classList.remove("purple");
  }
});

const questions = [
  {type: "sci", question: "What's the chemical formula for carbon dioxide?", answers:""}
]

