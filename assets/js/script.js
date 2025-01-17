document.addEventListener('DOMContentLoaded', function () {
  const inputOutputList = [
    { input: '123', output: 'Voce acha que eu sou otário?' },
    { input: '321', output: '?' },
    { input: '404', output: 'Error' },
    // Add more input-output pairs as needed
  ];

  function processInput() {
    const userInput = document.getElementById('userInput').value;
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