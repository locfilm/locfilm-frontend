import React, { useState } from "react"
import { Link } from "react-router-dom"

import "../assets/styles/components/Details.scss"
import BasecampIcon from "../assets/static/i_camp.png"
import DressRoomIcon from "../assets/static/i_dress.png"
import ParkingIcon from "../assets/static/i_parking.png"
import WC from "../assets/static/i_bath.png"
import LivingRoom from "../assets/static/i_livingroom.png"

const DetailsMain = ({ location }) => {
  return (
    <main className="Container">
      <figure className="Container__cover">
        <img src={location.main_image} alt="no images available" />
      </figure>
      <section className="Container__info">
        <div className="Container__about">
          <h2>{location.name}</h2>
          <p>
            Direccion: {location.address}, Ciudad:{location.city}
          </p>
        </div>
        <div className="Container__services">
          <h2>Description</h2>
          <p>{location.description}</p>
          <div className="Container__services--icons">
            {location.has_cattering ? (
              <figure>
                <img src={BasecampIcon} alt="Icon Basecamp" />
                <p>Basecamp area</p>
              </figure>
            ) : null}
            {location.has_dressing_room ? (
              <figure>
                <img src={DressRoomIcon} alt="Icon Dressing Room" />
                <p>Dressing rooms</p>
              </figure>
            ) : null}
            {location.hasParking ? (
              <figure>
                <img src={ParkingIcon} alt="Icon Parking" />
                <p>Parking</p>
              </figure>
            ) : null}
            {location.has_bathroom ? (
              <figure>
                <img src={WC} alt="Icon W.C." />
                <p>W.C.</p>
              </figure>
            ) : null}
            <figure>
              <img src={LivingRoom} alt="Icon Living Room" />
              <p>Living Room</p>
            </figure>
          </div>
          <div className="Container__datesAndSlider__dates--choose--btnSend-a">
            <div href="#" className="Container__datesAndSlider__dates--btn-a">
              <Link to={`/checkout/${location.id}`}>
                Make your reservation{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="Container__datesAndSlider">
        <div className="Container__datesAndSlider__slider">
          <input type="radio" id="1" name="image-slide" hidden />
          <input type="radio" id="2" name="image-slide" hidden />
          <input type="radio" id="3" name="image-slide" hidden />
          <div className="slide">
            <div className="item-slide">
              <img
                src={location.main_image}
                alt={location.description}
                height="400"
                width="400"
              />
            </div>
            {location.images
              ? location.images.map((image, index) => {
                  return (
                    <div key={index} className="item-slide">
                      <img
                        src={image.image_url}
                        alt={image.description}
                        height="400"
                        width="400"
                      />
                    </div>
                  )
                })
              : null}
          </div>
          <div className="pagination">
            <label className="pagination-item" htmlFor="1">
              <img src="" alt="no images available" />
            </label>
            <label className="pagination-item" htmlFor="2">
              <img src="" alt="no images available" />
            </label>
            <label className="pagination-item" htmlFor="3">
              <img src="" alt="no images available" />
            </label>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DetailsMain
