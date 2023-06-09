import styled from "styled-components";
import { colors, screenSizes } from "../../Style/global";

export const Container = styled.div`
	table {
		width: 90%;
		margin-top: 50px;
		margin-left: 40px;
		border-collapse: collapse;
		tbody {
			tr {
				&:hover {
					background-color: #cdd1c2;
					border-radius: 10px;
				}
			}
		}

		th,
		td {
			border-collapse: collapse;
		}
		th,
		td,
		tr {
			padding: 5px;
		}
		th {
			text-align: left;
			color: #cdd1c2;
		}
		@media only screen and (max-width: ${screenSizes.mediaM}px) {
			width: 1200px;
		}
	}
`;
export const TableMain = styled.div`
	display: flex;
	margin-top: 10px;
	font-size: 25px;
`;
export const TableIcon = styled.div`
	color: #f0b90b;
	font-size: 25px;
	margin-right: 10px;
`;
export const TableName = styled.div`
	color: #cdd1c2;
	font-size: 25px;
	text-align: left;
	margin-left: 10px;
`;
export const TableChange = styled.div`
	color: #03a66d;
	font-size: 15px;
	text-align: left;
`;
export const TablePrice = styled.div`
	font-size: 15px;
	text-align: left;
	font-weight: bold;
`;
