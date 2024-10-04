import React, { useState } from 'react'

const Counter2 = () => {
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        setNumber(number + 2)
    }

    const onDecrease = () => {
        setNumber(number - 2)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>2증가</button>
            <button onClick={onDecrease}>2감소</button>
        </div>
    )
}

export default Counter2
