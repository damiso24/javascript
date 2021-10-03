// from data.js
var sightings = data;
console.log(sightings);

// select tobdy from html
var tbody = d3.select("tbody");

sightings.forEach(sighting=>{
  // console.log(sighting);
  var row = tbody.append("tr");
  
  Object.entries(sighting).forEach(([key, value])=>{
      var cell = tbody.append("td");
      cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Event handlers 
button.on("click", runFilter);
form.on("submit",runFilter);

// Filter funcion
function runFilter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  // Use inputValue to filter data.
  var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

  // Clear the table
  tbody.html("")

  // Loop through filter and add a row for each row of data
  filteredData.forEach(filteredData=>{
    console.log(filteredData);
    var row = tbody.append("tr");
    
    // fill the rows cell by cell with each key, value pair of filtered data
    Object.entries(filteredData).forEach(([key, value])=>{
        var cell = tbody.append("td");
        cell.text(value);
      });
  });
}