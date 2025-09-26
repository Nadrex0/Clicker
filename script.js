let nr = 0;
let clickMarkiplier = 1;
function dodanie_numeru(){
    nr += clickMarkiplier;
    let numer = document.getElementById("NUMER");
    numer.innerHTML = "<strong>Kliknięć<strong>: "+nr;
        if(nr==100){
            const p1Div = document.querySelector('.p1');
            const button = document.createElement('button');
            button.textContent="Kup Teraz!";
            button.style.backgroundColor="white";
            button.style.color="black";
            button.style.borderRadius="20px";
            button.style.padding="20px";
            button.style.fontFamily="Arial, sans-serif";
            button.style.fontSize="30px";
            button.style.border="none";
            button.style.boxShadow="0px 0px 30px rgba(0,0,0,0.0)";
            button.style.marginTop="10px";
            p1Div.appendChild(button);
            button.addEventListener("mouseenter", () => {
                button.style.boxShadow="0px 0px 30px rgba(0,0,0,0.3)";
                button.style.backgroundColor="black";
                button.style.color="white";
            });
            button.addEventListener("mouseleave", () => {
                button.style.boxShadow="0px 0px 30px rgba(0,0,0,0.0)";
                button.style.backgroundColor="white";
                button.style.color="black";
            });
            button.addEventListener("click", () => {
                nr-=100;
                button.style.transform="scale(1.2)";
                setTimeout(() => {
                    button.style.transform="scale(1)";
                }, 50);
                let but = document.getElementById("butt");
                but.innerHTML="Zakupiono! (Btw nie wiem czy wiesz ale Jeremi nie jest komuchem!)";
                but.style.fontSize="80px";
                but.style.fontFamily="arial, sans-serif";
                clickMarkiplier = 2;
                p1Div.removeChild(button);
            });
        }
}

function ZADLUZENIE(){
    const button = document.getElementById("KONIEC");
    button.addEventListener("click", () => {
        nr-=500 * 99999999999
    });
}