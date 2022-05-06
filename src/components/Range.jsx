import './css/Range.css'
import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props
    return (
        <Card title="Number Range" red>
            <div className="Range">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={min}
                        onChange={e => props.onMinChange(+e.target.value)} />
                </span>
                
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={max}
                        onChange={e => props.onMaxChange(+e.target.value)} 
                    />
                </span>
            </div>
        </Card>
    )
}