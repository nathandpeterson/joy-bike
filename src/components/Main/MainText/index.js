import React from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'

const MainText = ({ selectedBike }) => {
    if(!selectedBike.title) return <div />
    const { brand, title, price_num, price_unit } = selectedBike
    return (
        <div className='main-text'>
            <Panel>
                <p>{brand}</p> 
                <p>{title}</p>
                <p>{price_num} {price_unit}</p>
            </Panel>
        </div>
    )
}

function mapStateToProps(state){
    return { selectedBike: state.selectedBike }
}

export default connect(mapStateToProps)(MainText)