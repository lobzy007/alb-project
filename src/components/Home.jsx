import React from "react";
import Showcase from "./Showcase";
import Haqimizda from "./Haqimizda";
import Dedicated from "./Hamjamiyat";
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
