document

var numSecret = Math.round(Math.random()*100);  // Numero a ser adivinado por el usuario

document.getElementById("title").onclick = function (){

    window.location.replace("./index.html");
}

console.log(numSecret);

var lifes = 5; // intentos 

var score = 0; // Puntaje 

document.getElementById("scores").innerHTML = score;

document.getElementById("lifes").innerHTML = lifes;

document.getElementById("submitter").onclick = function (){


    var userGuess = Math.round(document.getElementById("guesser").value); // Numero ingresado por el usuario
    console.log(userGuess);

    
    if (Number.isNaN(userGuess)){

        document.getElementById("resultado").innerHTML = "Debes ingresar un número! Estas perdiendo intentos!";
    }

    if (userGuess == numSecret){

        score = score + (lifes * 100);

        var resultado = "Has adivinado el número!! Tu deuda ahora es de: " + score;

        document.getElementById("submitter").style = "visibility:hidden";

        document.getElementById("resultado").innerHTML = resultado;

        document.getElementById("title").innerHTML = "Volver a intentar";

        document.getElementById("title").onclick = function (){

            window.location.replace("./easy.html");


        }
    }

    else{

        --lifes;

        if (numSecret > userGuess){

            document.getElementById("resultado").innerHTML = "El número secreto es MAYOR!";

            if ((numSecret - userGuess) <= 5 ){

                score = score + (lifes * 5);

            }

            else if ((numSecret - userGuess) <= 50){


                score = score + (lifes * 10);
            }

            else if ((numSecret - userGuess) <= 100){

                score = score + (lifes * 50);
            }
        }


        if(numSecret < userGuess){

            document.getElementById("resultado").innerHTML = "El número secreto es MENOR!";

            if ((userGuess - numSecret) <= 5 ){

                score = score + (lifes * 5);

            }

            else if ((userGuess - numSecret) <= 10){


                score = score + (lifes * 10);
            }

            else if ((userGuess - numSecret) <= 50){

                score = score + (lifes * 50);
            }


        }


    }

    if (lifes == 0){

        var resultado2 = "Te has quedado sin intentos :( el número secreto era: " + numSecret;


        document.getElementById("resultado").innerHTML = resultado2;
        document.getElementById("resultado").style = "color: red;";
        document.getElementById("submitter").style = "visibility: hidden;";
        document.getElementById("title").innerHTML = "Volver a intentar";

        document.getElementById("title").onclick = function (){

            window.location.replace("./easy.html");


        }

    }

    document.getElementById("scores").innerHTML = score;

    document.getElementById("lifes").innerHTML = lifes;
    

}





