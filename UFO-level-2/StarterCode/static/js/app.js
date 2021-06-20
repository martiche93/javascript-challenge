// from data.js
var tableData = sightings;
var tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Use d3 to select the table body. Set table body as variable
var tbody = d3.select("tbody");
var btnSearch = d3.select("#btnSearch");
var btnReset = d3.select("#btnReset");

var searchDate = d3.select("#searchDate");
var searchCity = d3.select("#searchCity");
var searchState = d3.select("#searchState");
var searchCountry = d3.select("#searchCountry");
var searchShape = d3.select("#searchShape");

var loadTableRows = (whichData) => {
    tbody.html("");

        whichData.forEach(dataRow => {
            var tblRow = tbody.append("tr");

            tblColumns.forEach(column => tblRow.append("td").text(dataRow[column]));
        });
};

loadTableRows(tableData);

btnSearch.on("click", () => {
    d3.event.preventDefault();

var searchedDate = searchDate.property("value");
var searchedCity = searchCity.property("value");
var searchedState = searchState.property("value");
var searchedCountry = searchCountry.property("value");
var searchedShape = searchShape.property("value");
    
    if (searchedDate) {
        var tableData_Filtered = tableData.filter(tableData => tableData.datetime === searchedDate);
        if (tableData_Filtered.length !== 0) {
            loadTableRows(tableData_Filtered);
        }
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

btnReset.on("click", () => {
	document.getElementById("searchDate").value='';
	document.getElementById("searchCity").value='';
	document.getElementById("searchState").value='';
	document.getElementById("searchCountry").value='';
	document.getElementById("searchShape").value='';
	
	// Load original dataset
	loadTableRows(tableData);
    });
});