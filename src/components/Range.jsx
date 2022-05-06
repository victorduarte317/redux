import './css/Range.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { changeMaxNumber, changeMinNumber } from '../store/actions/numbers';


function Range(props) {
    const { min, max } = props

    return (
        <Card title="Number Range" red>
            <div className="Range">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={min} 
                        onChange={e => props.changeMin(+e.target.value)}
                        
                    />
                </span>
                
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={max}
                        onChange={e => props.changeMax(+e.target.value)} />
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

function mapDispatchToProps(dispatch) {
    return {
        changeMin(newNumber){
            // action creator
            const action = changeMinNumber(newNumber)
            dispatch(action);
        },

        changeMax(newNumber){
            const action = changeMaxNumber(newNumber)
            dispatch(action);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Range)