import styled from "styled-components";
import { colors, screenSizes } from "../../Style/global";

export const Container = styled.div`
	font-size: 20px;
	display: flex;
	margin-top: 40px;
	margin-left: 40px;
	margin-bottom: 40px;
	text-align: center;
	@media only screen and (max-width: ${screenSizes.mediaL}px) {
		width: 1200px;
	}
`;
export const FooterComponent = styled.div`
	width: 200px;
	text-align: left;
	padding-bottom: 20px;
	border-bottom: 1px solid ${colors.gray};
`;
export const FooterTitle = styled.div`
	color: ${colors.black};
	font-weight: bold;
`;
export const FooterContent = styled.div`
	background-color: ${colors.white};
	text-align: left;
	font-size: 15px;
	margin-top: 20px;
`;
export const Elem = styled.div`
	color: ${colors.gray};
	padding: 4px;
	&:hover {
		color: ${colors.black};
	}
`;
export const FooteIcon = styled.div`
	display: flex;
`;
export const ElemIcon = styled.div`
	color: ${colors.gray};
	margin-top: 20px;
	margin-right: 40px;
	&:hover {
		color: ${colors.black};
	}
`;
export const FooterLast = styled.div`
	color: ${colors.gray};
	margin-top: 20px;
	margin-bottom: 20px;
	@media only screen and (max-width: ${screenSizes.mediaL}px) {
		width: 1200px;
	}
`;
