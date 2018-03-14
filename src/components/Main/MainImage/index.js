import React from 'react'

const MainImage = ({ img }) => {
    return(
    <div className='main-image-container'>
        <img src={ img } 
            alt='Black Bicycle'/>
    </div>
)}

export default MainImage