import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About</h1>
      <p>
        This is made using the TheCocktailDB API. Checkout the API{" "}
        <a
          href="https://www.thecocktaildb.com/api.php"
          target={"_blank"}
          id="api-link"
          rel="noreferrer"
        >
          Docs
        </a>
        .
      </p>
    </section>
  );
};

export default About;
