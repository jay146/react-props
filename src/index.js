import React from "react";
import ReactDOM from "react-dom";
const imageproperties1=
{
  height:"400px",
  width:"400px",
  border:"solid gold",
  margin:50,
  padding:10,


};
function Card(props) {
  console.log(props);
  const imageFont=
    {
    fontSize:"30px",
    color:"white",
    };
  const imageproperties=
    {
      height:"300px",
      width:"300px",
      border:"solid gold",
    };
  
return(
      <div>
      <h2 style={{color:"orange",fontFamily:"cursive"}}>{props.name}</h2>
      <img src={props.image}  style={imageproperties} />
            <p style={imageFont}>{props.email}</p>
            <p style={imageFont} >{props.phoneno} </p>
      </div>
      );
}

ReactDOM.render(
<div class="row container-fluid bg-dark">

    <div class="row">
    <div class="col-sm-12">
    <h1 style={{color:"blue",textAlign:"center",border:"solid black"}}>BigbangTheory</h1>
    </div>
    </div>

<div className="col-sm-3">
      <Card  
      name="Sheldon Cooper"
      image ="https://static.wikia.nocookie.net/bigbangtheory/images/f/f4/Sheldo8.png"
      email="sheldona@gmail.com"
      phoneno="12345678" />
</div>

<div class="col-sm-6"  style={imageproperties1}>
    <ul style={{color :"blueviolet"}}>
        <li>we are calling this Card function and passing over an</li>
        <li>object(name:"",image:"",email:"",phoneno:"")</li>
        <li>through the input called props</li>
        <li>Inside the function we use those inputs to customize html elements</li>
        <li>We return and output it through dom using render method in DOM.</li>
    </ul>

</div>


<div className="col-sm-3">
    <Card  
    name="Leonard Hofstader"
    image ="https://upload.wikimedia.org/wikipedia/en/7/77/Leonard_Hofstadter.jpg"
    email="leonard@gmail.com"
    phoneno="987654321" />
    </div>


</div>
 ,document.getElementById("root"));
