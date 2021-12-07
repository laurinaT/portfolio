import Presentation from "./portfolio/Presentation"; 
import Projets from "./portfolio/Projets"; 

function Accueil() {

    return (
        <div className="container-fluid m-0 bg-white py-5">
			<Presentation />
			<Projets />
        </div>
    )
}

export default Accueil;