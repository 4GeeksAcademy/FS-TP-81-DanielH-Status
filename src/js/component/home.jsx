import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color, setColor] = useState("")
	// const [cambio, setCambio] = useState(false)
	// setInterval(() => {
		
	// }, interval);

	return (
		<div className="container d-flex justify-content-center">
			<div className="text-center bg-dark p-5 rounded-4 mt-5">
				<div className={`rounded-circle bg-danger pt-3 ${color === "red" ? "glow" : ""} `} onClick={() => setColor("red")}
					style={{ width: "100px", height: "100px" }}></div>

				<div className={`rounded-circle bg-warning my-4 ${color === "yellow" ? "glow" : ""} `} onClick={() => setColor("yellow")}
					style={{ width: "100px", height: "100px" }}></div>

				<div className={`rounded-circle bg-success mb-2 ${color === "green" ? "glow" : ""} `} onClick={() => setColor("green")}
					style={{ width: "100px", height: "100px" }}></div>
			</div>

			 {/* <button onClick={() => setCambio}>CAMBIO</button>  */}

		</div>





	);
};

export default Home;
