document.addEventListener('DOMContentLoaded', function() {
  const inputOutputList = [
    { input: 'hello', output: 'world' },
    { input: 'foo', output: 'bar' },
    { input: 'test', output: 'success' },
    // Add more input-output pairs as needed
  ];

  function processInput() {
    const userInput = document.getElementById('userInput').value;
    let result = 'Error: No matching input found';

    for (let pair of inputOutputList) {
      if (pair.input === userInput) {
        result = pair.output;
        break;
      }
    }

    document.getElementById('result').innerText = 'Processed result: ' + result;
  }

  document.querySelector('button').addEventListener('click', processInput);
});