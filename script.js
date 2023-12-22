function predictGoldPrice() {
  // Get input value (mock number for simplicity)
  const inputData = parseFloat(document.getElementById('inputData').value); // Convert input to a number
  
  // Perform prediction based on a random fraction of the input value
  const randomFraction = Math.random() * 0.2 - 0.1; // Random fraction between -0.1 and 0.1 (adjust as needed)
  const mockPrediction = inputData + (inputData * randomFraction); // Calculate prediction
  
  // Display the prediction result
  const resultChart = document.getElementById('resultChart');
  if (!isNaN(mockPrediction)) {
    resultChart.innerHTML = `<p>Predicted Gold Price: $${mockPrediction.toFixed(2)}</p>`;
  } else {
    resultChart.innerHTML = "<p>Please enter a valid number for prediction.</p>";
  }
}
