import React, { useState, useMemo, useEffect } from "react";
// import TinderCard from '../react-tinder-card/index'
import axios from "axios";
import { getList } from "../helpers/getNameData";
import TinderCard from "react-tinder-card";
import { ImHeart, ImHeartBroken } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";
import "./card.css";

const alertDownload = () => {
  toast.success("Latest Names", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};
const alertLike = () => {
  toast.success("Liked", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};
const alertError = () => {
  toast.error("Error", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};
const alreadyRemoved = [];

function Advanced() {
  const [lastDirection, setLastDirection] = useState();
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState("loading");
  let [currentName, setCurrentName] = useState();

  const names = list;
  let charactersState = list;
  const [swiper, setSwiper] = useState(null);
  let mounted = false;
  useEffect(() => {
    mounted = true;

    getList().then((items) => {
      if (mounted) {
        setList(items);
        setLoader("done");
        alertDownload();
      }
    });

    return () => (mounted = false);
  }, []);

  const childRefs = useMemo(
    () =>
      Array(names.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setList(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = names.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = names.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
    if (direction === "left") {
      console.log("Sending Like Ajax");
      const userID = localStorage.getItem("email");
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/api/UpdateList/`, {
          params: {
            choice: "like",
            name: direction.currentTarget.id,
            userID: userID,
          },
        })
        .then(function (response) {
          console.log("response", response);

          alertLike();
          return response;
        })
        .catch(function (error) {
          console.log(error);
          alertError();
        });
    } else {
      console.log("nope");
    }
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <Toaster></Toaster>

      <div className="cardContainer mx-auto">
        {names.map((character, index) => (
          <TinderCard
            className="swipe"
            key={character.name}
            preventSwipe={["up", "down"]}
            onSwipe={onSwipe}
            id={character.name}
          >
            <div className="card cardTinder shadow-sm bg-base-100">
              <div class="card-body ">
                <h2 class="card-title text-primary text-4xl">
                  {character.name}
                </h2>

                <p>{character.meaning}</p>
                <p></p>
                <div className="card-actions">
                  <button
                    class="btn btn-outline btn-secondary btn-circle btn-lg hover:bg-secondary"
                    id="like"
                    data-name={character.name}
                  >
                    <ImHeart size={48} />
                  </button>
                  <button
                    class="btn btn-outline btn-error btn-circle btn-lg"
                    id="dislike"
                    data-name={character.name}
                  >
                    {" "}
                    <ImHeartBroken size={48}></ImHeartBroken>
                  </button>
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button className="btn btn-primary m-2" onClick={() => swipe("left")}>
          Swipe left!
        </button>
        <button className="btn btn-primary m-2" onClick={() => swipe("right")}>
          Swipe right!
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card left to like it or right to disk
        </h2>
      )}
    </div>
  );
}

export default Advanced;
