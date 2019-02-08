// const db = require('./models'),
//   fs = require('fs')

// module.exports = {
//   // ==========================================
//   // Game Controller Class
//   // ==========================================


//   Game: {
//     // All Game data
//     all: function (req, res) {
//       console.log('======All Game Data Request++++++++')
//       db.Game.find({}, function (err, Games) {
//         if (err) res.json({error: err, message: 'Error', success: false})
//         res.json(Games)
//       }).limit(5)
//     }, // End of All Method
//     // Show a single Game data
//     data: function (req, res) {
//       console.log('======Single Game data request++++++++')
//       db.Game.findById(req.param('_id'), function (err, Game) {
//         if (err) res.json({error: err, message: 'Error', success: false})
//         res.json(Game)
//       })
//     }, // End of data method
//     create: function (req, res) {
//       console.log('======Creating a new Game request+++++++', req.body)
//       if (req.body) {
//         var Game = new db.Game(req.body)
//         Game.save(function (err) {
//           if (err) res.json({message: err.message, success: false})
//           res.json({message: 'Order Created!', success: true})
//         })
//       }
//     }, // End of create method
//     update: function (req, res) {
//       console.log('======Updating a new Game request+++++++', req.body)
//       if (req.body) {
//         var Game = new db.Game(req.body)
//         Game.save(function (err) {
//           if (err) res.json({message: err.message, success: false})
//           res.json({message: 'Order Created!', success: true})
//         })
//       }
//     } // End of create method
//   }, // End of Game Controller Object
//   // Admin Controller Object
//   // ==========================================
//   Admin: {
//     // All Admin data
//     all: function (req, res) {
//       console.log('=======All Admin Data Request+++++++++++')
//       db.Admin.find({}, function (err, Admins) {
//         if (err) res.json({error: err, message: 'Error', success: false})
//         res.json(Admins)
//       })
//     }, // ENd of all Admin data
//     // Single Admin Data
//     data: function (req, res) {
//       console.log('========Single Admin data request==========')
//       db.Admin.findById(req.param('_id'), function (err, Admin) {
//         if (err) res.json({error: err, message: 'Error', success: false})
//         res.json(Admin)
//       })
//     }, // end data method
//     // create a new Admin profile
//     create: function (req, res) {
//       console.log('===files===', req.files)
//       if (req.body.Admin) {
//         var tmp_path = req.files.file.path
//         var target_path = './uploads/' + req.files.file.name
//         fs.rename(tmp_path, target_path, function (err) {
//           if (err) throw err
//           // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
//           fs.unlink(tmp_path, function () {
//             if (err) throw err
//           // res.send('File uploaded to: ' + target_path + ' - ' + req.files.file.size + ' bytes')
//           })
//         })

//         console.log('===Admin===', JSON.parse(req.body.Admin))
//         var Admin = new db.Admin(JSON.parse(req.body.Admin))
//         Admin.recImg.data = fs.readFileSync(target_path)
//         Admin.recImg.contentType = req.files.file.type
//         Admin.save(function (err) {
//           if (err) res.json({
//               message: err.message,
//               success: false
//             })
//           res.json({
//             message: 'Admin Added!',
//             success: true
//           })
//         })
//       }
//     }, // End of create method
//     signIn: function (req, res) {
//       db.Admin.findOne({
//         email: req.body.email
//       }, function (err, Admin) {
//         if (err) res.json({
//             err: err
//           })
//         if (Admin) {
//           if (Admin.authenticate(req.body.password)) {
//             var token = jwt.sign({
//               name: Admin.fname,
//               email: Admin.email
//             },
//               secret, {
//                 expiresInMinutes: 52000
//               })

//             res.json({
//               token: token,
//               message: 'valid Admin'
//             })
//           } else
//             res.json({
//               message: 'invalid Admin'
//             })
//         } else
//           res.json({
//             message: 'Admin not found'
//           })
//       })
//     } // End of Sign In Method
//   }
//   // ==========================================
//   // End of Admin Controller Object
//   // ==========================================

// }
