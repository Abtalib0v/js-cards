const cardBg1 = document.querySelector("#card1");
const cardBg2 = document.querySelector("#card2");
const cardBg3 = document.querySelector("#card3");
const btnColor1 = document.querySelector("#btn1");
const btnColor2 = document.querySelector("#btn2");
const btnColor3 = document.querySelector("#btn3");


btnColor1.addEventListener("click", () => {
    const randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    cardBg1.style.backgroundColor = randomcolor;
    const colorView1 = document.querySelector("#colorView1");
    colorView1.textContent ="color:"+ randomcolor;

})
btnColor2.addEventListener("click", () => {
    const randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    cardBg2.style.backgroundColor = randomcolor;
    const colorView2 = document.querySelector("#colorView2");
    colorView2.textContent ="color:"+ randomcolor;
})
btnColor3.addEventListener("click", () => {
    const randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    cardBg3.style.backgroundColor = randomcolor;
    const colorView3 = document.querySelector("#colorView3");
    colorView3.textContent ="color:"+ randomcolor;
})