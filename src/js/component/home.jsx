import React, {useState} from "react";


//create your first component
const TrafficLight = () => {

	//declaro los states y estados de inicio
	const [encendidoRed,setEncendidoRed] = useState ("none");
  const [encendidoYellow,setEncendidoYellow] = useState ("none");
  const [encendidoGreen,setEncendidoGreen] = useState ("none");
	console.log(encendidoRed);

	//Aca declaro la funcion para "prender" las luces con el style de boxshadow para el rojo
  let prenderRed = () => {
				
    if(encendidoRed == "none"){
      setEncendidoRed("5px 10px 18px 18px white");
      setEncendidoGreen("none");
      setEncendidoYellow("none");
    }else{
      setEncendidoRed("none");
    }
  }
	
  //Aca declaro la funcion para "prender" las luces con el style de boxshadow para el amarillo
  let prenderYellow = () => {
		
    if(encendidoYellow == "none"){
      setEncendidoYellow("5px 10px 18px 18px white");
      setEncendidoRed("none");
      setEncendidoGreen("none");
    }else{
      setEncendidoYellow("none");
    }
  }
	
  //Aca declaro la funcion para "prender" las luces con el style de boxshadow para el verde
  let prenderGreen = () => {
	
    if(encendidoGreen == "none"){
      setEncendidoGreen("5px 10px 18px 18px white");
      setEncendidoRed("none");
      setEncendidoYellow("none");
    }else{
      setEncendidoGreen("none");
    }
	}

	// aca retorno lo que quiero mostrar con sus cambios onClick
  return (
    
    <div className="container bg-dark " id="container-principal" style={{width: "4em", height: "9em"}}>
             
          <div className="rounded-circle bg-danger mt-2 pt-1 mb-1" onClick= {()=> prenderRed()} style={{boxShadow: encendidoRed, height: "30%", width: "110%"}}></div>
          <div className="rounded-circle bg-warning mb-1" onClick= {()=> prenderYellow()} style={{boxShadow: encendidoYellow, height: "30%", width: "110%"}}></div>
          <div className="rounded-circle bg-success" onClick= {()=> prenderGreen()} style={{boxShadow: encendidoGreen, height: "30%", width: "110%"}}></div>
               
    </div>
  );
};

export default TrafficLight;
