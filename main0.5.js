var margin = 75, width = 800 - margin, height = 400 - margin;

var svg1 = dimple.newSvg("body", width, height);

d3.csv('survival_rate_1.csv', function(data) {

	var chart = new dimple.chart(svg1, data);
	chart.addCategoryAxis("x", ["Class", "Sex"]);
	chart.addMeasureAxis("y", "Survival Rate");
	chart.addSeries("Sex", dimple.plot.bubble);
	chart.draw();

});











