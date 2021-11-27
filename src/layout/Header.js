import Logo from "../img/logo.png"
import photo_1 from "../img/freedom.jpg"


function Header() {
	return(
		<header className="container-fluid m-0 bg-white py-5">
			<div className="row align-items-center justify-content-center">
				<div className="col-6 row align-items-center justify-content-center text-center">
					<div className="col-4"><img className="img-fluid" src={Logo} alt={"logo"}/></div>
					<div><h1 className="text-primary">Laurina Toussaint</h1></div>
					<div><h2 className="text-primary">Développeuse Web</h2></div>
				</div>
			</div>
			<div className="row bg-white p-0 m-0  justify-content-center text-center">
				<div className="col-4 m-0 p-0">
					<img className="border-pink img-fluid" src={photo_1} alt={"photo_freedom"}/>
				</div>
				<div className="col-6 bg-blue p-5 m-0">
					<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
				</div>
			</div>
		</header>
	)
}

export default Header;