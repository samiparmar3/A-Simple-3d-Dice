const dice = document.getElementById("dice");
const rollBtn = document.getElementById("rollBtn");

let currentX = 0;
let currentY = 0;

const diceFaces = {
    1: { x: 0, y: 0 },
    2: { x: -90, y: 0 },
    3: { x: 0, y: 90 },
    4: { x: 0, y: -90 },
    5: { x: 90, y: 0 },
    6: { x: 0, y: 180 }
};

function rollDice() {

    const randomNumber =
        Math.floor(Math.random() * 6) + 1;

    const face = diceFaces[randomNumber];

    
    currentX += 720 + face.x;
    currentY += 720 + face.y;

    dice.style.transform =
        `rotateX(${currentX}deg)
         rotateY(${currentY}deg)`;

    console.log("Dice:", randomNumber);
}

rollBtn.addEventListener("click", rollDice);