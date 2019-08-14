const temps = [
  [0, 15], 
  [100, 25], 
  [200, 21], 
  [300, 12], 
  [400,  5], 
  [500, 18],
];

const $forecast = d3.select(`#forecast`);

// Define what it is we're looking to do
const createLine = d3.line();

// Apply the plotting function directly to the path
$forecast.append(`path`)            // Create an empty path
  .attr(`d`, createLine(temps))     // Plot the points to the path
  .classed(`line`, true);           // Style the line








// const low = d3.min(temp);
// console.log(low);

// const high = d3.max(temps);
// console.log(high);

// const range = d3.extent(temps);
// console.log(range);

