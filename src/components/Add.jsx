import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

    function Add(props) {
    const { min, max } = props

    return (
        <Card title="Add" blue>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{ min + max }</strong>
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

export default connect(mapStateToProps)(Add)
