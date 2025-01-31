import React from 'react'
import 

const HomeButtons = () => {
    return (
      <>
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter width="3000%" x="-1000%" height="3000%" y="-1000%" id="unopaq">
            <feColorMatrix
              values="1 0 0 0 0 
                      0 1 0 0 0 
                      0 0 1 0 0 
                      0 0 0 3 0"
            />
          </filter>
        </svg>
        
        <div className="backdrop"></div>
        <button className="button">
          <div className="a l"></div>
          <div className="a r"></div>
          <div className="a t"></div>
          <div className="a b"></div>
          <div className="text">Button 1</div>
        </button>
        <button className="button">
          <div className="a l"></div>
          <div className="a r"></div>
          <div className="a t"></div>
          <div className="a b"></div>
          <div className="text">Button 2</div>
        </button>
        <button className="button">
          <div className="a l"></div>
          <div className="a r"></div>
          <div className="a t"></div>
          <div className="a b"></div>
          <div className="text">Button 3</div>
        </button>
      </>
    );
  };
  
  export default HomeButtons;
  
