const express = require("express");
const router = express.Router();
let Name = require("../../models/boy");
let Girl = require("../../models/girl");
let NameData = require("../../models/nameData");
const User = require("../../models/users");
require("dotenv").config();

//const NewsAPI = require("newsapi");
//const newsapi = new NewsAPI("a34fde997a304ec9b2087510b600eaf7");
const axios = require("axios");
//const cheerio = require("cheerio");
//const { first } = require("cheerio/lib/api/traversing");
//const { AggregationCursor } = require("mongoose");
const bcrypt = require("bcrypt");
router.get("/boys", function () {});

// router.post("/item", itemCtrl.addItem);

router.get("/index/babyNames", function (req, res, next) {
  let txt = { name: "", about: "" };
  let pos = req.params.pos;

  Girl.findOne(
    {
      idx: req.query.pos,
    },
    function (err, subject) {
      axios
        .get(`https://www.babynames.com/name/${subject.name}}`)
        .then(function (response) {
          const $ = cheerio.load(response.data);
          let nameData = new NameData({
            sex: $(".namepageheader div a").first().text(),
            meaning: $(".stats p").text(),
            popularity: $(".nameitem").text(),
          });
          subject.sex = $(".namepageheader div a").first().text();
          subject.meaning = $(".stats p").text();
          subject.popularity = $(".nameitem").text().trim();
          subject.save();
          res.send(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  );
});

router.get("/find/:names", function (req, res, next) {
  let txt = { name: "", about: "" };
  let names = req.params.names;

  NameData.findOneAndUpdate({ name: names }, function (err, subject) {
    // if (subject.meaning != null) {
    //   axios
    //     .get(`https://www.babynames.com/name/${names}`)
    //     .then(function (response) {
    //       const $ = cheerio.load(response.data);
    //       questionMeaning = {
    //         name: names,
    //         about: $(".stats").children().first().text(),
    //       };
    //       let nameData = new NameData({
    //         name: names,
    //         sex: $(".namepageheader div a").first().text(),
    //         meaning: $(".stats div").first().text(),
    //         origin: $(".stats").children().eq(3).first().first().text(),
    //         popularity: $(".nameitem").text(),
    //       });
    //       nameData.save();
    //       console.log("HEll", $(".nameitem").text());
    //       txt = {
    //         name: names,
    //         about:
    //           $(".stats div").first().text() +
    //           $(".namepageheader div a").first().text(),
    //       };
    //       res.send(txt);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(function () {
    //       // always executed
    //     });
    // } else {
    //   res.status(200);
    // }
  });
});
router.get("/index/choice/boy", function (req, res, next) {
  let txt = { name: "", about: "" };
  let sendArray = [];

  let currentId = 0;

  Name.findOne({ id: 1 }, function (err, subject) {
    axios
      .get(`${process.env.BASE_URL}/api/index/` + subject.name)
      .then(function (response) {
        const $ = cheerio.load(response.data);
        res.status(200).send(response);
      })
      .catch(function (error) {
        // handle error
      });
  });
});
// router.get("/boynames", function (req, res, next) {

//   Name.find(
//     { id: { $gte: 1, $lte: 20 } },

//     function (err, n) {

//       // n.forEach(function(spec,id){

//       //   Name.find({likes:"Brian"},function(erak,liked){
//       //     console.log("asdsad",liked)
//       //   })
//       // })

//       res.send(n);
//     }
//   );
// });

router.get("/boynames", function (req, res, next) {
  User.findOne({email:"nick"},function(er,user){
    console.log(user.likes)
    let userLikes = user.likes
  Name.find(
   // { id: { $gte: 1, $lte: 100 } , name:{$nin: userLikes}},
    { id: { $gte: 1, $lte: 100 } , name:{$nin: userLikes}},

    function (err, n) {

 

      res.send(n);
    }
  );
})
});

router.get("/girlNames", function (req, res, next) {
  User.findOne({email:"nick"},function(er,user){
    console.log(user.likes)
    let userLikes = user.likes
  Girl.find(
   // { id: { $gte: 1, $lte: 100 } , name:{$nin: userLikes}},
    { idx: { $gte: 1, $lte: 100 } , name:{$nin: userLikes}},

    function (err, n) {

 

      res.send(n);
    }
  );
})
});
router.get("/updatePartner", function (req, res, next) {
  User.findOneAndUpdate(
    { googleID: req.query.user },
    { partner: req.query.partner },
    function (err, updated) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated");
      }
    }
  );
  res.send("hey");
});

router.get("/UpdateList", function (req, res, next) {
  if (req.query.choice === "like") {
    User.findOneAndUpdate(
      { email: req.query.userID },
      { $addToSet: { likes: req.query.name } },
      function (err, updated) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated", updated);
        }
      }
    );
  } else {
    User.findOneAndUpdate(
      { googleID: req.query.userID },
      { $push: { dislikes: req.query.name } },
      function (err, updated) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated");
        }
      }
    );
  }

  res.send("hey");
});
router.get("/boy/swipe", function (req, res, next) {
  User.find(
    { id: { $gte: req.params.id, $lte: req.params.id + 10 } },
    function (err, n) {
      res.send(n);
    }
  );
});
// router.get("/getNews", function (req, res, next) {
//   newsapi.v2
//     .topHeadlines({
//       q: "baby",
//       category: "general",
//       language: "en",
//     })
//     .then((response) => {
//       res.status(200).send(response);
//       /*
//       {
//         status: "ok",
//         articles: [...]
//       }
//     */
//     });
// });
router.post("/save", function (req, res, next) {
  res.send(req);
  // const name = new Name({
  //   name: req.body.name,
  //   id: req.body.name,
  //   sex: req.body.sex,
  // });
  // // this.state.maleNamePostion;
  // name.save()
});

router.get("/FetchUser", function (req, res, next) {
  let qry = req.query;
  let username = qry.username;
  let password = qry.password;
  let email = qry.email;

  User.findOne({ email: req.query.email }, function (err, user) {
    try {
      if (user != null) {
        console.log("user found");
       
        res.status(200).send(user);
      } else {
        console.log("user not found");

      }
    } catch (err) {
      console.log(err);
    }
  });
});
router.get("/desc/:input", function (req, res, next) {
  /*console.log(req.params.input);*/
  let nameInput = req.params.input;
  axios
    .get(`https://www.babynames.com/name/${nameInput}`)
    .then(function (response) {
      // handle success
      const $ = cheerio.load(response.data);
      const txt = $(".stats").children().first().text();
      res.send(txt);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

router.get("/matches", function (req, res, next) {
  /*console.log(req.params.input);*/

  let googleID = req.params.googleID;
  User.findOne({ googleID: req.query.googleID }, function (err, userLikes) {
    res.status(200).send(userLikes.likes);
  });
});

router.get("/partnerMatch", function (req, res, next) {
  /*console.log(req.params.input);*/

  let googleID = req.params.googleID;
  let matchArray1 = [];
  let matchArray2 = [];
  try {
    User.find({ partner: "test" }, function (err, userPartner) {
      if (userPartner.length > 1) {
        matchArray1.push(userPartner[0].likes);
        matchArray2.push(userPartner[1].likes);
        var matches = matchArray1[0].filter(function (v, i, a) {
          return matchArray2[0].indexOf(v) > -1;
        });

        res.status(200).send(matches);
      } else {
        let nothing = ["No Matches"];
        res.status(200).send(nothing);
      }
    });
  } catch (err) {
    res.status(200).send("Error- Partner Match Failed.", err);
  }
});

router.get("/delete", function (req, res, next) {
  let googleID = req.query.googleID;
  let nameIndex = req.query.nameIndex;
  User.findOne({ googleID: googleID }, function (err, userLikes) {
    // console.log(a)
    // userLikes.likes.splice(a,1)
    // userLikes.save()
    // res.status(200).send(userLikes.likes)
  });
});

router.post("/signup", function (req, res, next) {
  console.log(req.query);
  const saltRounds = 10;
  const pw = req.query.pw;
  let hashPw = "";
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(pw, salt, function (err, hash) {
      hashPw = hash;
      let newUser = new User({
        partner: "",
        positionBoy: 1,
        positionGirl: 1,
        backgroundChoice: "watercolor",
        likes: [""],
        dislikes: [""],
        email: req.query.user,
        password: hashPw,
      });

      newUser.save();
      res.status(200).send(true);
    });
  });
});

router.post("/login", function (req, res, next) {
  console.log("login api", req.query);
  User.findOne({ email: req.query.user }, function (err, user) {
    if (user != null) {
      let hash = user.password;
      let pw = req.query.pw;
      bcrypt.compare(pw, hash, function (err, result) {
        if (result) {
          res.status(200).send(user);
        } else {
          res.status(200).send(false);
        }
      });
    } else {
      res.status(200).send(false);
    }
  });
});
module.exports = router;
