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
    
    <div style={{width: "3em"}}>
             
          <div className="container bg-danger" onClick= {()=> prenderRed()} style={{boxShadow: encendidoRed}}>Rojo</div>
          <div className="container bg-warning" onClick= {()=> prenderYellow()} style={{boxShadow: encendidoYellow}}>Naranja</div>
          <div className="container bg-success" onClick= {()=> prenderGreen()} style={{boxShadow: encendidoGreen}}>Verde</div>
               
    </div>
  );
};

export default TrafficLight;
