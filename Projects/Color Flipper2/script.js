const colors = ["green", "red", "rbga(133,122,200)", "#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
    //Get random bumber between 0-3 
    const randomNumber = 2;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})