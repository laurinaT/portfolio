import axios from "axios";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

import Card from "./Card";

function Projets() {
    // Etat pour le tableau de projets renvoyé par l'API
    let [Projets, setProjets] = useState([]);
    // Etat qui représente une éventuelle erreur dans la réponse serveur
    let [error, setError] = useState(null);
    // Etat qui permet de déterminer quand la réponse est arrivée
    let [isLoaded, setIsLoaded] = useState(false);

    // Hook déclenché à chaque changement du DOM
    // Ici on ne souhaite le lancer qu'au démarrage donc on passe un tableau vide en deuxième paramètre
    useEffect(() => {
        // Lancement de la requête avec Axios
        axios.get("projets.json")
            // Récupération de la réponse et mise à jour des états
            .then(function(response) {
                setProjets(response.data);
                setIsLoaded(true);
            })
            // Cas où une erreur est levée
            .catch(function(error) {
                setError(error)
            })
    }, [])

    // Trois affichages différents selon :
    // - qu'on a reçu une erreur
    // - que la réponse n'est pas encore arrivée
    // - qu'on a reçu les données
    if (error) {
        return ( 
			<div classNameName = "alert alert-danger" >
            Une erreur est survenue le chargement a échoué: { error.message } 
			</div>
        )
    }

    if (!isLoaded) {
        return ( 
			<div classNameName = "alert alert-info" >
            Chargement des projets en cours 
			</div>
        )
    }

    console.log(Projets);

    return ( 
		<section className="row justify-content-center" >
            <div>
            	<h1> Mes projets </h1> 
				<h2> Voici mon travail ! </h2> 
			</div> 
			{Projets.map(projet => < Card projet = { projet }/>)}
		</section>
    );
}

export default Projets;