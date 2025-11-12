import './style.css'


//window.location.href = '//file.html'

const button = document.querySelector('.waol')
button.addEventListener('click', () => {
    window.location.href = '/trivia.html'
});

/*
document.querySelector(".waol").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
*/