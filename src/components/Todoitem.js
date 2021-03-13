import React, { useState } from 'react'
import './style/todoitem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'
import { deleteTodo } from '../features/todoSlice'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Todoitem = ({ name, done, id }) => {
    const [deleteid, setdeleteid] = useState('')

    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id))
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
            <IconButton aria-label="delete">
                <DeleteIcon color="secondary"
                    onClick={handleDelete} />

            </IconButton>
        </div>
    )
}

export default Todoitem
