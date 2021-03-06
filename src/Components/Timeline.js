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
import { Box } from "@chakra-ui/react";
import { getLikes } from "../helpers/matchHelper";
import { compareAsc, format } from "date-fns";
import { ImHeart, ImHeartBroken } from "react-icons/im";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "#2E3C43",
    padding: "5px",
    margin: "5px",

    padding: ".1rem",
    fontSize: ".9rem",
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
        date={`${format(
          new Date(like.dateCreated),
          "EE MMM do yyyy '@' h:mm a"
        )}`}
        text={like.name}
      />
    ));
  }
  return (
    <Box>
      <Timeline theme={customTheme}>
        <Events>{renderTable()}</Events>
      </Timeline>
    </Box>
  );
}
