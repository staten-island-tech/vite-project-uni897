import './style.css'


//window.location.href = '//file.html'

//beginning page js
const button = document.querySelector('.change')
button.addEventListener('click', () => {
    window.location.href = '/trivia.html'
});


document.querySelector(".waol").addEventListener("click", function () {
  if (document.body.classList.contains("blue")) {
    document.body.classList.add("purple");
    document.body.classList.remove("blue");
  } else {
    document.body.classList.add("blue");
    document.body.classList.remove("purple");
  }
});

//trivia page js
