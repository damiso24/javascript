// from data.js
var sightings = data;

// YOUR CODE HERE!
console.log(sightings);


// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit",runFilter);

// Complete the event handler function for the form
function runFilter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(sightings);

  var filteredData = sightings.filter(date => date.datetime === inputValue);

  console.log(filteredData);}