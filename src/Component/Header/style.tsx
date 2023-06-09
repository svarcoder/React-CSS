import styled from "styled-components";
import { colors, screenSizes } from "../../Style/global";

export const HeaderWrap = styled.div`
	background-color: ${colors.black};
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		width: 1200px;
		font-size: 10px;
	}
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		width: 1300px;
	}
`;
export const HeaderTitle = styled.div`
	font-size: 14px;
	text-align: center;
	color: ${colors.white};
	span {
		color: #c98825;
	}
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		font-size: 15px;
	}
`;
export const Button = styled.button`
	font-size: 14px;
	margin: 0px 20px 0px;
	height: 25px;
	width: 110px;
	background-color: #474d57;
	border-radius: 5px;
	color: ${colors.white};
	text-align: center;
	border: none;
	outline: none;
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		font-size: 15px;
	}
`;
export const HeaderIcon = styled.div`
	font-size: 14px;
	margin-top: 15px;
	height: 30px;
	color: #474d57;
	text-align: center;

	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		font-size: 10px;
	}
`;
export const HeaderMenu = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 2px;
	font-size: 40px;
	text-align: center;
	color: #707a8a;
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		width: 1200px;
		font-size: 10px;
	}
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		width: 1300px;
	}
`;
export const HeaderLeft = styled.div`
	font-size: 20px;
	margin: 15px;
	display: flex;
	color: #707a8a;

	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		font-size: 20px;
	}
`;

export const HeaderRight = styled.div`
	font-size: 20px;
	padding: 10px;
	display: flex;
	color: #707a8a;
	a {
		padding: 10px;
	}
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		font-size: 15px;
	}
`;

export const HeaderLogo = styled.div`
	font-size: 25px;
	padding: 10px;
	font-weight: bold;
	color: #f0b90b;
	span {
		padding: 10px;
	}
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		font-size: 20px;
	}
`;

export const SquareLogo = styled.div`
	padding-top: 15px;

	&:hover {
		color: #f0b90b;
	}
`;

export const ChildHover = styled.div`
	text-decoration: none;
	font-size: 15px;
	display: none;
	box-sizing: border-box;
	margin: 10px;
	width: 400px;
	background-color: #ffffff;
	position: absolute;
	box-shadow: 0px 0px 20px rgb(0 0 0 / 8%);
	overflow: hidden;
	border-radius: 0 0 8px 8px;
`;

export const El1 = styled.div`
	padding: 10px;
	text-decoration: none;
	position: relative;
	font-size: 15px;
	margin-top: 8px;
	color: #707a8a;
	&:hover {
		color: #f0b90b;
	}
	&:hover ${ChildHover} {
		display: block;
	}
`;
export const ChildLogo = styled.div`
	margin: 10px;
	align-items: center;
	width: 10%;
	height: 40px;
	position: relative;
`;
export const ChildContent = styled(ChildLogo)`
	width: 70%;
`;
export const ChildArrow = styled(ChildLogo)`
	width: 20%;
	display: none;
`;

export const SingleChildHover = styled.div`
	margin: 10px;
	display: flex;
	align-items: center;
	font-size: 16px;
	position: relative;
	&:hover {
		border: 1px solid ${colors.gray};
		background-color: ${colors.gray};
	}
	&:hover ${ChildArrow} {
		display: block;
		border: 1px solid ${colors.gray};
		background-color: ${colors.gray};
	}
`;
export const YellowArrow = styled.div`
	align-items: center;
	font-size: 16px;
	border-radius: 4px;
	margin-left: 8px;
	padding-left: 4px;
	padding-right: 4px;
	font-size: 12px;
	line-height: 16px;
	background-color: #f0b90b;
	color: #1e2329;
`;

export const El2 = styled(El1)`
	height: 20px;
	width: 20%;
	background-color: #f0b90b;
	border-radius: 5px;
	&:hover {
		color: #707a8a;
		background-color: #fffd7f;
	}
`;
