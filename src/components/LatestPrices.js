import React from "react";
import Price from "./Price";

const LatestPrices = (props) => {
	console.log(props.latestPrices);

	return (
		<div className="latestPrices">
			<Price name={"Benzin"} price={10} />
			<Price name={"Dizel"} price={10} />
			<Price name={"Autoplin"} price={10} />
			<Price name={"Plinsko ulje"} price={10} />
		</div>
	);
};

export default LatestPrices;
