<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <input type="text" id="input"/>
      <button v-on:click="getToDo">Add Todo</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AddTodo",
  data: () => {
  },
  methods: {
    ...mapActions(['postTodo']),
    getToDo: function() {
      const toDo = document.getElementById('input').value;
      console.log(toDo);
      const response = this.postTodo(toDo);
      console.log('I ran!');
      console.log(response);
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background-color: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>