<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo"> {{ todo.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos']),
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .todos {
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   grid-gap: 1rem;
 }
 .todo {
   border: 1px solid #ccc;
   background: #41b883;
   padding: 1rem;
   border-radius: 5px;
   text-align: center;
   position: relative;
   cursor: pointer;
 }
</style>
