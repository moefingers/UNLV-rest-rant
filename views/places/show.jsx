const React = require("react");
const Default = require("../default");

const Show = ({place}) => {
    let comments = (
        <h3 className="inactive">No comments yet!</h3>

    )
    if (place.comments.length) {
        comments = place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? "Rant! " : "Rave! "}</h2>
                    <h4>{c.content}</h4>
                    <h3>- {c.author}</h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    // cuisines in comma seperated list, E.g. "Italian, Mexican, Chinese"
    place.cuisines.split(",").map((cuisine) => {
        return (
            <span key={cuisine} className="badge rounded-pill text-bg-info me-2">
                {cuisine}</span>
        )
    })

    return (
        <Default>
            <main>
            <div key={place.id} className="col-sm-6">
          <h1 className='text-center'>{place.name}</h1>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img  className="rounded mx-auto d-block" src={place.pic} alt={place.name} />
          <p className="text-center"> Located in {place.city},{place.state}</p>
          <p>{place.showEstablished()}</p>
          <p>serving {place.cuisines}</p>
          <p>{place.id}</p>
        </div>

        <div className='row align-items-center'>
                    <div className='col'>
                        <a href={`/places/${place.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form action={`/places/${place.id}?_method=DELETE`} method='POST'>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <script src="/assets/js/showPlace.js"></script>
        </Default>

    )
}

module.exports = Show
