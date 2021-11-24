import Logo from "../img/logo.png"


function Header() {
	return(
		<header className="m-0 bg-white row py-5 align-items-center justify-content-center">
			<div className="col-6 row align-items-center justify-content-center text-center">
				<div className="col-4"><img className="img-fluid" src={Logo} alt={"logo"}/></div>
				<div><h1 className="text-primary">Laurina Toussaint</h1></div>
				<div><h2 className="text-primary">Développeuse Web</h2></div>
			</div>
		</header>
	)
}

export default Header;