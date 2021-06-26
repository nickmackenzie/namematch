const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
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
  console.log(pos);
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const list = [
    111, 121, 152, 164, 177, 218, 223, 236, 252, 273, 279, 305, 313, 341, 351,
    356, 364, 370, 381, 411, 450, 473, 483, 491, 500, 4, 42, 5, 1, 11, 26, 40,
    7, 46, 48, 50, 101, 58, 104, 80, 116, 106, 144, 117, 173, 128, 178, 145,
    248, 150, 259, 160, 283, 186, 284, 215, 291, 225, 304, 226, 306, 227, 307,
    239, 310, 249, 365, 251, 378, 258, 413, 265, 430, 285, 436, 452, 287, 453,
    326, 330, 480, 331, 339, 350, 387, 396, 405, 424, 443, 451, 466, 475, 43, 9,
    44, 24, 63, 65, 32, 83, 36, 96, 57, 171, 59, 202, 74, 247, 91, 264, 94, 107,
    321, 137, 332, 140, 349, 159, 168, 366, 229, 398, 403, 232, 409, 274, 410,
    276, 421, 301, 425, 315, 437, 317, 455, 319, 462, 322, 495, 338, 344, 352,
    369, 374, 377, 391, 392, 408, 414, 415, 419, 464, 478, 493, 499, 23, 38, 56,
    62, 75, 88, 103, 115, 141, 147, 151, 156, 179, 193, 198, 199, 208, 244, 281,
    334, 335, 337, 384, 394, 401, 404, 412, 428, 432, 454, 461, 465, 3, 15, 17,
    81, 82, 89, 114, 118, 129, 146, 166, 170, 214, 230, 255, 256, 275, 288, 297,
    314, 316, 325, 354, 355, 360, 389, 406, 423, 426, 445, 457, 460, 471, 485,
    494, 14, 28, 25, 29, 66, 70, 77, 95, 126, 157, 205, 217, 231, 237, 242, 246,
    254, 263, 298, 299, 300, 340, 342, 393, 422, 435, 438, 444, 477, 481, 489,
    496, 12, 31, 55, 71, 85, 133, 142, 148, 153, 155, 174, 190, 196, 204, 212,
    221, 257, 261, 282, 289, 292, 303, 309, 346, 358, 372, 386, 417, 433, 447,
    456, 468, 492, 52, 54, 61, 67, 105, 110, 135, 136, 138, 143, 154, 165, 167,
    169, 181, 184, 185, 210, 219, 250, 290, 293, 296, 308, 311, 343, 347, 348,
    361, 367, 373, 385, 388, 397, 418, 431, 440, 449, 458, 490, 6, 16, 20, 27,
    93, 163, 172, 180, 183, 194, 222, 238, 260, 266, 286, 294, 320, 382, 400,
    446, 482, 484, 497, 33, 53, 68, 84, 90, 99, 109, 162, 188, 189, 192, 195,
    200, 206, 207, 211, 213, 240, 280, 345, 363, 376, 463, 472, 488, 10, 13, 60,
    64, 79, 86, 92, 112, 119, 122, 149, 176, 216, 233, 262, 267, 271, 277, 327,
    357, 379, 390, 395, 427, 442, 448, 474, 479, 509, 535, 505, 517, 520, 597,
    601, 606, 637, 638, 647, 653, 662, 666, 680, 698, 734, 744, 768, 773, 806,
    807, 812, 854, 922, 935, 943, 951, 966, 977, 538, 553, 561, 612, 621, 651,
    664, 688, 691, 700, 709, 728, 729, 730, 758, 765, 786, 796, 811, 819, 861,
    898, 904, 931, 958, 964, 965, 978, 986, 507, 514, 525, 576, 588, 635, 650,
    667, 670, 682, 712, 752, 756, 757, 764, 775, 779, 794, 809, 823, 842, 874,
    877, 910, 928, 937, 954, 967, 982, 990, 991, 994, 522, 502, 526, 530, 539,
    581, 591, 607, 620, 645, 665, 668, 703, 727, 771, 778, 795, 800, 827, 828,
    855, 859, 868, 870, 881, 883, 929, 968, 974, 533, 513, 518, 521, 550, 563,
    572, 580, 602, 671, 675, 708, 710, 713, 738, 739, 777, 781, 783, 787, 802,
    834, 839, 853, 876, 885, 894, 917, 947, 960, 969, 997, 999, 1000, 501, 552,
    585, 593, 603, 626, 641, 649, 658, 660, 663, 679, 699, 747, 760, 762, 790,
    804, 826, 830, 849, 857, 865, 871, 873, 878, 879, 886, 903, 956, 541, 554,
    562, 598, 599, 634, 659, 661, 684, 685, 686, 690, 702, 735, 748, 817, 860,
    869, 893, 912, 915, 946, 948, 972, 975, 984, 989, 998, 510, 529, 544, 590,
    615, 617, 629, 677, 681, 706, 721, 736, 749, 755, 820, 833, 835, 845, 846,
    889, 907, 914, 933, 942, 944, 950, 987, 996, 534, 548, 551, 555, 559, 564,
    565, 574, 605, 624, 631, 640, 643, 646, 673, 678, 692, 697, 719, 732, 733,
    743, 791, 798, 822, 847, 848, 850, 858, 867, 938, 949, 953, 985, 545, 504,
    512, 549, 569, 571, 592, 619, 622, 656, 701, 722, 745, 754, 763, 788, 789,
    797, 810, 821, 825, 837, 896, 897, 899, 905, 906, 918, 926, 976, 508, 523,
    524, 532, 536, 604, 632, 644, 693, 705, 717, 750, 751, 759, 761, 767, 772,
    785, 813, 815, 863, 872, 891, 909, 919, 927, 963, 981, 531, 537, 547, 568,
    570, 573, 586, 618, 633, 639, 642, 689, 704, 714, 718, 737, 741, 746, 766,
    793, 866, 890, 892, 900, 901, 923, 934, 941, 980, 983, 993, 506, 577, 579,
    582, 583, 596, 630, 648, 655, 672, 683, 724, 725, 770, 782, 803, 816, 818,
    829, 836, 840, 843, 884, 921, 925, 940, 952, 992, 519, 503, 540, 558, 566,
    578, 594, 600, 609, 611, 613, 614, 636, 654, 687, 694, 711, 720, 726, 740,
    774, 780, 784, 824, 864, 875, 882, 888, 924, 939, 970, 971, 979, 995, 516,
    528, 542, 546, 557, 567, 575, 608, 610, 669, 676, 695, 696, 707, 715, 716,
    723, 742, 753, 769, 776, 792, 801, 831, 832, 838, 852, 880, 895, 902, 916,
    930, 932, 945, 955, 957, 959, 962, 511, 515, 527, 543, 556, 560, 584, 587,
    589, 595, 616, 623, 625, 627, 628, 652, 657, 674, 731, 799, 805, 808, 814,
    841, 844, 851, 856, 862, 887, 908, 911, 913, 920, 936, 961, 973, 988, 1049,
    1083, 1002, 1065, 1084, 1090, 1110, 1167, 1168, 1215, 1231, 1249, 1289,
    1293, 1334, 1339, 1341, 1345, 1346, 1351, 1365, 1376, 1400, 1436, 1438,
    1451, 1475, 1498, 1016, 1113, 1145, 1020,
  ];
  const doSomething = async () => {
    for (const item of list) {
      await sleep(100);
      console.log("🦄");
      Girl.findOne(
        {
          idx: item,
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
    }
  };

  doSomething();
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
  User.findOne({ email: "nick" }, function (er, user) {
    console.log(user.likes);
    let userLikes = user.likes;
    Name.find(
      // { id: { $gte: 1, $lte: 100 } , name:{$nin: userLikes}},
      { id: { $gte: 1, $lte: 100 }, name: { $nin: userLikes } },

      function (err, n) {
        res.send(n);
      }
    );
  });
});

router.get("/girlNames", function (req, res, next) {
  User.findOne({ email: "nick" }, function (er, user) {
    console.log(user.likes);
    let userLikes = user.likes;
    Girl.find(
      // { id: { $gte: 1, $lte: 100 } , name:{$nin: userLikes}},
      { idx: { $gte: 1, $lte: 100 }, name: { $nin: userLikes } },

      function (err, n) {
        res.send(n);
      }
    );
  });
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

  let googleID = req.params.email;
  User.findOne({ email: req.query.googleID }, function (err, userLikes) {
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
      console.log(userPartner);
      if (userPartner.length > 1) {
        console.log(true);
        matchArray1.push(userPartner[0].likes);
        matchArray2.push(userPartner[1].likes);
        console.log(matchArray1, matchArray2);
        var matches = matchArray1[0].filter(function (v, i, a) {
          return matchArray2[0].indexOf(v) > -1;
        });
        console.log("matches", matches);
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
