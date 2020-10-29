import React from "react";
import ReactDom from "react-dom";

function Sidebar() {
  return (
    <div className="col s12 m3">
      <div className="input-field inline">
        <input type="text" name="search" id="searchSideBar" />
        <label htmlFor="search">Поиск по заведению</label>
      </div>
      <div className="card-panel teal lighten-5">
        <p className="teal-text">Сортировать по</p>
        <ul>
          <li>Новые</li>
          <li>Рейтинг</li>
          <li>Алфавиту</li>
        </ul>
      </div>
      <div className="card-panel teal lighten-5">
        <p className="teal-text">Кухня</p>
        <ul>
          <li>Кофе & чай</li>
          <li>Пиво</li>
          <li>Сидр</li>
          <li>Тосты</li>
          <li>Эклеры</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
