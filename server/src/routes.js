module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Howdy ${req.body.email}! Your user was registered!`
    })
  })
}
