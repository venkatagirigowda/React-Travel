import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

const List = ({ datas }) => {
  const [type, setType] = useState("restaurants");
  return (
    <>
      <div className="list">
      <div className="selector">
          <form className="form">
            <label>Type: </label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
          </form>
        </div>
        {datas.map((elem) => {
          console.log(elem.name);

          return (
            <div className="listmain">
              <div className="listheading">
                <img src={elem.photo ? elem.photo.images.large.url : null} />
                <h2>{elem.name}</h2>
              </div>
              <div className="listbody">
                {elem.ranking ? (
                  <div className="ranking">
                    <h4>Ranking:</h4>
                    <h5>{elem.ranking}</h5>
                  </div>
                ) : null}

                {elem?.awards?.map((award) => {
                  <div>
                    <img src={award.images.small} alt={award.display_name} />
                    <h5>{award.display_name}</h5>
                  </div>;
                })}
                {elem?.cuisine?.map((ele) => {
                  return (
                    <div className="chip">
                      <h4>{ele.name}</h4>
                    </div>
                  );
                })}

                {elem?.address && (
                  <div className="address">
                    <FontAwesomeIcon
                      className="iconlist"
                      icon={faLocationPin}
                    />
                    <h5>{elem.address}</h5>
                  </div>
                )}
                {elem?.phone && (
                  <div className="phone">
                    <FontAwesomeIcon className="iconlist" icon={faPhone} />
                    <h5>{elem.phone}</h5>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
