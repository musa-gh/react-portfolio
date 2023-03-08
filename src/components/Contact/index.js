import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
  const refForm = useRef()

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 4000)
  //   }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'service_5na2eag',
        refForm.current,
        'RDZrn73WlCS97Pkh7MIkF'
      )
      .then(
        () => {
          alert('Message successfully send!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message,please try again. ')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <p>
            Working with creative thinkers like you has always excited me. I am
            here to customize your needs in the most appropriate way.
          </p>
          <p>
            Please feel free to contact me for anything you want to ask. -- For
            this, you can fill out the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="emaşl"
                    placeholder="Enter Your Mail"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Tastan Musa,
          <br />
          Turkiye
          <br />
          Kasyeri / Talas 38280 <br />
          Ankara / Etlik
          <br />
          <span>musatastan1@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Tastan lives here,come over for a cup of coffee :D</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
