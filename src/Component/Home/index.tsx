import * as React from "react";
import {
	Container,
	HomeMenu,
	Button,
	HomeTitle,
	HomeContent,
	HomeSubContent,
	HomePara,
	HomeHead,
	HomeMenuHead,
	imgUrls,
	CardComponent,
	NormalHomePara,
	SingleHomePara,
	ParaIcon,
	ParaContent,
	ParaLink,
	HomeParaHead,
	FirstParaLink,
	SecondParaLink,
	HomeMiddleTitle,
	HomeMiddle,
	HomeMiddleLeft,
	HomeMiddleRight,
	HomeRightTitle,
	HomeRightContent,
	HomeMiddleElement,
	HomeMiddleSingleElement,
	HomeMiddleAll,
	HomeLast,
	HomeLastTitle,
	HomeLastPara,
	HomeLastComponent,
	HomeLastContent,
	LastTitle,
	LastButton,
	LastFirstButton,
	LastSecondButton,
	HomeFinish,
} from "./style";
import Header from "../Header/index";
import Footer from "../Footer/index";
import Carousel from "./Carousel";
import Card from "../Card";
import { IoMdPaper } from "react-icons/io";
import { AiFillSound } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsApple } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";
import { MdLaptopMac } from "react-icons/md";
import { BsWindows } from "react-icons/bs";
import { DiLinux } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FaBlogger } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import Table from "../Table";

const Home: React.FC = (props) => {
	return (
		<>
			<Header />
			<Container>
				<HomeHead>Buy & sell Crypto in minutes</HomeHead>

				<HomePara>Join the world's largest crypto exchange</HomePara>
				<Button>Register Now</Button>

				<HomeMenuHead>
					<HomeMenu>
						<HomeTitle>
							LAZIO/USDT
							<span>2,094.61%</span>
						</HomeTitle>
						<HomeContent>21.9461</HomeContent>
						<HomeSubContent>$21.95</HomeSubContent>
					</HomeMenu>
					<HomeMenu>
						<HomeTitle>
							LAZIO/USDT
							<span>2,094.61%</span>
						</HomeTitle>
						<HomeContent>21.9461</HomeContent>
						<HomeSubContent>$21.95</HomeSubContent>
					</HomeMenu>
					<HomeMenu>
						<HomeTitle>
							LAZIO/USDT
							<span>2,094.61%</span>
						</HomeTitle>
						<HomeContent>21.9461</HomeContent>
						<HomeSubContent>$21.95</HomeSubContent>
					</HomeMenu>
					<HomeMenu>
						<HomeTitle>
							LAZIO/USDT
							<span>2,094.61%</span>
						</HomeTitle>
						<HomeContent>21.9461</HomeContent>
						<HomeSubContent>$21.95</HomeSubContent>
					</HomeMenu>
					<HomeMenu>
						<HomeTitle>
							LAZIO/USDT
							<span>2,094.61%</span>
						</HomeTitle>
						<HomeContent>21.9461</HomeContent>
						<HomeSubContent>$21.95</HomeSubContent>
					</HomeMenu>
				</HomeMenuHead>
			</Container>
			<CardComponent>
				<Card />
				<Card />
				<Card />
				<Card />
			</CardComponent>
			{/* <Carousel slides={imgUrls} autoPlay /> */}
			<NormalHomePara>
				<SingleHomePara>
					<HomeParaHead>
						<ParaIcon>
							<AiFillSound />
						</ParaIcon>
						<ParaContent>
							{" "}
							Binance Futures Will Launch USDT-Margined CTSI Perpetual Contracts
							with Up to 25X Leverage 10-25
						</ParaContent>
					</HomeParaHead>
					<SecondParaLink>
						<ParaLink>More</ParaLink>
					</SecondParaLink>
				</SingleHomePara>
				<SingleHomePara>
					<ParaIcon>
						<IoMdPaper />
					</ParaIcon>
					<ParaContent>
						Special Notice about Binance.com in Singapore
					</ParaContent>
					<FirstParaLink>
						<ParaLink>More</ParaLink>
					</FirstParaLink>
				</SingleHomePara>
				<SingleHomePara>
					<ParaIcon>
						<IoMdPaper />
					</ParaIcon>
					<ParaContent>
						Special Notice About Binance Markets Limited
					</ParaContent>

					<FirstParaLink>
						<ParaLink>More</ParaLink>
					</FirstParaLink>
				</SingleHomePara>
			</NormalHomePara>
			<HomeHead>Market trend</HomeHead>
			<Table />
			<HomeMiddleTitle>
				View more markets <IoIosArrowDroprightCircle size={22} />
			</HomeMiddleTitle>
			<HomeHead>Trade. Anywhere.</HomeHead>

			<HomePara>
				Compatible with multiple devices, start trading with safety and
				convenience.
			</HomePara>

			<HomeMiddle>
				<HomeMiddleLeft>
					<img
						src='https://defirepublic.com/wp-content/uploads/2019/10/bitfinex-affiliate-program-dashboard-screenshot-mobile.png'
						alt='bitFinix'
					/>
				</HomeMiddleLeft>
				<HomeMiddleRight>
					<HomeMiddleAll>
						<img
							src='https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png'
							alt='qrCode'
							style={{ height: "100px", width: "100px" }}
						/>
						<HomeRightTitle>
							Scan to Download{" "}
							<HomeRightContent>iOS & Android</HomeRightContent>
						</HomeRightTitle>
					</HomeMiddleAll>

					<HomeMiddleElement>
						<HomeMiddleSingleElement>
							<BsApple />
							<br />
							App Store
						</HomeMiddleSingleElement>
						<HomeMiddleSingleElement>
							<IoLogoAndroid />
							<br />
							App Store
						</HomeMiddleSingleElement>
						<HomeMiddleSingleElement>
							<FaGooglePlay />
							<br />
							App Store
						</HomeMiddleSingleElement>
					</HomeMiddleElement>
					<HomeMiddleElement>
						<HomeMiddleSingleElement>
							<MdLaptopMac />
							<br />
							App Store
						</HomeMiddleSingleElement>
						<HomeMiddleSingleElement>
							<BsWindows />
							<br />
							App Store
						</HomeMiddleSingleElement>
						<HomeMiddleSingleElement>
							<DiLinux />
							<br />
							App Store
						</HomeMiddleSingleElement>
					</HomeMiddleElement>
					<HomeMiddleElement>
						<HomeMiddleSingleElement>
							<AiFillApi />
							<br />
							App Store
						</HomeMiddleSingleElement>
					</HomeMiddleElement>
				</HomeMiddleRight>
			</HomeMiddle>
			<HomeMiddleTitle>
				More Download Options <IoIosArrowDroprightCircle size={22} />
			</HomeMiddleTitle>
			<HomeHead>Get in touch. Stay in touch.</HomeHead>
			<HomeLast>
				<HomeLastComponent>
					<HomeLastTitle>
						<BiSupport size={65} />
					</HomeLastTitle>
					<HomeLastContent>24 / 7 Support</HomeLastContent>
					<HomeLastPara>
						Got a problem? Just get in touch. Our support team is available
						24/7.
					</HomeLastPara>
				</HomeLastComponent>
				<HomeLastComponent>
					<HomeLastTitle>
						<FaBlogger size={65} />
					</HomeLastTitle>
					<HomeLastContent>Binance Blog</HomeLastContent>
					<HomeLastPara>
						News and updates from the world’s leading cryptocurrency exchange.
					</HomeLastPara>
				</HomeLastComponent>
				<HomeLastComponent>
					<HomeLastTitle>
						<BiMessageDetail size={65} />
					</HomeLastTitle>
					<HomeLastContent>Community</HomeLastContent>
					<HomeLastPara>
						Binance is global. Join the discussion in our worldwide communities.
					</HomeLastPara>
				</HomeLastComponent>
				<HomeLastComponent>
					<HomeLastTitle>
						<IoIosPeople size={65} />
					</HomeLastTitle>
					<HomeLastContent>Careers</HomeLastContent>
					<HomeLastPara>
						Help build the future of technology. Start your new career at
						Binance.
					</HomeLastPara>
				</HomeLastComponent>
			</HomeLast>
			<HomeFinish>
				<LastTitle>Start trading now</LastTitle>
				<LastButton>
					<LastFirstButton>Register Now</LastFirstButton>
					<LastSecondButton>Trade Now</LastSecondButton>
				</LastButton>
			</HomeFinish>
			<Footer />
		</>
	);
};

export default Home;
