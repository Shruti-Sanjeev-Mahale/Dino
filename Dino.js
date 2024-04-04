let score=0;

let scoreDiv=document.getElementById("score");
scoreDiv.innerHTML='Score'+score;


function addJump() { 

			let  dino=document.getElementsByClassName("dino")[0];
			if (dino.getAttribute("class")=="dino") {
				dino.setAttribute("class","dino jump")
				setTimeout(()=>{
					dino.setAttribute("class","dino");
				},1000);

			}
			
		}


let gameOver=setInterval(function(){
			let dino=document.getElementsByClassName("dino")[0];
			let block=document.getElementsByClassName("block")[0];
			let dinoDim=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
			let blockDim=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
			scoreDiv.innerHTML=score++;

			if (blockDim>0 && blockDim<20 && dinoDim>=120) {
				
				alert("GAME OVER  "+ score);
			}

		},10);



