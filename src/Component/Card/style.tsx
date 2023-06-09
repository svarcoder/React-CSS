import styled, { css } from "styled-components";
import { colors, screenSizes } from "../../Style/global";

export const CardWrapper = styled.div`
	overflow: hidden;
	margin-left: 40px;
	text-align: left;
	margin-top: 60px;
	width: 280px;
	font-family: Quicksand, arial, sans-serif;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
`;

export const CardHeader = styled.header`
	padding: 5px;
`;

export const CardHeading = styled.h1`
	font-size: 15px;
	font-weight: bold;
	text-align: left;
`;
