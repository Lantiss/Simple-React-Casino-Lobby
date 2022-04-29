import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="krb_header section__padding" id="home">
    <div className="krb_header-content">
      <h1 className="gradient__text">Play to Win</h1>
      <p>
        We make our mission to be the very best online casino out there. Our
        fun, and modern mobile adaptive site features hundreds of thrilling
        games from tons of categories including slots, jackpots, table games,
        video poker and even live casino.
      </p>


      <div className="krb_header-content__people">
        <img src={people} alt="People" />
        <p>1,600 people Online</p>
      </div>
    </div>

    <div className="krb_header-image">
      <img src={ai} alt="casino" />
    </div>
  </div>
);

export default Header;
