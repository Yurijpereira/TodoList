<template>
    <div>
        <input type="text" placeholder="I need to..." v-model="newTodo" @keyup.enter="addTodo">
        <button @click="addTodo">Add</button>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.title }}
                <input type="checkbox" v-model="todo.completed">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data() {
        return {
            newTodo: null,
            idForTodo: 1,
            todos: [],
        }
    },
    methods: {
        addTodo() {
            if (!this.newTodo) {
                return;
            } else {
                this.todos.push({
                    id: this.idForTodo,
                    title: this.newTodo,
                    completed: false,
                });
                this.idForTodo++;
                this.newTodo = null
            }
        }
    }
}
</script>