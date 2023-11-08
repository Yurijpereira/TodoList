<template>
    <div>
        <input type="text" placeholder="I need to..." v-model="newTodo" @keyup.enter="addTodo">
        <button @click="addTodo">Add</button>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <input type="checkbox" v-model="todo.completed">
                {{ todo.title }}
                <button @click="update(todo)">{{!todo.buttonEdit ? "Edit" : "Save"}}</button>
                <button @click="del(todo)">Delete</button>
                <input v-batata v-if="todo.buttonEdit" v-model="updatedTodo" @keyup.enter="update(todo)" type="text">
            </li>
        </ul>
    </div>
</template>

<script>
const batata = {
    mounted: (el) => el.focus()
}

export default {
    name: 'TodoList',
    data() {
        return {
            newTodo: null,
            idForTodo: 0,
            todos: [],
            updatedTodo: null,
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
                    buttonEdit: false,
                });
                this.idForTodo++;
                this.newTodo = null;
            }
        },
        del(todo) {
            let index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        },
        update(todo) {
            todo.buttonEdit = !todo.buttonEdit;
            todo.title = this.updatedTodo;
            this.updatedTodo = null;
        }
    },
    directives: {
        batata
    }
}
</script>