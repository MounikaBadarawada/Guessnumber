let y = Math.floor(Math.random() * 10 + 1);
        let guess = 1;
        document.getElementById("submitguess").onclick = function () {  
            let x = document.getElementById("guessField").value;
            if (x == y) {
                feedback.textContent="You got it right";

            }
            else if (x > y) {
                guess++;
                feedback.textContent="OOPS!! TRY WITH A SMALLER NUMBER";

            }
            else {
                guess++;
                feedback.textContent="OOPS!! TRY WITH A LARGER NUMBER";

            }

        }