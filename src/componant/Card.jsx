import React from "react";
import "./Card.css";

import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsChatLeftHeart } from "react-icons/bs";

const Card = () => {
  const Details = [
    {
      Min_img: "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
      Name: "Black Panther",
      Year: "2017",
      Hero: "David Ayer",
      Duration: "117 min",
      Types: "Action,Crice,Fantasy",
      Para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, molestiae. Magnam aspernatur quidem minima iusto ipsam, error atque soluta quaerat.Magnam aspernatur quidem minima iusto ipsam, error atque soluta quaerat.",
      Background_img:
        "https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg",
    },
    {
      Min_img: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
      Name: "Black Panther",
      Year: "2017",
      Hero: "David Ayer",
      Duration: "117 min",
      Types: "Action,Crice,Fantasy",
      Para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, molestiae. Magnam aspernatur quidem minima iusto ipsam, error atque soluta quaerat.Magnam aspernatur quidem minima iusto ipsam, error atque soluta quaerat.",
      Background_img:
        "https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png",
    },
  ];
  return (
    <div className="container">
      <div className="all_card">
        {Details.map((ele, index) => {
          return (
            <div className="divv" key={index}>
              <img src={ele.Background_img} alt="panther_img" />
            <div className="card" >
              
              <div className="left_side">
                <div className="upper_side">
                  <img src={ele.Min_img} alt="small_img" />
                  <div className="inner_info">
                    <h1>{ele.Name}</h1>
                    <span className="time_sec">
                      {ele.Year},{ele.Hero}
                    </span>
                    <p >
                      <span className="time_span">{ele.Duration}</span> <span>{ele.Types}</span>
                    </p>
                  </div>
                </div>
                <div className="down_sec">
                  <p>{ele.Para}</p>

                  <div className="icons">
                    <span><FaShareAlt /></span>
                    <span><FaRegHeart /></span>
                    <span><BsChatLeftHeart /></span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
