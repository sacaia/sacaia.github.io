document.addEventListener('DOMContentLoaded', function () {
  const inputOutputList = [
    { input: 'MWZW', output: 'Caudeirão de leite fundido' },
    { input: 'YNZTLT', output: 'Qual a cor do Cavalo Branco de Napoleon' },
    { input: 'VQUTGW', output: 'Pássaro metálico' },
    { input: 'LUTZTW', output: 'Uma simulação de uma Guerra' },
    { input: 'YTDW', output: 'Um licor irlandês feito com creme' },
    { input: 'UQT', output: 'Uma bebida muito difundida pela Inglaterra' },
    { input: 'VTIVQ', output: 'Um automóvel muito utilizado para transportar carga' },
    { input: 'ITYT', output: 'DvDs de filmes infantís' },
    { input: '1432', output: 'Três braços que nunca param de girar' },
    { input: '483', output: 'Dragões trabalhadores' },
    { input: 'TUVVNWCTYUOU', output: 'Um passeio no bosque' },
    { input: 'TUUCPTTTGDXP', output: 'Procure na cozinha pelo café' },
    { input: 'YVUYPTPDWHQX', output: 'uma área aberta, geralmente localizada na parte externa de uma construção, como uma casa ou apartamento, que pode ser coberta ou descoberta' },
    { input: '3312', output: 'Vocês destravaram a escada para subir até a sala da fortaleza de Vector!' },
    { input: '7552', output: 'Vocês destravaram a escada para subir até o segundo piso da fortaleza de Vector!' },
    { input: '1742', output: 'Vocês destravaram a escada para subir até o ultimo piso da fortaleza de Vector!' },
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