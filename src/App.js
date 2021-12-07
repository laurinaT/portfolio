import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Nav from './portfolio/layout/Nav';

import Header from "./portfolio/layout/Header";
import Footer from './portfolio/layout/Footer';

import Accueil from "./portfolio/components/accueil/Accueil";
import Cv from "./portfolio/components/mon_cv/Cv";
import Projets from "./portfolio/components/projets/Projets";
import Presentation2 from './portfolio/components/presentation/Presentation2';
import Contact from './portfolio/components/contact/Contact';


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
