import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portfolioData from '../../data/portfolio.json'
// import { clear } from '@testing-library/user-event/dist/clear'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate-hover')
  console.log(portfolioData)

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 3000)
  //     return () => {
  //       clearTimeout(timer)
  //     }
  //   })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  //   const nameArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i ', 'o']
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            strArray={'Portfolio'.split('')}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Portfolio
