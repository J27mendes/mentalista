    mentalista = ""  
    var tentativas = 3
    var numeroSecreto = parseInt(Math.random() * 10)
      
function capturar(){   
     var mentalista = document.getElementById('numero').value
     
      if (numeroSecreto == mentalista && tentativas >= 1 ) {      
      document.getElementById('valorDigitado').innerHTML = ("Parabéns você acertou o numero secreto: " + numeroSecreto)
    mentalista = document.getElementById('numero').value= ""
    tentativas = 0
        
   }
  
   else if (mentalista > numeroSecreto && tentativas > 1) {
      document.getElementById('valorDigitado').innerHTML = ("O número secreto é menor que o número digitado")
     mentalista = document.getElementById('numero').value= ""
     tentativas = tentativas -1
    }
  
   else if (mentalista < numeroSecreto && tentativas > 1) {
      document.getElementById('valorDigitado').innerHTML = ("O número secreto é maior que o número digitado")
     mentalista = document.getElementById('numero').value= ""
     tentativas = tentativas -1
    }
  
   else {
    document.getElementById('valorDigitado').innerHTML = ("Suas tentativas acabaram, o número secreto era:  " + numeroSecreto)
     mentalista = document.getElementById('numero').value= ""
     tentativas = 0
                } 
     
  }
// função que reinicia o jogo
function reinicio() {
  numeroSecreto = parseInt(Math.random()*10);
  tentativas = 3;
  document.getElementById('valorDigitado').value = tentativas
  document.getElementById('valorDigitado').innerHTML = ("VAMOS COMEÇAR O JOGO !")
 }

    



 


    

    




 