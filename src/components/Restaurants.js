import React from "react";
import ReactDom from "react-dom";
import Data from "../database/Data";

function Restaurants() {
  return (
    <div className="col s12 m9">
      {/* <h4 className="flow-text text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        accusamus eius itaque! Error consequuntur labore pariatur maxime, ex
        voluptatem voluptatum nesciunt omnis expedita iste ipsam at aliquid
        eveniet nam aliquam. Temporibus voluptates consectetur recusandae
        ducimus atque corrupti, dolor voluptate sequi doloribus possimus
        officiis dicta dolores tempora totam asperiores animi adipisci, rerum
        nesciunt esse? Nisi vitae et culpa, rem in obcaecati? Esse numquam velit
        quia laudantium reiciendis totam accusantium commodi quos, voluptatem id
        quasi odio magnam nemo sit cupiditate deserunt, itaque neque tempore,
        possimus exercitationem quidem voluptas iste? Dolorum, excepturi saepe?
        Explicabo, quis numquam? Nulla odio maxime earum modi provident eaque,
        ducimus quos officia necessitatibus! Tenetur aliquam molestiae, magni
        porro nihil dolorum excepturi voluptas vero voluptatibus assumenda
        voluptatum fugit sit obcaecati.numquam? Nulla odio maxime earum modi
        provident eaque, ducimus quos officia necessitatibus! Tenetur aliquam
        molestiae, magni porro nihil dolorum excepturi voluptas vero
        voluptatibus assumenda voluptatum fugit sit obcaecati.
      </h4> */}
      <div className="row">
        {Data.map((data) => {
          return (
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src={data.img} />
                  <span className="card-title">{data.name}</span>
                </div>
                <div className="card-content">
                  <p>Время работы: {data.timeWork}</p>
                  <p>Адрес: {data.address}</p>
                  <p>Категории: {data.category + ","}</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Restaurants;
