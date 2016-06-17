var margin = {top: 50, right: 100, bottom: 70, left: 100},
    width = 1900 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

    //height = 800;
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 100]);

var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(30);

var yAxis = d3.svg.axis().scale(y).orient("left").ticks(5);

var valueline = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Jan); });

var valueline1 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Feb); });

 var valueline2 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Mar); });

 var valueline3 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Apr); });

  var valueline4 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.May); });


  var valueline5 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Jun); });


  var valueline6 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Jul); });

  var valueline7 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Aug); });


  var valueline8 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Sep); });

  var valueline9 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Oct); });

  var valueline10 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Nov); });

  var valueline11 = d3.svg.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.Dec); });


var svg = d3.select("body")
    .append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform","translate(" + margin.left + "," + margin.top + ")");

 d3.csv("data.csv", function(data) {
  data.forEach(function(d) {
    
	//console.log(d.Year);
	//console.log(d.Jan);
	
  });


  // Scale the range of the data
    x.domain(d3.extent(data, function(d) { 
//console.log(d.Year);
    	return d.Year; }));
    //y.domain([-70, d3.max(data, function(d) { return d.Feb; })]);
    y.domain([-100, 100]);
    //y.domain([-100, d3.max(data, function(d){ return d.Feb;})]);

    //y.domain([-75, d3.max(data, function(d){ return d.Jan;}),d3.max(data, function(d) { return d.Feb;})]);

    var color = d3.scale.category10();

    // Add the valueline path.

     svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data))
        .attr("id", "Line1")
        .style("stroke", "#1f77b4")
        .style("opacity", 0);
   
    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline1(data))
        .attr("id", "Line2")
        .style("opacity", 0)
        .style("stroke", "#ff7f0e");

     svg.append("path")
        .attr("class", "line")
        .attr("d", valueline2(data))
        .attr("id", "Line3")
        .style("opacity", 0)
        .style("stroke", "#2ca02c");

     svg.append("path")
        .attr("class", "line")
        .attr("d", valueline3(data))
        .attr("id", "Line4")
        .style("opacity", 0)
        .style("stroke", "#d62728");


     svg.append("path")
        .attr("class", "line")
        .attr("d", valueline4(data))
        .attr("id", "Line5")
        .style("opacity", 0)
        .style("stroke", "#9467bd");


     svg.append("path")
        .attr("class", "line")
        .attr("d", valueline5(data))
        .attr("id", "Line6")
        .style("opacity", 0)
        .style("stroke", "#8c564b");


      svg.append("path")
        .attr("class", "line")
        .attr("d", valueline6(data))
        .attr("id", "Line7")
        .style("opacity", 0)
        .style("stroke", "#e377c2");

      svg.append("path")
        .attr("class", "line")
        .attr("d", valueline7(data))
        .attr("id", "Line8")
        .style("opacity", 0)
        .style("stroke", "#7f7f7f");

      svg.append("path")
        .attr("class", "line")
        .attr("d", valueline8(data))
        .attr("id", "Line9")
        .style("opacity", 0)
        .style("stroke", "#bcbd22");


      svg.append("path")
        .attr("class", "line")
        .attr("d", valueline9(data))
        .attr("id", "Line10")
        .style("opacity", 0)
        .style("stroke", "#17becf");


      svg.append("path")
        .attr("class", "line")
        .attr("d", valueline10(data))
        .attr("id", "Line11")
        .style("opacity", 0)
        .style("stroke", "#1f77b4");

      svg.append("path")
        .attr("class", "line")
        .attr("d", valueline11(data))
        .attr("id", "Line12")
        .style("opacity", 0)
        .style("stroke", "#F5B041");

       

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

     svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate(-50,350)rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Temperature(ºC)");

    svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate(900,750)")  // centre below axis
            .text("Year");
  
});

 d3.csv("year.csv", function(error, data) {
    data.forEach(function(d) {
		//console.log(d.Year);
		//d.Year = +d.Year;
    });
    var dataNest = d3.nest().key(function(d) {return d.Year;}).entries(data);
    var color = d3.scale.category10();   // set the colour scale
    legendSpace = width/dataNest.length; // spacing for legend
    //console.log(legendSpace);
    // Loop through each symbol / key
    
    dataNest.forEach(function(d,i) { 
        var Line;
        // Add the Legend
        svg.append("text")
            .attr("x", (legendSpace/2)+i*legendSpace) // spacing
            .attr("y", 50 )
            .attr("class", "legend")    // style the legend
            .style("fill", function() { 
            console.log((d.key));// dynamic colours
            if(d.key==="Dec")
                	return d.color = "#F5B041";
                return d.color = color(d.key);
                
                 })
            .on("click", function(){
            	
            	if (d.key==="Jan")
            	{
            		
            		var active   = Line1.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			console.log("active"+active);
		  			d3.select("#Line1").style("opacity", newOpacity);
		  			Line1.active = active;
            	}

            	else if (d.key==="Feb")
            	{
            		var active   = Line2.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line2").style("opacity", newOpacity);
		  			Line2.active = active;
            	}
            	else if (d.key==="Mar")
            	{
            		var active   = Line3.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line3").style("opacity", newOpacity);
		  			Line3.active = active;
            	}
            	else if (d.key==="Apr")
            	{
            		var active   = Line4.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line4").style("opacity", newOpacity);
		  			Line4.active = active;
            	}
            	else if (d.key==="May")
            	{
            		var active   = Line5.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line5").style("opacity", newOpacity);
		  			Line5.active = active;
            	}
            	else if (d.key==="Jun")
            	{
            		var active   = Line6.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line6").style("opacity", newOpacity);
		  			Line6.active = active;
            	}
            	else if (d.key==="Jul")
            	{
            		var active   = Line7.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line7").style("opacity", newOpacity);
		  			Line7.active = active;
            	}
            	else if (d.key==="Aug")
            	{
            		var active   = Line8.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line8").style("opacity", newOpacity);
		  			Line8.active = active;
            	}
            	else if (d.key==="Sep")
            	{
            		var active   = Line9.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line9").style("opacity", newOpacity);
		  			Line9.active = active;
            	}
            	else if (d.key==="Oct")
            	{
            		var active   = Line10.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line10").style("opacity", newOpacity);
		  			Line10.active = active;
            	}
            	else if (d.key==="Nov")
            	{
            		var active   = Line11.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line11").style("opacity", newOpacity);
		  			Line11.active = active;
            	}
            	else if (d.key==="Dec")
            	{
            		var active   = Line12.active ? false : true,
		  			newOpacity = active ? 1 : 0;
		  			d3.select("#Line12").style("opacity", newOpacity);
		  			Line12.active = active;
            	}
            

            	/*console.log(Line);
		// Determine if current line is visible
				var active   = Line1.active ? false : true,
		  		newOpacity = active ? 1 : 0;
		  		console.log(newOpacity);
		// Hide or show the elements
				d3.select("#Line1").style("opacity", newOpacity);
				
		// Update whether or not the elements are active
				Line1.active = active;*/
	})
            .text(d.key);
            //console.log(d.key);

              
            

    });
});