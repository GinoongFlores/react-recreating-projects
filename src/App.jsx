import "./App.css";
import reactLogo from "./assets/react.svg";

// Libraries
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Profile } from "./Pages/Profile";

// Components
import { Navbar } from "./Navbar";

export const AppContext = createContext();

function App() {
	const [username, setUsername] = useState("Christian");
	return (
		<div className="App">
			<img src={reactLogo} alt="logo" />
			<AppContext.Provider value={{ username, setUsername }}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="*" element={<h1>Page not Found...</h1>} />
					</Routes>
				</Router>
			</AppContext.Provider>
		</div>
	);
}

export default App;
