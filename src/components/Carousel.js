import React, { Component } from "react";
import ReactDom from "react-dom";
import M from "materialize-css";
import List from "../database/Data";

class Slider extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, {
        indicators: true,
        padding: 5
      });
    });
  }

  render() {
    return (
      <div class="carousel carousel-slider">
        {List.map((list) => {
          return (
            <a className="carousel-item" href={list.id}>
              <img src={list.img} alt="carousel" />
              <div className="carousel-fixed-item center teal lighten-2">
                <p className="flow-text blue-text text-lighten-5">
                  {list.name}
                </p>
                <p className="flow-text blue-text text-lighten-5">
                  {list.timeWork}
                </p>
              </div>
            </a>
          );
        })}
        {/* <a class="carousel-item" href="#one!">
          <img src="https://cdn1.fullpicture.ru/wp-content/uploads/2015/01/10-neobyknovennyh-mest-na-Zemle-7.jpg" />
          <div class="carousel-fixed-item center">
            <p>Hello</p>
          </div>
        </a>
        <a class="carousel-item" href="#two!">
          <img src="https://1.bp.blogspot.com/-jQcTSJiYNXY/WoaDqK1gZrI/AAAAAAAAAs4/LrTU9IaHClkdsz05TB_pe4eWSx6qTmjCgCLcBGAs/s1600/new6179-1140x800.jpg" />
        </a>
        <a class="carousel-item" href="#three!">
          <img src="https://pbs.twimg.com/media/D2KxjyaXQAE2_jg.jpg:large" />
        </a>
        <a class="carousel-item" href="#four!">
          <img src="http://www.build2last.ru/images_page/1560/podzemnye-carstva-i-udivitelnye-peschery-mira-free.jpg" />
        </a>
        <a class="carousel-item" href="#five!">
          <img src="https://uenews.ru/uploads/posts/2019-05/15579259962121.jpeg" />
        </a> */}
      </div>
    );
  }
}

export default Slider;
