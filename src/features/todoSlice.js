import { createSlice } from '@reduxjs/toolkit'

//Examples
// const [todoList, setTodoList] = useState([])
// setTodoList(action)

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },

        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (item.done === true) {
                        item.done = false
                    } else {
                        item.done = true
                    }
                }
            })
        },
        deleteTodo: (state, action) => {
            //return state.todoList.filter((elm) => elm.item !== action.payload.item)
            //return state.todoList.filter(element => element !== action.payload);
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (item.done === true) {
                        return item.item = [];
                        //return state.todoList(action.payload.item) = [];
                        //return state.todoList;
                        //return state.todoList = []
                        //return state.todoList.slice(item.id)
                        // return state.todoList.filter((elm) => elm !== action.payload)
                        //return state.todoList = []
                        //return item = {}
                        //item.item = 'si'
                    } else {

                    }

                }
            })
        },
    }
});

export const {
    saveTodo, setCheck, deleteTodo
} = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer