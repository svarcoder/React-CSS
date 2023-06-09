import * as React from "react";
import {
	HeaderWrap,
	HeaderTitle,
	HeaderMenu,
	Button,
	HeaderIcon,
	HeaderLeft,
	HeaderRight,
	HeaderLogo,
	SquareLogo,
	El1,
	El2,
	ChildHover,
	SingleChildHover,
	ChildLogo,
	ChildContent,
	ChildArrow,
	YellowArrow,
} from "./style";
import { ImCross } from "react-icons/im";
import { SiFitbit } from "react-icons/si";
import { SiSquare } from "react-icons/si";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { GrMoreVertical } from "react-icons/gr";
import { GiClassicalKnowledge } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiArrowLeftSFill } from "react-icons/ri";

const Header: React.FC = (props) => {
	return (
		<>
			<HeaderWrap>
				<HeaderTitle>
					To see content specific to your location, we suggest{" "}
					<span>India</span> as your preferred country/region.
				</HeaderTitle>
				<Button>Continue</Button>
				<HeaderIcon>
					<ImCross />
				</HeaderIcon>
			</HeaderWrap>

			<HeaderMenu>
				<HeaderLeft>
					<HeaderLogo>
						<SiFitbit />
						<span>BINANCE</span>
					</HeaderLogo>
					<SquareLogo>
						<SiSquare />
						<AiOutlineCaretDown size={15} />
					</SquareLogo>

					<El1>
						Buy Crypto
						{/* <YellowArrow>
							<RiArrowLeftSFill /> EUR
						</YellowArrow> */}
						<AiOutlineCaretDown size={15} />
					</El1>
					<El1>Markets</El1>
					<El1>
						Trade <AiOutlineCaretDown size={15} />
						<ChildHover>
							<SingleChildHover>
								<ChildLogo>
									<GiClassicalKnowledge />
								</ChildLogo>
								<ChildContent>
									Covert
									<br />
									This easist way to trade
								</ChildContent>
								<ChildArrow>
									<AiOutlineArrowRight />
								</ChildArrow>
							</SingleChildHover>
							<SingleChildHover>
								<ChildLogo>
									<GiClassicalKnowledge />
								</ChildLogo>{" "}
								<ChildContent>
									{" "}
									Classic
									<br />
									This easist way to trade
								</ChildContent>
								<ChildArrow>
									<AiOutlineArrowRight />
								</ChildArrow>
							</SingleChildHover>
							<SingleChildHover>
								<ChildLogo>
									<GiClassicalKnowledge />
								</ChildLogo>
								<ChildContent>
									{" "}
									Advanced
									<br />
									This easist way to trade
								</ChildContent>
								<ChildArrow>
									<AiOutlineArrowRight />
								</ChildArrow>
							</SingleChildHover>
							<SingleChildHover>
								{" "}
								<ChildLogo>
									<GiClassicalKnowledge />
								</ChildLogo>
								<ChildContent>
									{" "}
									Margin
									<br />
									This easist way to trade
								</ChildContent>
								<ChildArrow>
									<AiOutlineArrowRight />
								</ChildArrow>
							</SingleChildHover>
						</ChildHover>
					</El1>

					<El1>
						Derivatives <AiOutlineCaretDown size={15} />
					</El1>
					<El1>
						Finance <AiOutlineCaretDown size={15} />
					</El1>
					<El1>NFT</El1>
				</HeaderLeft>
				<HeaderRight>
					<El1>LogIn</El1>
					<El2>Register</El2>
					<El1>Downloads </El1>
					<El1>English</El1>
					<SquareLogo>
						<GrMoreVertical />
					</SquareLogo>
					<El1>USD</El1>
					<SquareLogo>
						<GrMoreVertical />
					</SquareLogo>
					<El1>
						<BsMoon />
					</El1>
				</HeaderRight>
			</HeaderMenu>
		</>
	);
};

export default Header;
