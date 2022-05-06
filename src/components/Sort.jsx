import React from 'react'
import Card from './Card'
import { connect } from 'react-redux';

function Sort(props) {

    const{ min, max } = props
    const random = parseInt(Math.random() * (max - min)) +  min

    return (
        <Card title="Number Sort" green>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{random} </strong>
                </span>
            </div>
        </Card>
    )
}



function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Sort)