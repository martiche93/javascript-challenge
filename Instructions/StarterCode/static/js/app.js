// from data.js
var tableData = sightings;
// Print the tableData to see how many arrays we're dealing with
console.log(tableData);

// Use d3 to select the table body
var tbody = d3.select("tbody");

// Set UFO sighting values for each column
tableData.forEach(sightings => {
    console.log(sightings);
// Append table row for each sighting object
    var row = tbody.append("tr");

// Iterate through the array
Object.entries(sightings).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value)
    });
});

// Create a step to psuh the 'Filter Table' button
// Use Developer Tool to see where the 'Filter Table' button exists. Use d3 to select it
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html('');
    // Select the 'Enter a Date'
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // Print input value
    console.log(inputValue);
    // Filter data with datetime equal to inputValue
    var filterData = tableData.filter(sightings => sightings.datetime === inputValue);
    // Print filterData
    console.log(filterData);

    filterData.forEach(selections => {
        console.log(selections);
        // Append one table row for each sighting object
        var row = tbody.append("tr");
        // Use Object.entries to print each sighting value
        Object.entries(selections).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});