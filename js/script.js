const temps = [
  {day: 1, temp: 15}, 
  {day: 2, temp: 25}, 
  {day: 3, temp: 21}, 
  {day: 4, temp: 12}, 
  {day: 5, temp: 5}, 
  {day: 6, temp: 29},
  {day: 7, temp: 18},
  {day: 8, temp: 25},
];

const $forecast = d3.select(`#forecast`);  // Where is this chart?
const width = 500;    // width of chart
const height = 300;   // height of chart
const length = temps.length;  // how many points are we plotting?
const high = d3.max(temps, t => t.temp);  // highest temp
const low = d3.min(temps, t => t.temp);   // lowest temp

// Define what it is we're looking to do
const createLine = d3.line()
  .x( t => t.day * (width/(length-1)) - (width/(length-1)) )
  .y( t => height - (t.temp - low) * (height / (high - low)) );

// x-axis is evenly distributing points based on how many point we have
// y-axis is evenly distributing temp based on the max temp


// Apply the plotting function directly to the path
$forecast.append(`path`)            // Create an empty path
  .attr(`d`, createLine(temps))     // Plot the points to the path
  .classed(`line`, true);           // Style the line
