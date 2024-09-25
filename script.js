let boxes=document.querySelectorAll(".box");
let para= document.querySelector("p");
let comment= document.querySelector(".comment");
let hide= document.querySelector(".hide");
let button= document.querySelector(".button");

let action=true;

let winPat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

    button.addEventListener("click",()=>{
      for(let box of boxes){
        box.disabled=false;
      }
    })
  
  

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(action){
            box.innerText="O";
            action=false;
        }else{
            box.innerText="X";
            action=true;
        }box.disabled=true;
        checkWinner();
    }) 
})
const checkWinner = () => {
    for(let patern of winPat){
      let pat1 =boxes[patern[0]].innerText;
      let pat2 =boxes[patern[1]].innerText;
      let pat3 =boxes[patern[2]].innerText;

      if(pat1!="" && pat1===pat2 && pat2 === pat3){
        console.log(`winner:${pat1}`);
        winmes(pat1);
    }
   }
  };

  const winmes=(winner)=>{
        para.innerText=`congratulation.Winner is ${winner}`;
        hide.classList.remove("hide");
        disBoxes();     
  }
    const disBoxes=()=>{
    for(let box of boxes){
         box.disabled=true;
    }
   }
   const enBoxes=()=>{
    for(let box of boxes){
         box.disabled=false;
    }
   }

   const reset = () =>{
    action= true;
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
    para.innerText=""
    hide.classList.remove("hide")
    
   };
   button.addEventListener("click",reset)