document.getElementById("form").addEventListener("click", function(event) {
    event.preventDefault();
    const input = document.getElementById("ropes-input").value;
    const ropes = input.split(",").map(Number);
    const minimumCost = connectRopes(ropes);

    // Display the result in the "result" div
    document.getElementById("result").innerHTML = "Minimum cost: " + minimumCost;
	function connectRopes(arr) {
  let totalCost = 0;

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Extract the two smallest elements from the sorted array
    const min1 = arr.shift();
    const min2 = arr.shift();
    // Calculate the sum of the two smallest elements
    const sum = min1 + min2;
    // Add the sum to the total cost
    totalCost += sum;
    // Insert the sum back into the sorted array
    arr.push(sum);
    // Re-sort the array (optional, if you want to maintain the sorted order)
    arr.sort((a, b) => a - b);
  }
  return totalCost;
}

});
