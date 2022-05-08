const toggle = document.querySelector(".menu");
const navigation = document.querySelector(".nav");

toggle.addEventListener("click",()=>{
    navigation.classList.toggle("active");
})