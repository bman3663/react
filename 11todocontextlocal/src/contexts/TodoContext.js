import { useContext, createContext } from "react";

export const TodoContext = createContext({ // this createContext is similar to a java interface, creates a context blueprint with default values
     todos: [{ // this is actually an array of of "todo" objects, hence the []
        id: 1, // default values, they could be null, or could be not mentioned at all, and added later, but this gives clear picture
        todo: "Todo Message",
        completed: false
     }],
     addTodo: (todo) => {}, // again similar to interface, defines the methods signature without provideing the actuall code
     updateTodo: (id, todo) => {},
     deleteTodo: (id) => {},
     toggleComplete: (id) => {}
})

export const useTodo = () => { // Custom Hook, shortens down code inside
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider // PROVIDER, essential, this component will  "WRAP" your app, and anything within
                                                 // will have access to the context