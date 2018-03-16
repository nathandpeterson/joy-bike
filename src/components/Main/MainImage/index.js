import React from 'react'
import { connect } from 'react-redux'

const MainImage = ({ selectedBike }) => {
    if (!selectedBike.img_url) return <h5>Just pick an ebike to get started</h5>
    return (
    <div className='main-image-container'>
        <img src={ selectedBike.img_url } 
            alt={selectedBike.title}/>
    </div>
)}

function mapStateToProps(state){
    return { selectedBike: state.selectedBike }
}

export default connect(mapStateToProps)(MainImage)