import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//importo el Navbar
import Navbar from "./Navbar";

//importo el Jumbotron
import Jumbotron from "./Jumbotron";

//importo las cartas
import Cards from "./Cards";

//Importo footer
import  Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />

			<div className="container-fluid my-5">

				<div className="mb-5">
					<Jumbotron />
				</div>
				<div className="row">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>

			<Footer />

		</div>



	);
};

export default Home;