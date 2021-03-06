import React from 'react'
import { connect } from 'react-redux'

const noSelection = () => (
    <div>
        <div className='bike-icon'>
            <i className="fas fa-bicycle"></i>
        </div>
        <h5>Just select an ebike to get started</h5>
    </div> 
)

const MainImage = ({ selectedBike }) => {
    if (!selectedBike.img_url) return noSelection()
    return (
    <div className='main-image-container'>
        <img src={ selectedBike.img_url } 
            alt={selectedBike.name}/>
    </div>
)}

function mapStateToProps(state){
    return { selectedBike: state.selectedBike }
}

export default connect(mapStateToProps)(MainImage)