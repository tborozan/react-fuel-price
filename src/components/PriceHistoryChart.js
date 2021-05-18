import React from "react";
import Plot from "react-plotly.js";

const getFuelData = (priceHistory, fuelId) => {
	let dates = [];
	let prices = [];
	priceHistory.forEach((element) => {
		if (element.tip_goriva_id === fuelId) {
			dates.push(element.dat_poc);
			prices.push(element.avg_cijena);
		}
	});
	return [dates, prices];
};

const PriceHistoryChart = (props) => {
	return (
		<div className="priceHistory">
			<Plot
				data={[
					{
						x: getFuelData(props.priceHistory, 1)[0],
						y: getFuelData(props.priceHistory, 1)[1],
						type: "scatter",
						name: "Benzin",
						mode: "lines",
						marker: { color: "green" },
					},
					{
						x: getFuelData(props.priceHistory, 2)[0],
						y: getFuelData(props.priceHistory, 2)[1],
						type: "scatter",
						name: "Dizel",
						mode: "lines",
						marker: { color: "black" },
					},
					{
						x: getFuelData(props.priceHistory, 3)[0],
						y: getFuelData(props.priceHistory, 3)[1],
						type: "scatter",
						name: "AutoPlin",
						mode: "lines",
						marker: { color: "blue" },
					},
					{
						x: getFuelData(props.priceHistory, 4)[0],
						y: getFuelData(props.priceHistory, 4)[1],
						type: "scatter",
						name: "Plinsko ulje",
						mode: "lines",
						marker: { color: "brown" },
					},
				]}
				layout={{ autosize: true }}
			/>{" "}
		</div>
	);
};

export default PriceHistoryChart;
