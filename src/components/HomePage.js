import React from "react";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <Layout>
      <Section title="Dernieres Annonces">
        <ul className="list-unstyled">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <li key={n} className="p-1">
              Maison 3,4 pieces avec garage
            </li>
          ))}
        </ul>
      </Section>
    </Layout>
  );
};

export function Section({ children, title, next = true }) {
  return (
    <div className="p-3 mb-4 border">
      <h4 className="mb-3">{title}</h4>
      {children}
      {next && (
        <>
          {" "}
          <b>'>>'</b> <a href="#3">Voir plus de {title}</a>
        </>
      )}
    </div>
  );
}

export default HomePage;
