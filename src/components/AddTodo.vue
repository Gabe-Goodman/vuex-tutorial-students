<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <Form @submit="onSubmit">
        <input type="text" v-model="title" id="input">
        <input type="submit">
      </Form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AddTodo",
  data: () => {
    // For using v-model
    return {
      title:''
    }
  },
  methods: {
    ...mapActions(['postTodo']),
    onSubmit: function(e) {
      e.preventDefault();
      this.postTodo(this.title);
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