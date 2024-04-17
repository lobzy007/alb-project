import React from "react";
import Showcase from "./Showcase";
import Responsive from "./EG";
import Haqimizda from "./Haqimizda";
import Dedicated from "./Hamjamiyat";
import Weworkslider from "./Team";
import { Teachers } from "./BigTeam";
import FAQ from "./FAQ";
import TeamPhoto from "./TeamPhoto";
import Manage from "./Toggler";
import Join from "./Join";
import YoutubeModal from "./YoutubeModal";

const Home = () => {
  return (
    <div>
      <Showcase />
      {/* <Responsive /> */}
      <Haqimizda />
      <Dedicated />
      <Teachers />
      <TeamPhoto />
      <Manage />
      <FAQ />
      <Join />
      <YoutubeModal />
    </div>
  );
};

export default Home;
