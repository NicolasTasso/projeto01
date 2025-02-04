alert('Olá Zé da manga!');
alert('Vamos jogar um jogo...');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute
let tentativas = 1

while(chute !=numeroSecreto) {
   chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);

    if (chute == numeroSecreto) {
 
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
            }  
            tentativas++;  
        }
    }

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Muito bem, Calabreso, você acertou a resposta "${numeroSecreto}" com ${tentativas} ${palavraTentativa}.`);
  //  if (tentativas > 1) {
  //      alert(`Muito bem, Calabreso, você acertou a resposta ${numeroSecreto} com ${tentativas} tentativas.`);
  //  } else {
  //      alert(`Muito bem, Calabreso, você acertou a resposta ${numeroSecreto} com ${tentativas} tentativa.`);
  //  }