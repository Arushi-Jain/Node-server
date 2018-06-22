module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
      // You'll create your note here.
      console.log(req.body)
      var request = req.body
      res.send({'Hello' : request})
    })
    app.post('/myfirst', (req, res) => {
        // You'll create your note here.
        res.send('Hello first')
      })
      app.post('/mysecond', (req, res) => {
        // You'll create your note here.
        res.send('Hello second')
      })
}