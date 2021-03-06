const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const saltRounds = 10;
var db = require("../models");

module.exports = function(app) {
  app.get("/api/users/join/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.joinedEvents.findAll({
      where: {
        eventsId: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });



  app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Users.findAll({
      include: [db.Posts]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Users.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Events]
    }).then(function(dbUsers) {
      dbUsers.addEvents(req.body.EventId);
      dbUsers.addUsers(req.body.UserId);
      res.json(dbUsers);
    });
  });

  // app.post("/api/users/join", function(req, res) {
  //   db.User.create(req.body.UserId).then(function(dbUser) {
  //     dbEvent.addUser(req.body.UserId);
  //     res.json(dbUser);
  //   });

  // });
  app.post("/api/users/join/:token/:id", function(req, res)
  {
    //parse token to get id
    var decoded = jwt.verify(req.params.token, 'secret');
    db.joinedEvents.create({
        eventsId: req.params.id,
        userId: decoded.userId
     })
    .then(function(dbPopulateEvent)
    {

      res.json(dbPopulateEvent);
    });
  });

  app.post("/api/users/join2/:userName/:id", function(req, res)
  {
    //parse token to get id
       db.joinedEvents.create({
    //     where: {
    //   eventsId: req.params.id,
    //   userName: req.params.userName
    // },include: [db.Events, db.Users]
    // })
     
      eventsId: req.params.id,
      userName: req.params.userName

    })
    .then(function(res)
    {

      res.json(res);
    });
  });

  app.put("/api/users/join3/:id", function(req, res) {
    db.Events.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbPopulateEvent)
      {
  
        res.json(dbPopulateEvent);
      });
  });

  app.post("/api/createaccount", function(req, res) {
    var hashpass = bcrypt.hashSync(req.body.password, saltRounds);
    db.Users.create(
      {
        userName: req.body.userName,
        password: hashpass,
        realName: req.body.realName,
        userGender: req.body.userGender,
        userIntro: req.body.userIntro,
        favoriteGames: req.body.favoriteGames,
        userImage: req.body.userImage

      }).then(function(dbUsers) {
        
        console.log(dbUsers.id);
      const token = jwt.sign({
        userId: dbUsers.id,
      }, 'secret', { expiresIn: '1h' });
         res.json(token);
    
    });
  });

  app.post("/api/login", function (req, res) {
    
    db.Users.findAll({
      where: {
        userName: req.body.userName,
      }
    }).then(function(dbUsers) {
      console.log(req.body.userName);

      console.log(dbUsers);
        if (dbUsers.length > 0)//if we found results
      {
        //result returns array so loop
        for(let i = 0; i < dbUsers.length; i++) {

        
          bcrypt.compare(req.body.password, dbUsers[i].password, function (err, bres) {
            if (bres) {//if account is found
              const token = jwt.sign({
                userId: dbUsers[i].id
                // username: result[i].username,
              }, 'secret', { expiresIn: '1h' });
              console.log("success");
              return res.json(token);
            }
            else {//if password does not match
              console.log(bres);
              console.log(dbUsers[i].password);
  
  
              console.log("false");
              return res.json(false);
            }
          });
        }
      }
      else
      {
        console.log(dbUsers)
        console.log("nothingfound")
        //found nothing in db and create account
        res.json(false);
      }
    });

  });

  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

};
