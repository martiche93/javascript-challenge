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
