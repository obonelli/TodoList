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
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (item.done === true) {
                        state.todoList = state.todoList.filter((elm) => elm.id !== action.payload)

                        //state.todoList.filter((elm) => { console.log(elm) })


                        //state.todoList = []
                        //state.todoList.filter((elm) => elm !== action.payload)
                        //return state.filter(({ id }) => id !== action.payload)
                        //return item.status = 0;
                        //return state.filter(item.id !== action.payload)
                        // return state.todoList.filter((item) => item.id == action.payload);

                        //return state.todoList[0] = [];
                        // state.todos.filter((item) => item.id !== id);
                        // return state.todoList
                        // setTodoList(todoList);
                        // return item.item = [];
                        //return state.todoList = []
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