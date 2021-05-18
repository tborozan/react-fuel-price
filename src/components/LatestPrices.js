import Price from "./Price";

const LatestPrices = (props) => {
	let benzin = props.latestPrices.find(
		(x) => x.tip_goriva_id === 1
	).avg_cijena;
	let dizel = props.latestPrices.find(
		(x) => x.tip_goriva_id === 2
	).avg_cijena;
	let autoPlin = props.latestPrices.find(
		(x) => x.tip_goriva_id === 3
	).avg_cijena;
	let plinskoUlje = props.latestPrices.find(
		(x) => x.tip_goriva_id === 4
	).avg_cijena;

	return (
		<div className="latestPrices">
			<Price name={"Benzin"} price={benzin} />
			<Price name={"Dizel"} price={dizel} />
			<Price name={"Autoplin"} price={autoPlin} />
			<Price name={"Plinsko ulje"} price={plinskoUlje} />
		</div>
	);
};

export default LatestPrices;
