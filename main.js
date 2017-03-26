// set the pamrameters of the visualization to a browser friendly height & width

var margin = 75, width = 800 - margin, height = 400 - margin;

var svg1 = dimple.newSvg("body", width, height);

// pull the csv file and construct new dimple chart with designated axis, legend & text

d3.csv('survival_rate_1.csv', function(data) {

	var chart = new dimple.chart(svg1, data);
	chart.addCategoryAxis("x", ["Class", "Sex"]);
	chart.addMeasureAxis("y", "Survival Rate");
	chart.addSeries("Sex", dimple.plot.bar);
	svg1.append("text")
		.attr("x", chart._xPixels() + chart._widthPixels() / 2)
		.attr("y", chart._yPixels() - 20)
		.style("text-anchor", "middle")
		.style("font-weight", "bold")
		.text("Class & Gender: How Titanic Passengers Survived");
	var legend = chart.addLegend(155, 10, 510, 20, "right"); 
	legend._getEntries_old = legend._getEntries;
	legend._getEntries = function() {
		return legend._getEntries_old.apply(this, arguments).reverse();
	}

	chart.draw();

});



