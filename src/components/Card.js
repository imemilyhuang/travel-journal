import React from "react"

export default function Card(props) {
    return (
        <section>
            <img src={`../images/${props.item.img}`} className="snapshots" />
            <div className="card-text">
                <div className="location-info">
                    <img src="../images/pin-icon.png" className="pin-icon" />
                    <p className="country-format">
                        {props.item.location}
                    </p>
                    <a href={props.item.googleMapsUrl} 
                        className="map-link-format">
                        View on Google Maps
                    </a>
                </div>
                <div>
                    <h1>{props.item.title}</h1>
                    <p className="date-format">{props.item.date}</p>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </section>
    )
}