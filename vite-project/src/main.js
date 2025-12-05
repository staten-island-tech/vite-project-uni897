import './style.css'


//window.location.href = '//file.html'

//beginning page js
const buttons = document.querySelectorAll("button")
buttons.forEach(btn =>{
  btn.addEventListener("click", () =>{
    const type = btn.getAttribute("data-type")
    console.log(type)
    const selected = document.querySelector('.selected')
    if(type === "waol"){
      if (document.body.classList.contains("blue")){
        document.body.classList.add("purple");
        document.body.classList.remove("blue");
      }else{
        document.body.classList.add("blue");
        document.body.classList.remove("purple");
    }}else if(type === "change"){
      window.location.href = 'trivia.html'
    }else{
      localStorage.setItem('type', type)
      selected.textContent = "Current Selected: " + type
    }
  })
})

function grade(){
  const grade = localStorage.getItem('grade')
  const text = document.querySelector('.grade')
  if(grade && text){
  text.textContent = "Previous Test Grade: " + grade + "%"
  }
}
grade()