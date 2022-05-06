import React from 'react'
import Card from './Card'

export default props => {
    const min = props.min 
    const max = props.max 

    return (
        <Card title="Arithmetic Average" purple>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}