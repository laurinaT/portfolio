function Contact() {
    return(
		<form>
      		<h1>Pour nous contacter</h1>
      		<div className="separation"></div>
      		<div className="body_form">

        <div className="left">
        	<div className="box">
              <label>Votre prénom</label>
              <input type="text" minlength="2" maxlength="40">
              <i className="fas fa-user-astronaut"></i>
            </div>
            <div className="box">
              <label>Votre nom *</label>
              <input type="text" required minlength="2" maxlength="40">
              <i className="fas fa-user-ninja"></i>
            </div>
            <div className="box">
              <label>Votre numéro de téléphone</label>
              <input type="tel" minlength="10" maxlength="10">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="box">
              <label>Votre adresse email *</label>
              <input type="email" placeholder="votre_email@site.com" required>
              <i className="far fa-paper-plane"></i>
            </div>
            <div className="box">
              <label>Votre âge</label>
              <input type="number">
              <i className="fas fa-hand-sparkles"></i>
              <p>* champs obligatoires</p>

            </div>
        </div>


          
        <div className="right">
            <div id="box_textarea">
            <label>Votre message *</label>
            <i className="far fa-comment"></i>
            <textarea placeholder="Saisissez ici..." rows="1" aria-required="true">
            </textarea>
          </div>
       
        </div>
      
      </div>
      <div className="footer_form">
        <button id="couleur" className="button_dark" type="submit">Envoyer votre message</button>
      </div>
   </form>
    )
}

export default Contact;