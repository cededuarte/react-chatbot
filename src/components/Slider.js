import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export default function Slider() {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <img
          src="https://seekvectorlogo.com/wp-content/uploads/2018/01/legalmatch-vector-logo-small.png"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Welcome to LegalMatch Chatbot</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://img.freepik.com/free-vector/chatbot-head-set_74855-6293.jpg?w=900&t=st=1675705061~exp=1675705661~hmac=0b1c543b5f2c29a16bc9cd0a37f7583998e65f551537648e8486b0753817c78f"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Lets Explore chatbot</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397190452/294f1ccdce71d7998c69a79fcb904cca.gif"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Have Great Day !</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
