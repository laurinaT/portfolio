import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Nav from './layout/Nav';

import Header from "./layout/Header";
import Footer from './layout/Footer';

import Accueil from "./components/accueil/Accueil";
import Cv from "./components/mon_cv/Cv";
import Projets from "./components/projets/Projets";
import Presentation2 from './components/presentation/Presentation2';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
		<Nav />
		<Header />
		<main className="container-fluid p-0 my-5">
			<Routes>
				<Route path="/" element={<Accueil />} />
				<Route path="/home" element={<Accueil />} />
				<Route path="/projets" element={<Projets />} />
				<Route path="/presentation" element={<Presentation2 />} />
				<Route path="/mon_cv" element={<Cv />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</main>	
    	<Footer />
    </div>
  );
}

export default App;
