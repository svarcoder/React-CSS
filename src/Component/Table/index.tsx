import * as React from "react";
import {
	Container,
	TableIcon,
	TableName,
	TableChange,
	TableMain,
	TablePrice,
} from "./style";
import { GrBitcoin } from "react-icons/gr";
import { SiAnsible } from "react-icons/si";
import { SiBaremetrics } from "react-icons/si";
import { SiBandlab } from "react-icons/si";
import { SiBit } from "react-icons/si";
import { SiBroadcom } from "react-icons/si";

const someArray = [
	{
		icon: <GrBitcoin color='yellow' />,
		name: "BNB",
		coinName: "BNB",
		lastPrice: "$580",
		change: "0.44%",
	},
	{
		icon: <SiAnsible color='orange' />,
		name: "BTC ",
		coinName: "Bitcoin",
		lastPrice: "$440",
		change: "0.24%",
	},
	{
		icon: <SiBaremetrics color='#0091E6' />,
		name: "ETC ",
		coinName: "Ethereum",

		lastPrice: "$360",
		change: "0.56%",
	},
	{
		icon: <SiBandlab color='red' />,
		name: "CHZ ",
		coinName: "Chiliz",

		lastPrice: "$760",
		change: "0.34%",
	},
	{
		icon: <SiBit color='#00A1C9' />,
		name: "FIL ",
		coinName: "Filecoin",
		lastPrice: "$150",

		change: "0.88%",
	},
	{
		icon: <SiBroadcom color='#052CA3' />,
		name: "ADA ",
		coinName: "Cardano",

		lastPrice: "$660",
		change: "0.26%",
	},
];

const Table: React.FC = (props) => {
	return (
		<>
			<Container>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Last Price</th>
							<th>24h Change</th>
						</tr>
					</thead>
					<tbody>
						{Object.values(someArray).map((value, index) => {
							return (
								<tr key={index}>
									<td>
										<TableMain>
											<TableIcon>{value.icon}</TableIcon>
											{value.name}
											<TableName>{value.coinName}</TableName>
										</TableMain>
									</td>
									<td>
										<TablePrice>{value.lastPrice}</TablePrice>
									</td>
									<td>
										<TableChange>{value.change}</TableChange>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</Container>
		</>
	);
};

export default Table;
