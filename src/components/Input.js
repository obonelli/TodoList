import React, { useState } from 'react'
import './style/input.css'

import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

const Input = () => {
    const [input, setinput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        console.log(`Adding ${input}`)

        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now(),
            status: 1
        }))
    }

    return (
        <div className="input">
            <input type="text" value={input} onChange={e => setinput(e.target.value)} />
            <button onClick={addTodo}>Add!</button>

        </div>
    )
}

export default Input
