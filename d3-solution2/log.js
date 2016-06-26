// get the data
d3.csv("force1.csv", function(error, links) {

var nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function(link) {
    
   
   
    link.source = nodes[link.source] || 
        (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || 
        (nodes[link.target] = {name: link.target});
    
    
    //link.value = +link.value;
});


var width = 1900,
    height = 900;

var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(300)
    .charge(-450)
    .on("tick", tick)
    .start();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// build the arrow.
svg.append("svg:defs").selectAll("marker")
    .data(["end"])      // Different link/path types can be defined here
  .enter().append("svg:marker")    // This section adds in the arrows
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 23)
    .attr("refY", -1.5)
    .attr("markerWidth", 20)
    .attr("markerHeight", 8)
    .attr("orient", "auto")
    .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");

// add the links and the arrows
var path = svg.append("svg:g").selectAll("path")
    .data(force.links())
  .enter().append("svg:path")
    .attr("class", "link")
    .attr("marker-end", "url(#end)");

// define the nodes
var node = svg.selectAll(".node")
    .data(force.nodes())
  .enter().append("g")
    .attr("class", "node")
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
    .call(force.drag);

// add the nodes
node.append("circle")
    .attr("r", 20)
    .style("fill", "orangered");

// add the text 
node.append("text")
    .attr("x", 30)
    .attr("dy", ".35em")
    .text(function(d) { console.log(d.name);return d.name; });

// add the curvy lines
function tick() {
    path.attr("d", function(d) {
        var dx = d.target.x - d.source.x,
            dy = d.target.y - d.source.y,
            dr = Math.sqrt(dx * dx + dy * dy);
        return "M" + 
            d.source.x + "," + 
            d.source.y + "A" + 
            dr + "," + dr + " 0 0,1 " + 
            d.target.x + "," + 
            d.target.y;
    });

    node.attr("transform", function(d) { 
            return "translate(" + d.x + "," + d.y + ")"; });
    }

    function mouseover() {
    d3.select(this).select("text").transition()
        .duration(750)
        .attr("x", 60)
        .attr("dy", ".35em")
        .style("fill", "steelblue")
        .style("stroke", "lightsteelblue")
        .style("stroke-width", ".5px")
        .style("font", "40px sans-serif");
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 40)
        .style("fill", "lightsteelblue");
}

// action to take on mouse double click
function mouseout() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 20)
        .style("fill", "orange");
    d3.select(this).select("text").transition()
        .duration(750)
        .attr("x", 30)
        .attr("dy", ".35em")
        .style("stroke", "none")
        .style("fill", "black")
        .style("stroke", "none")
        .style("font", "20px sans-serif");
}

});