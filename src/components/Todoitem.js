import React from 'react'
import './style/todoitem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'

const Todoitem = ({ name, done, id }) => {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className="todoItem">

            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}

            />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    )
}

export default Todoitem
