document.addEventListener('DOMContentLoaded', function () {
  const inputOutputList = [
    { input: 'MWZW', output: 'A resposta se encontra no caudeirão de leite fundido' },
    { input: 'YNZTLT', output: 'Qual a cor do Cavalo Branco de Napoleon?' },
    { input: 'VQUTGW', output: 'Um pássaro metálico também deixa presentes de vez em quando' },
    { input: 'LUTZTW', output: 'Procure pela simulação de uma Guerra' },
    { input: 'YTDW', output: 'Vector adora um bom licor irlandês, feito com o mais puro creme' },
    { input: 'UQT', output: 'Junto de sua comida favorita, Vector aprecia uma bebida muito popular na Inglaterra' },
    { input: 'VTIVQ', output: 'Cargas pesadas são tarnsportadas por um automóvel especializado' },
    { input: 'ITYT', output: 'Eu perdi meu DvD favorito' },
    { input: '1432', output: 'Três braços que nunca param de girar apontam para a saida' },
    { input: '483', output: 'Os dragões trabalhadores escondem um segredo' },
    { input: 'TUVVNWCTYUOU', output: 'Um passeio no bosque é tudo entre você e seus amigos' },
    { input: 'TUUCPTTTGDXP', output: 'Vocês desbloquearam a cozinha da fortaleza de Vector! \nProcure na cozinha pelo pó negro' },
    { input: 'YVUYPTPDWHQX', output: 'Procure pela área aberta, geralmente localizada na parte externa de uma construção, como uma casa ou apartamento, que pode ser coberta ou descoberta' },
    { input: '3312', output: 'Vocês destravaram a escada para subir até a sala da fortaleza de Vector!' },
    { input: '7552', output: 'Para encontrar o que procuram vocês terão que juntar as três partes do quebra cabeça' },
    { input: '1742', output: 'Vocês destravaram as duas escadas: para subir até o ultimo piso e para descer até a sala da fortaleza de Vector!' },
    // Add more input-output pairs as needed
  ];

  function processInput() {
    const userInput = document.getElementById('userInput').value.trim().toUpperCase(); 
    let result = 'Você jamais passará do meu sistema de segurança gru!';
    let resultClass = 'text-danger';
    let showErrorImage = true;

    for (let pair of inputOutputList) {
      if (pair.input === userInput) {
        result = pair.output;
        resultClass = 'text-success';
        showErrorImage = false;
        break;
      }
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    resultElement.className = 'center-text title-margin ' + resultClass;

    const errorImage = document.getElementById('errorImage');
    if (showErrorImage) {
      errorImage.style.display = 'block';
    } else {
      errorImage.style.display = 'none';
    }
  }

  document.querySelector('button').addEventListener('click', processInput);
});