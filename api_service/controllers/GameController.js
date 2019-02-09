  // // ==========================================
  // // Game Controller Class
  // // ==========================================


  // Game: {
  //   // All Game data
  //   all: function (req, res) {
  //     console.log('======All Game Data Request++++++++')
  //     db.Game.find({}, function (err, Games) {
  //       if (err) res.json({error: err, message: 'Error', success: false})
  //       res.json(Games)
  //     }).limit(5)
  //   }, // End of All Method
  //   // Show a single Game data
  //   data: function (req, res) {
  //     console.log('======Single Game data request++++++++')
  //     db.Game.findById(req.param('_id'), function (err, Game) {
  //       if (err) res.json({error: err, message: 'Error', success: false})
  //       res.json(Game)
  //     })
  //   }, // End of data method
  //   create: function (req, res) {
  //     console.log('======Creating a new Game request+++++++', req.body)
  //     if (req.body) {
  //       var Game = new db.Game(req.body)
  //       Game.save(function (err) {
  //         if (err) res.json({message: err.message, success: false})
  //         res.json({message: 'Order Created!', success: true})
  //       })
  //     }
  //   }, // End of create method
  //   update: function (req, res) {
  //     console.log('======Updating a new Game request+++++++', req.body)
  //     if (req.body) {
  //       var Game = new db.Game(req.body)
  //       Game.save(function (err) {
  //         if (err) res.json({message: err.message, success: false})
  //         res.json({message: 'Order Created!', success: true})
  //       })
  //     }
  //   } // End of create method
  // }, // End of Game Controller Object
