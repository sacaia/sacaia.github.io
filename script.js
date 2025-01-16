function processInput() {
    const userInput = document.getElementById('userInput').value;
    let result = '';
  
    // Example processing: reverse the input string
    result = userInput.split('').reverse().join('');
  
    document.getElementById('result').innerText = 'Processed result: ' + result;
  }