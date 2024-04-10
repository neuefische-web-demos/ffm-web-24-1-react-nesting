import React from "react";
import "./styles.css";

function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {description}
      <Button curry="lecker">Adopt {name}</Button>
    </>
  );
}

function Button({ children }) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description={<p>Very cute dog</p>} />
      <Animal emoji="🐈" name="Mittens" description={<p>Very cute cat</p>} />
      <Animal
        emoji="🐢"
        name="Archibald"
        description={
          <div>
            <p>Very cute turtle</p>
            <ul>
              <li>Eats letuce</li>
              <li>Is very old</li>
            </ul>
          </div>
        }
      />
      <Animal
        emoji="🐣"
        name="Chick Norris"
        description={<p>Very cute chicken</p>}
      />
    </main>
  );
}
