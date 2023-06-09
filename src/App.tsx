import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./Style/global";
import Home from "./Component/Home";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Home />
		</div>
	);
}

export default App;
