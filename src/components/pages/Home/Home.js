import React from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css'
import { homeData } from './HomeData'

const Home = () => {
  const history = useHistory()
  return (
    <div className="main">
      <div className="block__2">
        <h1>Learn coding with Us</h1>
        <button className='home__button' onClick={() => history.push("/content")}>Get Started</button>
      </div>
      <div className="black__block">
        <div className='h1'>This website is developed By</div>
   
        <div className='homeData'>
          {homeData.map((el, idx) => {
            const {title,img, text} = el
            return (
              <div key={idx} className='main_homeData'>
          <div className='home__img'>
          <img src={img} alt=''/>
                </div>
                <div className='home__title'>{title}</div>
                <div className='home__text'>
                  {text}
              </div>
              </div>
            )
          })}
        </div>
        
      </div>
    </div>
  );
}

export default Home
