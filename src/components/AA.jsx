import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

function Arithmetic(props) {
    const { min, max } = props
    return (
        <Card title="Arithmetic Average" purple>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    );
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProps)(Arithmetic)