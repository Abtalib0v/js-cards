const cardBg1 = document.querySelector("#card1");
const cardBg2 = document.querySelector("#card2");
const cardBg3 = document.querySelector("#card3");
const btnColor1 = document.querySelector("#btn1");
const btnColor2 = document.querySelector("#btn2");
const btnColor3 = document.querySelector("#btn3");

// butona click edende
btnColor1.addEventListener("click", () => {
    cardBg1.style.backgroundColor = "red","blue";
    cardBg1.style.color = "white";
    btnColor1.style.backgroundColor = "white";
    btnColor1.style.color = "black";
})
// ozune click edende
cardBg2.addEventListener("click", () => {
    cardBg2.style.backgroundColor = "blue";
    cardBg2.style.color = "white";
    btnColor2.style.backgroundColor = "white";
    btnColor2.style.color = "black";
})
// butona click edende
btnColor3.addEventListener("click", () => {
    cardBg3.style.backgroundColor = "green";
    cardBg3.style.color = "white";
    btnColor3.style.backgroundColor = "white";
    btnColor3.style.color = "black";
})