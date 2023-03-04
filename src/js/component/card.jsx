import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";


const Card = (props) => {
  return (
    <>
  <div className="col">
    <div className="card h-100">
    <img src={rigoImage} className="card-img-top img-fluid p-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <p class="card-text text-center">{props.content}</p>
      </div>
      <div className="card-footer text-center">
        <a href="#" class="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
    </>
  );
};

export default Card;
