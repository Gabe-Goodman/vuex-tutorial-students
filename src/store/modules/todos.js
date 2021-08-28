import axios from 'axios';

const state = {
  todos: null,
};

const getters ={
  allTodos: () => {
    return state.todos;
  }
};


const actions ={
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos'); 
    commit('setTodos', response.data)
  },
  async postTodo({ commit }, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false});
    commit('addTodo', response.data) 
  },
};

const mutations ={
  setTodos: (state, todo) => {
   state.todos = todo;
  },
  addTodo: (state, newTodo) => {
    state.todos.unshift(newTodo);
   }
};


//We export these objects out so that we can use them in our components
export default {
  state,
  getters,
  actions,
  mutations
}