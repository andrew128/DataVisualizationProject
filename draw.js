//this method takes two parameters, the data and the column of the specified data
//it puts them into an array and then plots them in a graph
var draw = function(data, column)
{
    //console.log("data:",data);

    //creates all the variables 
    var d=[];
    var rows=0;
    var xnums=[];
    var ynums=[];
    
    //sets the time column and the specified column to variables
    var datamin=d3.min(data, function(r) { return r[column];})
    var timemin=d3.min(data, function(r) { return r[0];})

    //takes the inputted data and pushes them to the variables mentioned above
    data.map(function(r) {
        ts=Math.round((r[0]-timemin)*1000)
        xnums.push(ts);
        ynums.push(datamin-r[column]);
        //ynums.push(r[column]);
        d.push({"Time Elapsed(miliseconds)":ts,"Location(meters)":datamin-r[column]});
        rows++;
    })

    //sets the start times to be the very first items in the dataset
    d3.select("#ts")[0][0].textContent="Starting time(seconds): "+timemin
    d3.select("#data")[0][0].textContent="Starting Location(Meters): "+datamin
    
    //console.log("tag:",d3.select("#ts"))

    //console.log("ts:",xnums);
    //console.log("data:",ynums);
    //console.log("rows:",rows);

    //draws/plots the data
    var svg = dimple.newSvg("body", 12*rows, 7*rows);
    var chart = new dimple.chart(svg, d);
    chart.addCategoryAxis("x", "Time Elapsed(miliseconds)");
    chart.addMeasureAxis("y", "Location(meters)");
    var lines=chart.addSeries(null, dimple.plot.line);
    chart.draw();
    
}
