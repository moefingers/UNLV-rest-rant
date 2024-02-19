const React = require('react')
const Default = require('../default.jsx')

function edit_form (data) {
    return (
          <Default>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>

                <div className='form-group'>
                    <label htmlFor="name">Place Name</label>
                    <input className='form-control'  id="name" name="name" defaultValue={data.place.name} required />
                </div>
                <div className='form-group'>
                    <label htmlFor="pic">Place Picture URL</label>
                    <input className='form-control' type="url" id="pic" name="pic" defaultValue={data.place.pic}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="city">City</label>
                    <input className='form-control' id="city" name="city" defaultValue={data.place.city}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="state">State</label>
                    <input  className='form-control' id="state" name="state"    defaultValue={data.place.state}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className='form-control' id="cuisines" name="cuisines" defaultValue={data.place.cuisines} required />
                </div>
                <input className='btn btn-primary' type="submit" value="Submit Edit to Place"  />
            </form>
          </main>
        </Default>
    )
}

module.exports = edit_form
