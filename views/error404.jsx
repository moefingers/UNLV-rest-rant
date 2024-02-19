const React = require('react')
const Default = require('./default')

function error404 () {
    return (
      <Default>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div className="card">
                <img className="cardChild" src="https://placebear.com/g/200/300" alt="200x300 placeholder bear" /><br/> 
                <p className="cardChild">Placebear delivered by <a href="http://ottodestruct.com">Otto</a> — <a href="http://placekitten.com/">Inspired by placekitten</a></p>
              </div>
          </main>
      </Default>
    )
  }
  
module.exports = error404
