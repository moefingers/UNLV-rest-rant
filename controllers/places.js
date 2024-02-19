const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', {places}) 
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
let indexOfPlace =returnIndexOfPlace(req.params.id)
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

router.get('/:id/edit', (req, res) => {
 let indexOfPlace =returnIndexOfPlace(req.params.id)

  if (isNaN(indexOfPlace)) {
      res.render('error404')
  }
  else if (!places[indexOfPlace]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[indexOfPlace] })
  }
})

router.put('/:id', (req, res) => {
  let indexOfPlace = returnIndexOfPlace(req.params.id)
  if (isNaN(indexOfPlace)) {
      res.render('error404')
  }
  else if (!places[indexOfPlace]) {
      res.render('error404')
  }
  else {
      if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      }
      req.body.id = places[indexOfPlace].id
      
      places[indexOfPlace] = req.body
      res.redirect(`/places/${req.body.id}`)
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
    let indexOfPlace = returnIndexOfPlace(req.params.id)

    places.splice(indexOfPlace, 1)
    res.redirect('/places')
})  


module.exports = router

function returnIndexOfPlace(id){
  let idChecked = Number(id)
  let indexOfPlace

  places.forEach(place => {
      if(place.id == idChecked){
          indexOfPlace = places.indexOf(place)
      }
  })
  return indexOfPlace
}