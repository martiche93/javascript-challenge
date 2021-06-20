// from data.js
var tableData = sightings;
var tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Use d3 to select the table body. Set table body as variable
var tbody = d3.select("tbody");
// Use d3 to select the Search and Reset button. Set both as a variable
var btnSearch = d3.select("#btnSearch");
var btnReset = d3.select("#btnReset");

// Use d3 to select each category needed for Level 2
var searchDate = d3.select("#searchDate");
var searchCity = d3.select("#searchCity");
var searchState = d3.select("#searchState");
var searchCountry = d3.select("#searchCountry");
var searchShape = d3.select("#searchShape");

// Load table rows into table body
var loadTableRows = (whichData) => {
    tbody.html("");

        whichData.forEach(dataRow => {
            var tblRow = tbody.append("tr");

            tblColumns.forEach(column => tblRow.append("td").text(dataRow[column]));
        });
};

loadTableRows(tableData);

// Set up Search button for the listed properties below
btnSearch.on("click", () => {
    d3.event.preventDefault();

var searchedDate = searchDate.property("value");
var searchedCity = searchCity.property("value");
var searchedState = searchState.property("value");
var searchedCountry = searchCountry.property("value");
var searchedShape = searchShape.property("value");

// Set up if/else/else if statements for each item that doesn't return a search
    if (searchedDate) {
        // Filter the data to only determine the searchedDate value
        var tableData_Filtered = tableData.filter(tableData => tableData.datetime === searchedDate);
        // When filtered data does not equal zero, add to table rows
        if (tableData_Filtered.length !== 0) {
            loadTableRows(tableData_Filtered);
        }
        // If filtered data does equal zero, print message that the search wasn't found
        else {
            tbody.html("");
            tbody.append("tr").append("td").text("No such sightings were found. Please try again.");
        }
    }
    else if (searchedCity) {
        var tableData_Filtered = tableData.filter(tableData => tableData.city === searchedCity);
        if (tableData_Filtered.length !== 0) {
            loadTableRows(tableData_Filtered);
        }
        else {
            tbody.html("");
            tbody.append("tr").append("td").text("No such sightings were found. Please try again.");
        }
    }
    else if (searchedState) {
        var tableData_Filtered = tableData.filter(tableData => tableData.state === searchedState);
        if (tableData_Filtered.length !== 0) {
            loadTableRows(tableData_Filtered);
        }
        else {
            tbody.html("");
            tbody.append("tr").append("td").text("No such sightings were found. Please try again.");
        }
    }
    else if (searchedCountry) {
        var tableData_Filtered = tableData.filter(tableData => tableData.country === searchedCountry);
        if (tableData_Filtered.length !== 0) {
            loadTableRows(tableData_Filtered);
        }
        else {
            tbody.html("");
            tbody.append("tr").append("td").text("No such sightings were found. Please try again.");
        }
    }
    else if (searchedShape) {
        var tableData_Filtered = tableData.filter(tableData => tableData.shape === searchedShape);
        if (tableData_Filtered.length !== 0) {
            loadTableRows(tableData_Filtered);
        }
        else {
            tbody.html("");
            tbody.append("tr").append("td").text("No such sightings were found. Please try again.");
        }
    };

// Set up Reset Button with "click", set to each search value
btnReset.on("click", () => {
	document.getElementById("searchDate").value='';
	document.getElementById("searchCity").value='';
	document.getElementById("searchState").value='';
	document.getElementById("searchCountry").value='';
	document.getElementById("searchShape").value='';
	
// Load original dataset into table
	loadTableRows(tableData);
    });
});