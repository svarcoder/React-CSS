import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import styled from "styled-components";

export interface ICarousel {
	children?: JSX.Element[];
	currentSlide?: number;
	autoPlay?: boolean;
	dots?: boolean;
	interval?: number;
	arrow?: boolean;
	slideTest?: number;
	slides?: any;
}

const IMG_WIDTH = 620;
const IMG_HEIGHT = 700;

export default memo(
	({
		autoPlay = false,
		dots = false,
		interval = 2000,
		arrow = false,
		slideTest,
		slides,
	}: ICarousel) => {
		const [savedSlides, setSavedSlides] = useState([]);
		const [currentSlide, setSlide] = useState(0);
		const [isPlaying, setIsPlaying] = useState(autoPlay);
		const timer = useRef<any>(undefined);

		useEffect(() => {
			setSavedSlides(
				slides?.map((slide: any, index: number) => {
					return (
						<CarouselSlide key={slide}>
							<img
								key={slide}
								src={slide}
								alt={`Example of mobile application ${index}`}
								style={{
									borderRadius: `20px`,
								}}
							/>
						</CarouselSlide>
					);
				})
			);
		}, [slides]);
		// console.log(savedSlides);
		// console.log(savedSlides.length);

		const handleSlideChange = useCallback(
			(index: number) => {
				// IN here I made the condition but it does not work what I am expecting .
				// I want the first will go all the way to last slide
				setSlide(
					index > savedSlides.length - 1
						? 0
						: index < 0
						? savedSlides.length - 1
						: index
				);
			},
			[savedSlides]
		);

		const createInterval = useCallback(() => {
			timer.current = setInterval(() => {
				handleSlideChange(currentSlide + 1);
			}, interval);
		}, [interval, handleSlideChange, currentSlide]);

		const destroyInterval = useCallback(() => {
			clearInterval(timer.current);
		}, []);

		useEffect(() => {
			if (autoPlay) {
				createInterval();
				return () => destroyInterval();
			}
		}, [autoPlay, createInterval, destroyInterval]);

		return (
			<React.Fragment>
				{/* <p style={{ fontSize: 20 }}>
					{currentSlide} - {savedSlides?.length}
				</p> */}
				<CarouselContainer
					onMouseEnter={() => {
						if (autoPlay) {
							destroyInterval();
						}
					}}
					onMouseLeave={() => {
						if (autoPlay) {
							createInterval();
						}
					}}>
					<CarouselSlides currentSlide={currentSlide}>
						{savedSlides}
					</CarouselSlides>
					{arrow ? (
						<div>
							<LeftButton onClick={() => handleSlideChange(currentSlide - 1)}>
								&#10094;
							</LeftButton>
							<RightButton onClick={() => handleSlideChange(currentSlide + 1)}>
								&#10095;
							</RightButton>
						</div>
					) : null}
					{dots ? (
						<Dots>
							{savedSlides.map((i, index) => (
								<Dot
									key={index}
									onClick={() => handleSlideChange(index)}
									active={currentSlide === index}
								/>
							))}
						</Dots>
					) : null}
				</CarouselContainer>
			</React.Fragment>
		);
	}
);
// This is my styled components
const Buttons = styled.a`
	cursor: pointer;
	position: relative;
	font-size: 18px;
	transition: 0.6s ease;
	user-select: none;
	height: 50px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	top: calc(50% - 25px);
	position: absolute;
	&:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}
`;

const RightButton = styled(Buttons)`
	border-radius: 3px 0 0 3px;
	right: 0;
`;

const LeftButton = styled(Buttons)`
	border-radius: 0px 3px 3px 0px;
	left: 0;
`;

const Dots = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	margin-top: 10px;
`;

const Dot = styled.span<{ active: boolean }>`
	cursor: pointer;
	height: 15px;
	width: 15px;
	margin: 0 10px;
	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
	background-color: ${({ active }) => (active ? `red` : `#eeeeee`)};
`;

const CarouselContainer = styled.div`
	overflow: hidden;
	position: relative;
	width: ${IMG_WIDTH}px;
	height: ${IMG_HEIGHT}px;
	img {
		width: ${IMG_WIDTH - 20}px;
		height: ${IMG_HEIGHT - 50}px;
		margin-left: 10px;
		margin-top: 15px;
	}
	z-index: 1;
`;

const CarouselSlide = styled.div`
	flex: 0 0 auto;
	transition: transform 500ms linear;
	width: 100%;
	transition: all 0.5s ease;
`;

const CarouselSlides = styled.div<{
	currentSlide: ICarousel["currentSlide"];
}>`
	display: flex;
	${({ currentSlide }) =>
		` transform: translateX(-${currentSlide ? currentSlide * 100 + `%` : 0})`};
	transition: all 0.5s ease-in-out;
	cursor: pointer;
`;
