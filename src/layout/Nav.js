import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-pink">
			<div className="container-fluid">
				<span className="navbar-brand"></span>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="row collapse navbar-collapse" id="navbarScroll">
					<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll justify-content-center align-items-center">
						<li className="nav-item"><Link className="nav-link" to="/home">Accueil</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Nav;