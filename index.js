function generateSquares(){
    grid.innerHTML='';
    for(let i = 0; i<side; i++){
    const vertical = document.createElement("div")
    vertical.setAttribute("class", "vertical")
    grid.appendChild(vertical);
    for(let i = 0; i < side; i++){
        const horizontal = document.createElement("div")
        horizontal.setAttribute("class", "horizontal")

        horizontal.addEventListener('mouseover', (e)=>{
                horizontal.style.backgroundColor = "red";
            })

        vertical.appendChild(horizontal);
        }
    }
}

let side = prompt("Enter a number less than 100.", "1");
    while (side > 100){
        side = prompt("Number too high. Please input a number less than 100.");
    }

const Btn = document.createElement("div")
Btn.setAttribute("class", "Btn")
document.body.appendChild(Btn);

const restartBtn = document.createElement("button")
restartBtn.setAttribute("id", "restartBtn")

restartBtn.addEventListener('click', (e) =>{
    side = 0;
    side = prompt("Enter a number less than 100.", "1");
        while (side > 100){
        side = prompt("Number too high. Please input a number less than 100.");
    }
    generateSquares();
})

const clearBtn = document.createElement("button")
clearBtn.setAttribute("id", "clearBtn")
clearBtn.innerHTML = "CLEAR"
clearBtn.addEventListener('click', (e) =>{
    generateSquares();
})

Btn.appendChild(restartBtn);
Btn.appendChild(clearBtn);

const container = document.createElement("div")
container.setAttribute("class", "container")
document.body.appendChild(container);

const grid = document.createElement("div")
grid.setAttribute("class", "grid")
container.appendChild(grid);


generateSquares();