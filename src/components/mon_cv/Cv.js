import cv from "../../portfolio/img/cv_laurina_toussaint.png";

function Cv() {

    return (
        <div className="row container-fluid m-0 bg-white py-5 justify-content-center">
			<h1>Mon CV</h1>
			<img className="col-12 md-col-8 col-lg-6 img-fluid" src={ cv } alt={"cv"}/>
        </div>
    )
}

export default Cv;