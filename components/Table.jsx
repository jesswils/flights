'use client';
import { useState, useEffect } from 'react';

export const FlightTable = () => {
	const [flightData, setFlightData] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('http://localhost:3001/api/flights')
			.then((res) => res.json())
			.then((data) => setFlightData(data.data))
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) return <p>Loading</p>;
	// console.log(flightData);
	// console.log((flightData));
	return (
		<>
			{/* {Object.values(flightData).map((flight) => {
				<table>
					<thead>
						<tr>
							<td>{flight.FlightNo}</td>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			})} */}
		</>
	); // anytime I would try and manipulate the data I would get an error to say I can't convert undefined to an object
};

export default FlightTable;
