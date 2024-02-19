const React = require("react");
const Default = require("./default");

function home() {
  return (
    <Default>
      <main>
        <h1>HOME</h1>
        <h2>
          Welcome to REST-Rant!
        </h2>
        <div className="card">
          <img className="cardChild" src="https://placebear.com/g/200/300" alt="200x300 placeholder bear" /><br/> 
          <p className="cardChild">Placebear delivered by <a href="http://ottodestruct.com">Otto</a> — <a href="http://placekitten.com/">Inspired by placekitten</a></p>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Default>
  );
}

module.exports = home;
