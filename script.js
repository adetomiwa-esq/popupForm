const login = document.querySelector(".pushButton")
const popup = document.querySelector(".pop")

const closeBtn = document.querySelector(".closeButton")

login.addEventListener("click", show)

function show(e){
    popup.classList.add("reAppear")
}

closeBtn.addEventListener("click", remove)

function remove(e){
    popup.classList.remove("reAppear")
}