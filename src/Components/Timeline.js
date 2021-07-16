import React, { useState, useEffect } from "react";
import {
  Timeline,
  Events,
  themes,
  createTheme,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from "@merc/react-timeline";
import { getLikes } from "../helpers/matchHelper";
import { compareAsc, format } from "date-fns";
import { ImHeart, ImHeartBroken } from "react-icons/im";
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "#2E3C43",

    padding: ".2rem",
    fontSize: "rem",
  },
  marker: {
    borderColor: "#2E3C43",
    fontSize: "1.4rem",
  },
  timelineTrack: {
    backgroundColor: "#2E3C43",
    fontSize: "1.4rem",
  },
  textAtom: {
    fontSize: "1.4rem",
  },
});
export default function App() {
  const [likes, setLikes] = useState([]);
  const [matches, setMatches] = useState([]);
  const [delIndex, setDelIndex] = useState([]);

  let needsUpdated = true;
  let letPass = true;

  // const deleteName = (input, id) => {

  //   //input.target.id
  //   setDelIndex(id.like);
  //   delName(delIndex).then((items) => {

  //     //  setLikes(items);
  //   });
  // };
  const MyCustomMarker = () => <span>❤️️</span>;
  useEffect(() => {
    const nameData = localStorage.getItem("email");

    if (letPass) {
      getLikes(nameData).then((likesData) => {
        setLikes(likesData.data);
        console.log("matches", likes[0]);
      });

      letPass = false;
    }
  }, []);

  function renderTable() {
    return likes.map((like, i) => (
      <TextEvent
        date={`Liked on: ${format(
          new Date(like.dateCreated),
          "EEEE MMM do yyyy"
        )}`}
        text={like.name}
        marker={MyCustomMarker}
      />
    ));
  }
  return (
    <div>
      <Timeline theme={customTheme}>
        <Events>{renderTable()}</Events>
      </Timeline>
    </div>
  );
}
