// Load the Visualization API and the corechart package.
google.charts.load('current', { packages: ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table, 
// instantiates the line chart, and draws it.
function drawChart() {
    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Sales'],
        ['January', 100],
        ['February', 120],
        ['March', 130],
        ['April', 90],
        ['May', 140],
        ['June', 150]
    ]);

    // Set chart options
    var options = {
        title: 'Monthly Sales Data',
        curveType: 'function', // Smooth line graph
        legend: { position: 'bottom' },
        width: '100%', // Responsive width
        height: 400 // Adjust the height
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
