const React = require('react')
const Default = require('../default')




function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div key={place.id} className="col-sm-6">
          <h2 className='text-center'>
            <a href={`/places/${place.id}`}>{place.name}</a></h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img  className="rounded mx-auto d-block" src={place.pic} alt={place.name} />
          <p className="text-center"> Located in {place.city},{place.state}</p>
          <p>{place.id}</p>
        </div>
      )
    })
    return (
      <Default>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Default>
    )
  }
  
  
  

module.exports = index