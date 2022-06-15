import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cardData = data.map(item => {
      return (
        <Card
          key={item.id}
          item={item}
        />
      )
  })
    return (
      <div>
        <Navbar />
        <div className="cards">
          {cardData}
        </div>
        <p className="footer">Created by Emily Huang 2022. Images from Unsplash.</p>
      </div>
    )
  }
