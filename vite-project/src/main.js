import './style.css'


//window.location.href = '//file.html'

//beginning page js
const button = document.querySelector('.change')
button.addEventListener('click', () => {
    window.location.href = '/trivia.html'
});

document.querySelector(".waol").addEventListener("click", function () {
  if (document.body.classList.contains("green")) {
    document.body.classList.add("red");
    document.body.classList.remove("green");
  } else {
    document.body.classList.add("green");
    document.body.classList.remove("red");
  }
});

//trivia page js
