import React from "react";
import Carousel from "../components/Carousel";
import Request from "../request/Request";
import Row from "../components/Row";

const Home = () => {
  const { requests } = Request;

  return (
    <main>
      <Carousel url={requests.requestNowPlaying} />
      <Row rowID="1" title="Trending" url={requests.requestTrending} route="trending"/>
      <Row rowID="2" title="Popular" url={requests.requestPopular} route="populer"/>
      <Row rowID="3" title="Now Playing" url={requests.requestNowPlaying} route="nowplaying"/>
      <Row rowID="4" title="Up Coming" url={requests.requestUpcoming} route="upcoming"/>
    </main>
  );
};

export default Home;
