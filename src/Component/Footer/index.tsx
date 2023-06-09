import * as React from "react";
import {
	Container,
	FooterComponent,
	FooterTitle,
	FooterContent,
	Elem,
	FooteIcon,
	ElemIcon,
	FooterLast,
} from "./style";
import { FaTelegram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaDove } from "react-icons/fa";
import { BsReddit } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ImCoinYen } from "react-icons/im";
import { BiNavigation } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";

const Footer: React.FC = (props) => {
	return (
		<>
			<Container>
				<FooterComponent>
					<FooterTitle>About Us</FooterTitle>
					<FooterContent>
						<Elem>About</Elem>
						<Elem>Careers</Elem>
						<Elem>Business Contacts</Elem>
						<Elem>Community</Elem>
						<Elem>Binance Blog</Elem>
						<Elem>Terms</Elem>
						<Elem>Privacy</Elem>
						<Elem>Announcements</Elem>
						<Elem>News</Elem>
						<Elem>Notices</Elem>
					</FooterContent>
				</FooterComponent>
				<FooterComponent>
					<FooterTitle>Products</FooterTitle>
					<FooterContent>
						<Elem>Exchange</Elem>
						<Elem>Academy</Elem>
						<Elem>Charity</Elem>
						<Elem>Card</Elem>
						<Elem>Labs</Elem>
						<Elem>Launchpad</Elem>
						<Elem>Research</Elem>
						<Elem>Trust Wallet</Elem>
						<Elem>NFT</Elem>
						<Elem>Featured.market</Elem>
						<Elem>Binance Pay</Elem>
						<Elem>Gift Card</Elem>
					</FooterContent>
				</FooterComponent>
				<FooterComponent>
					<FooterTitle>Service</FooterTitle>
					<FooterContent>
						<Elem>Downloads</Elem>
						<Elem>Desktop Application</Elem>
						<Elem>Buy Crypto</Elem>
						<Elem>Institutional Services</Elem>
						<Elem>Referral</Elem>
						<Elem>Affiliate</Elem>
						<Elem>BNB</Elem>
						<Elem>OTC Trading</Elem>
						<Elem>Listing Application</Elem>
						<Elem>P2P Merchant Application</Elem>
						<Elem>Historical Market Data</Elem>
					</FooterContent>
				</FooterComponent>
				<FooterComponent>
					<FooterTitle>Support</FooterTitle>
					<FooterContent>
						<Elem>Give Us Feedback</Elem>
						<Elem>Support Center</Elem>
						<Elem>Submit a request</Elem>
						<Elem>API Documentation</Elem>
						<Elem>Fees</Elem>
						<Elem>Trading Rules</Elem>
						<Elem>Binance Verify</Elem>
						<Elem>Law Enforcement Requests</Elem>
					</FooterContent>
				</FooterComponent>
				<FooterComponent>
					<FooterTitle>Learn</FooterTitle>
					<FooterContent>
						<Elem>Buy BNB</Elem>
						<Elem>Buy BUSD</Elem>
						<Elem>Buy Bitcoin</Elem>
						<Elem>Buy Ethereum</Elem>
						<Elem>Buy Litecoin</Elem>
						<Elem>Buy Ripple</Elem>
						<Elem>Buy Bitcoin Cash</Elem>
						<Elem>Buy Dogecoin</Elem>
						<Elem>Buy DeFi</Elem>
						<Elem>Buy SHIB</Elem>
						<Elem>Buy Tradable Altcoins</Elem>
					</FooterContent>
				</FooterComponent>
				<FooterComponent>
					<FooterTitle>Community</FooterTitle>
					<FooteIcon>
						<ElemIcon>
							<FaTelegram />
						</ElemIcon>
						<ElemIcon>
							<BsFacebook />
						</ElemIcon>
						<ElemIcon>
							<FaDove />
						</ElemIcon>
						<ElemIcon>
							<BsReddit />
						</ElemIcon>
					</FooteIcon>
					<FooteIcon>
						<ElemIcon>
							<AiFillInstagram />
						</ElemIcon>
						<ElemIcon>
							<ImCoinYen />
						</ElemIcon>
						<ElemIcon>
							<BiNavigation />
						</ElemIcon>
						<ElemIcon>
							<BsYoutube />
						</ElemIcon>
					</FooteIcon>
				</FooterComponent>
			</Container>
			<FooterLast>Binance © 2021</FooterLast>
		</>
	);
};

export default Footer;
