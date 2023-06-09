import styled from "styled-components";
import { colors, screenSizes } from "../../Style/global";

export const Container = styled.div`
	width: 100%;
	display: grid;
	justify-content: left;
	box-sizing: border-box;
	text-align: left;

	color: ${colors.black};
`;
export const HomeHead = styled.div`
	font-size: 40px;
	width: 80%;
	font-weight: bold;
	box-sizing: border-box;
	text-align: left;
	margin-left: 40px;
	margin-top: 50px;
	min-width: 0;
	min-height: 1.2em;
`;

export const HomePara = styled.div`
	box-sizing: border-box;
	margin-left: 40px;
	text-align: left;
	margin-top: 15px;
	font-size: 16px;

	text-align: left;
	color: #474d57;

	color: ${colors.black};
`;
export const Button = styled.button`
	font-size: 15px;
	margin-left: 40px;
	text-align: center;
	margin-top: 20px;
	height: 40px;
	width: 200px;
	border-radius: 10px;
	border: none;
	outline: none;
	color: ${colors.black};
	background-color: #f0b90b;
`;
export const HomeMenuHead = styled.div`
	width: 100%;
	display: flex;
	justify-content: left;
	box-sizing: border-box;
	text-align: left;
`;
export const HomeMenu = styled.div`
	margin-left: 40px;
	text-align: left;
	margin-top: 70px;
	width: 200px;
	color: ${colors.black};
`;
export const HomeTitle = styled.div`
	color: ${colors.black};
	span {
		margin-left: 10px;
		color: green;
	}
`;
export const HomeContent = styled.div`
	font-weight: bold;
	color: ${colors.black};
`;
export const HomeSubContent = styled.div`
	color: ${colors.black};
`;
export const CardComponent = styled.div`
	display: flex;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		width: 1200px;
		font-size: 10px;
	}
`;
export const NormalHomePara = styled.div`
	margin-left: 40px;
	margin-top: 40px;
	@media only screen and (max-width: ${screenSizes.mediaM}px) {
		font-size: 8px;
	}
`;
export const ParaIcon = styled.div`
	color: #98a0ab;
`;
export const ParaContent = styled.div`
	color: #98a0ab;
	margin-left: 20px;
`;
export const SingleHomePara = styled.div`
	display: flex;
	margin-top: 10px;
`;

export const HomeParaHead = styled.div`
	display: flex;

	&:hover ${ParaIcon} {
		color: #f0b90b;
	}
	&:hover ${ParaContent} {
		color: #f0b90b;
	}
`;
export const FirstParaLink = styled.div`
	color: #f0b90b;
`;
export const SecondParaLink = styled.div`
	color: #98a0ab;
`;
export const ParaLink = styled.div`
	margin-left: 20px;
	&:hover {
		color: #f0b90b;
	}
	&:hover ${HomeParaHead} {
		color: #98a0ab;
	}
`;
export const HomeMiddleTitle = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-right: 10px;
	&:hover {
		color: #f0b90b;
	}
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		width: 1200px;
		font-size: 10px;
	}
`;
export const HomeMiddle = styled.div`
	display: flex;
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		width: 1400px;
	}
	@media only screen and (max-width: ${screenSizes.mediaL}px) {
		width: 1300px;
		font-size: 10px;
	}
`;
export const HomeMiddleLeft = styled.div`
	width: 50%;
	margin-left: -50px;
`;
export const HomeMiddleRight = styled.div`
	width: 50%;
	text-align: left;
	margin-top: 40px;
	margin-left: 60px;
	font-size: 12px;
`;
export const HomeRightTitle = styled.div`
	margin-top: 22px;
`;
export const HomeRightContent = styled.div`
	margin-top: 10px;
	color: #cdd1c2;
`;
export const HomeMiddleElement = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: flex-start;
	font-size: 20px;
`;
export const HomeMiddleSingleElement = styled.div`
	margin-top: 10px;
	text-align: center;
	margin-left: 40px;
	padding: 5px;
	&:hover {
		background-color: #cdd1c2;
		border-radius: 5px;
	}
`;
export const HomeMiddleAll = styled.div`
	display: flex;
`;

export const HomeLast = styled.div`
	margin-top: 40px;
	margin-left: 40px;
	display: flex;
	text-align: left;
	@media only screen and (max-width: ${screenSizes.mediaL}px) {
		width: 1200px;
		font-size: 10px;
	}
`;
export const HomeLastComponent = styled.div`
	padding: 10px;
	width: 250px;
	text-align: left;
	margin-left: 20px;
	&:hover {
		background-color: #cdd1c2;
		border-radius: 5px;
	}
`;
export const HomeLastTitle = styled.div`
	text-align: left;
`;
export const HomeLastContent = styled.div`
	font-size: 15px;
	text-align: left;
	margin-top: 10px;
`;
export const HomeLastPara = styled.div`
	font-size: 12px;
	text-align: left;
	margin-top: 10px;
`;
export const HomeFinish = styled.div`
	font-size: 25px;
	width: 100%;
	height: 150px;
	margin-top: 40px;
	background-color: #fafafa;
	@media only screen and (max-width: ${screenSizes.mediaXL}px) {
		width: 1200px;
		font-size: 10px;
	}
`;
export const LastTitle = styled.div`
	padding: 20px;
	text-align: center;
	font-weight: bold;
`;
export const LastButton = styled.div`
	font-size: 12px;
	display: flex;
	justify-content: center;
	text-align: center;
	margin-top: 10px;
`;
export const LastFirstButton = styled.button`
	border-radius: 10px;
	border: none;
	outline: none;
	height: 40px;
	width: 150px;
	color: ${colors.black};
	background-color: #fcd535;
	margin: 10px;
`;
export const LastSecondButton = styled.button`
	border-radius: 10px;
	border: none;
	outline: none;
	height: 40px;
	width: 150px;
	color: ${colors.black};
	background-color: #eaecef;
	margin: 10px;
`;

export const imgUrls = [
	`https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60`,
	`https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60`,
	`https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60`,
	`https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60`,
];
