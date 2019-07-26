const data = [
  { width: 200, height: 100, fill: 'pink' },
  { width: 100, height: 50, fill: 'salmon' },
  { width: 50, height: 25, fill: 'purple' },
];

const svg = d3.select('svg');

const rects = svg
  .selectAll('rect')
  .data(data)
  .attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);

rects
  .enter()
  .append('rect')
  .attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);

console.log(rect);
