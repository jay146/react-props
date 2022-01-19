import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);
  return (

    <div> 
      <h2 style={{color:"black"}}>{props.name}</h2>
      <img  style={{width:"500px"}}src={props.image}  alt="sheldon_img" />
      <p>{props.email}</p>
      <p>{props.phoneno}</p>
    
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1 style={{color:"blue"}}>My Contacts</h1>
    <Card  
name="Sheldon Cooper"
image ="https://static.wikia.nocookie.net/bigbangtheory/images/f/f4/Sheldo8.png"
email="sheldonafan@gmail.com"
phoneno="8639452948"/>


    <input id="fName" placeholder="enter your name" value="jayakrishna" type="text"/>
    
  </div>,
  document.getElementById("root")
);
