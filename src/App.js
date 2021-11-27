import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Nav from './layout/Nav';

import Header from "./layout/Header";
import Footer from './layout/Footer';

import Accueil from "./components/accueil/Accueil";


function App() {
  return (
    <div className="App">
		<Nav />
		<Header />
		<main className="container my-5">
			<Routes>
				<Route path="/" element={<Accueil />} />
				<Route path="/home" element={<Accueil />} />
			</Routes>
		</main>	
    	<Footer />
    </div>
  );
}

export default App;
