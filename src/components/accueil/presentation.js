import photo_1 from "../../img/photo_ID.jpg";
import { Link } from "react-router-dom";


function Presentation() {

    return (
        <section className="row container-fluid bg-white p-0 m-0 mb-5  justify-content-center text-center">
			<div className="col-12 col-sm-4 m-0 p-0">
				<img className="border-pink img-fluid" src={photo_1} alt={"photo_ID"}/>
			</div>
			<div className="col-12 col-sm-6 bg-blue p-5 m-0 d-flex flex-column justify-content-around etoiles">
				<div>
					<h1>Bonjour à tous !</h1>
					<h2>Je m'appelle Laurina Toussaint</h2> 
				</div>
				<div>
					<p>Je suis actuellement en reconversion professionnelle afin de devenir 
	développeuse web. </p>
					<p>Anciennement infographiste en multimédia de métier, j'ai eu l'occasion, lors de mes études d'infographie, de me passionner pour le codage 
	avec le HTML et le CSS mais j'ai très vite été limitée par le manque de connaissances que j'avais dans les autres langages.</p>
					<p>C'est pourquoi cette année, je me suis lancée dans la reprise de mes études avec un titre professionnel en développement web et web mobile.</p>
				</div>
				<div>
					<button  target="_blank" className="mx-2 btn btn-pink"><Link className="nav-link btn-pink" to="portfolio/presentation">En savoir plus...</Link></button>
				</div>
			</div>
		</section>
    )
}

export default Presentation;