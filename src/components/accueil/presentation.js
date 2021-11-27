import photo_1 from "../../img/photo_ID.jpg";
import etoiles from "../../img/etoiles.png";


function Presentation() {

    return (
        <div className="row container-fluid bg-white p-0 m-0  justify-content-center text-center">
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
					<button type="button" className="btn btn-pink">En savoir plus...</button>
				</div>
				{/* <div>
					<img className="img-fluid " src={etoiles} alt={"photo_etoiles"}/>
				</div> */}
			</div>
		</div>
    )
}

export default Presentation;