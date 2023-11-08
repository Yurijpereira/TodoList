<template>
    <div>
        <input type="text" placeholder="I need to..." v-model="newTodo" @keyup.enter="addTodo">
        <button @click="addTodo">Add</button>
        <ul class="list">
            <li v-for="todo in todos" :key="todo.id" class="todo-lines">
                <input type="checkbox" v-model="todo.completed">
                <span v-if="!todo.buttonEdit" class="text-todo">{{ todo.title }}</span>
                <input v-focus v-if="todo.buttonEdit" v-model="todo.title" @keyup.enter="update(todo)" type="text" :placeholder="todo.title">
                <button @click="update(todo)">{{!todo.buttonEdit ? "Edit" : "Save"}}</button>
                <button @click="del(todo)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
const focus = {
    mounted: (el) => el.focus()
}

export default {
    name: 'TodoList',
    data() {
        return {
            newTodo: null,
            idForTodo: 0,
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
        }
    },
    directives: {
        focus
    }
}
</script>

<style scoped>

    .list {
        padding-left: 10px;
    }

    .todo-lines {
        margin-bottom: 10px;
    }

    .text-todo {
        margin: 0 10px;
    }
</style>