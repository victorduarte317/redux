import './css/Range.css'
import React from 'react'
import Card from './Card'

export default props => {
    return (
        <Card title="Number Range" red>
            <div className="Range">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value='01' readOnly/>
                </span>
                
                <span>
                    <strong>Max:</strong>
                    <input type="number" value="02" readOnly/>
                </span>
            </div>
        </Card>
    )
}