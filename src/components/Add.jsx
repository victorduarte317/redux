import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props

    return (
        <Card title="Add" blue>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{(min + max)}</strong>
                </span>
            </div>
        </Card>
    )
}