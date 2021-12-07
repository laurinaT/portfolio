import Photo from "../../portfolio/img/arc-en-ciel.png";

function Contact() {
    return(
		<section className="row container-fluid bg-blue p-5 m-0 mb-5 justify-content-center text-center">
			<div className="container">
				<img className="img-fluid" src={ Photo } alt={"photo_ciel"}/>	
				<h1>Vous souhaitez me contacter ?</h1>
				<h2>Vous pouvez m'envoyer un mail à :</h2>	
				<p className="m-5">laurinatoussaint@gmail.com</p>
			</div>
		</section>
    )
}

export default Contact;