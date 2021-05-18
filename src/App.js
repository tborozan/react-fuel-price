import axios from "axios";
import Header from "./components/Header";
import LatestPrices from "./components/LatestPrices";

function App() {
	axios
		.get("https://webservis.mzoe-gor.hr/api/trend-cijena")
		.then((response) => {
			console.log(response.data);
		})
		.catch(function (error) {
			alert("Failed to fetch data.");
		});

	return (
		<div className="container">
			<Header title="FUEL PRICES" />
			<LatestPrices latestPrices={latestPrices} />
		</div>
	);
}

export default App;
