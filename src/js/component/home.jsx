import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  let cardContent = [
    {
      title: "La programación",
      content: "La importancia de saber programar hoy en día",
    },
    {
      title: "La sociedad",
      content: "Hay muchos problemas hoy en día",
    },
    {
      title: "El universo",
      content: "Día a día descubrimos más cosas del Universo.",
    },
    {
      title: "La Antártida",
      content: "Lo que genera el calentamiento global",
    },
  ];
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4 gap-5 justify-content-center">
            {cardContent.map((item, index) => {
              return (
                <Card title={item.title} content={item.content} key={index} />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
