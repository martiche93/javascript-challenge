// from data.js
var tableData = sightings;
// Print the tableData to see how many arrays we're dealing with. Over 100...
console.log(tableData);

// Use d3 to select the table body. Set table body as variable
var tbody = d3.select("tbody");

// Set UFO sighting values for each column and print the sightings
tableData.forEach(sightings => {
    console.log(sightings);
// Append a table row for each sighting object
    var row = tbody.append("tr");

// Iterate through the array and print key and value in the table data. Use a cell.text() to input the value
Object.entries(sightings).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value)
    });
});

// Create a step to select the 'Filter Table' button
// Use Developer Tool to see where the 'Filter Table' button exists. Use d3 to select it
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html('');
    // Select the 'Enter a Date' button
    var inputElement = d3.select("#datetime");
    // Get the value property of the input datetime
    var inputValue = inputElement.property("value");
    // Print input value of the datetime
    console.log(inputValue);
    // Filter data with datetime equal to inputValue
    var filterData = tableData.filter(sightings => sightings.datetime === inputValue);
    // Print filterData
    console.log(filterData);

    // Use a forEach step to print the selections
    filterData.forEach(selections => {
        console.log(selections);
        // Append a table row for each sighting object
        var row = tbody.append("tr");
        // Use Object.entries to print each sighting value
        Object.entries(selections).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});