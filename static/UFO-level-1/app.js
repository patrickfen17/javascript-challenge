// Define data from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Sightings data values (date, city, state, county, shape, duration, comments)
tableData.forEach(function(sightingReport) {
    
  //console.log(sightingReport);
  var row = tbody.append("tr");
  
  Object.entries(sightingReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in tableData
    var cell = row.append("td");
    cell.text(value);
  });
  
});

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);

    console.log(filteredData);

    // Remove data from the table before rebuilding
    tbody.html("");

    // Sightings data values (date, city, state, county, shape, duration, comments)
    filteredData.forEach(function(sightingReport) {
        
        console.log(sightingReport);
        var row = tbody.append("tr");
        
            Object.entries(sightingReport).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value in tableData
            var cell = row.append("td");
            cell.text(value);
            });

    });

};
