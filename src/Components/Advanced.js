import React, { useState, useMemo, useEffect } from "react";
// import TinderCard from '../react-tinder-card/index'
import axios from "axios";
import { getList } from "../helpers/getNameData";
import TinderCard from "react-tinder-card";
import { ImHeart, ImHeartBroken } from "react-icons/im";
import "./card.css";
const db = [
  {
    name: "Richard Hendricks",
    url: "./img/richard.jpg",
  },
  {
    name: "Erlich Bachman",
    url: "./img/erlich.jpg",
  },
  {
    name: "Monica Hall",
    url: "./img/monica.jpg",
  },
  {
    name: "Jared Dunn",
    url: "./img/jared.jpg",
  },
  {
    name: "Dinesh Chugtai",
    url: "./img/dinesh.jpg",
  },
];

const alreadyRemoved = [];
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Advanced() {
  const [lastDirection, setLastDirection] = useState();

  const [list, setList] = useState([]);
  const [loader, setLoader] = useState("loading");
  const characters = list;

  let mounted = false;
  useEffect(() => {
    mounted = true;

    getList().then((items) => {
      if (mounted) {
        setList(items);
        setLoader("done");
      }
    });

    return () => (mounted = false);
  }, []);

  function likeOrDislike(choice) {
    const userID = localStorage.getItem("email");
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(choice); // Swipe the card!
    }
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/UpdateList/`, {
      params: {
        choice: choice.currentTarget.id,
        name: choice.currentTarget.dataset.name,
        userID: userID,
      },
    });
  }

  const childRefs = useMemo(
    () =>
      Array(db.length)
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
    setList(list);
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />

      {characters.map((character, index) => (
        <TinderCard
          ref={childRefs[index]}
          className="swipe m-2 "
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name)}
          onCardLeftScreen={() => outOfFrame(character.name)}
        >
          <div className="card   bg-base-100 h-1/3">
            <div class="card-body ">
              <h2 class="card-title text-primary text-4xl">{character.name}</h2>

              <p>{character.meaning}</p>
              <p></p>
              <div className="card-actions">
                <button
                  class="btn btn-outline btn-secondary btn-circle btn-lg hover:bg-secondary"
                  id="like"
                  data-name={character.name}
                  onClick={likeOrDislike}
                >
                  <ImHeart size={48} />
                </button>
                <button
                  class="btn btn-outline btn-error btn-circle btn-lg"
                  id="dislike"
                  data-name={character.name}
                  onClick={likeOrDislike}
                >
                  <ImHeartBroken size={48}></ImHeartBroken>
                </button>
              </div>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default Advanced;
