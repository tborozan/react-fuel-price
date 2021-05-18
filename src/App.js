import axios from "axios";
import Header from "./components/Header";
import LatestPrices from "./components/LatestPrices";
import { useState, Fragment, useEffect } from "react";

function getLatestPrices(priceHistory) {
	let latestDate = new Date(
		Math.max(...priceHistory.map((x) => new Date(x.dat_poc)))
	);
	return priceHistory.filter(
		(price) => new Date(price.dat_poc).getTime() === latestDate.getTime()
	);
}

function App() {
	let [priceHistory, setPriceHistory] = useState([]);
	let [latestPrices, setLatestPrices] = useState([]);
	let [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get("https://webservis.mzoe-gor.hr/api/trend-cijena")
			.then((response) => {
				setPriceHistory(response.data);
				setLatestPrices(getLatestPrices(response.data));
				setIsLoading(false);
			})
			.catch(() => {
				alert("Failed to fetch data.");
			});
	}, []);

	return (
		<Fragment>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div className="container">
					<Header title="FUEL PRICES" />
					<LatestPrices latestPrices={latestPrices} />
				</div>
			)}
		</Fragment>
	);
}

export default App;
