function Card(props) {
    return(
		<div className="card col-10 col-md-5 m-5 align-items-center">
			<div className="col-10 shadow rounded">
				<img src={process.env.PUBLIC_URL + "/img/"+props.projet.pictures} className="card-img-top img-fluid mt-n1"/>
			</div>
			<div className="card-body col-12">
				<h2 className="card-title">{props.projet.name}</h2>
				<p className="card-text">{props.projet.resume}</p>
				<a href="{props.projet.link}" className="mx-2 btn btn-pink">Voir la GH page</a>
				<a href="{props.projet.link}" className="mx-2 btn btn-blue">En savoir plus...</a>
			</div>
		</div>
    )
}

export default Card;