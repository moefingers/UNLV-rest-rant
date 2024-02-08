const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', {places}) 
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
  let idChecked = Number(req.params.id)
  let idExists = false
  let indexOfPlace
  places.forEach(place => {
    if(place.id == idChecked){
      idExists = true
      indexOfPlace = places.indexOf(place)
    }

  });
    if (isNaN(indexOfPlace)) {
      res.render('error404')
    }
    else if (!places[indexOfPlace]) {
      res.render('error404')
    }
    else {
      res.render('places/show', {place: places[indexOfPlace]})
      
    }
  

})
  
router.post('/', (req, res) => {
    req.body.id = places[places.length - 1].id + 1


    // console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    
    
    places.push(req.body)
    res.redirect('/places')
  })
  
router.delete('/:id', (req, res) => {
    let idChecked = Number(req.params.id)
    let idExists = false
    let indexOfPlace

    places.forEach(place => {
        if(place.id == idChecked){
            idExists = true
            indexOfPlace = places.indexOf(place)
        }
    })

    places.splice(indexOfPlace, 1)
    res.redirect('/places')
})  


module.exports = router