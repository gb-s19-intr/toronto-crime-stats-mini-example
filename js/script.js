const $forecast = d3.select(`#forecast`);  // Where is this chart?
const width = 500;    // width of chart
const height = 300;   // height of chart


const graphData = (temps) => {

  const length = temps.length;  // how many points are we plotting?
  const high = d3.max(temps, t => t.temp);  // highest temp
  const low = d3.min(temps, t => t.temp);   // lowest temp
  const highLow = d3.extent(temps, t => t.temp);   // high and low


  const yAxis = d3.scaleLinear()
    .domain(highLow)
    .range([ height, 0 ]);

  const yScale = d3.axisLeft(yAxis).ticks(high-low);

  $forecast.append(`g`)
    .attr(`transform`, `translate(-2, 0)`)
    .call(yScale)



  // Define what it is we're looking to do
  const createLine = d3.line()
    .x( t => t.day * (width/(length-1)) - (width/(length-1)) )
    .y( t => height - (t.temp - low) * (height / (high - low)) );
  
  // x-axis is evenly distributing points based on how many point we have
  // y-axis is evenly distributing temp based on the max temp
  
  
  // Apply the plotting function directly to the path
  $forecast.append(`path`)            // Create an empty path
    .attr(`d`, createLine(temps))     // Plot the points to the path
    .classed(`line`, true)            // Style the line
    .on('click', (d, i) => {
      console.log(d, i)
    });
  
}


d3.json(`data/weather.json`).then(temps => {
  
  graphData(temps)

})