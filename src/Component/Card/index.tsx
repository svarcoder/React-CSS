import * as React from "react";
import { CardWrapper, CardHeader, CardHeading } from "./style";

const Card: React.FC = (props) => {
	return (
		<>
			<CardWrapper>
				<CardHeader>
					<CardHeading>
						<img
							src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-colorful-burger-advertisement-design-template-9562c76cb52b065fe38426b3808034d7_screen.jpg?ts=1612177681'
							alt='....'
							style={{
								height: "150px",
								width: "100%",
								backgroundRepeat: "no-repeat",
								borderRadius: "5px",
							}}
						/>
					</CardHeading>
				</CardHeader>
			</CardWrapper>
		</>
	);
};

export default Card;
