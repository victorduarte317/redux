import './css/Range.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

function Range(props) {

    const { min, max } = props
    return (
        <Card title="Number Range" red>
            <div className="Range">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={min} 
                        
                    />
                </span>
                
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={max} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProps)(Range)