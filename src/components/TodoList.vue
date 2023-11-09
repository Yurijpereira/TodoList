<template>
    <div>
        <input type="text" placeholder="I need to..." v-model="newTodo" @keyup.enter="addTodo">
        <button @click="addTodo">Add</button>
        <ul class="list">
            <li v-for="currentTodo in todos" :key="currentTodo.id" class="todo-lines">
                <input type="checkbox" v-model="currentTodo.completed">
                <span v-if="!currentTodo.buttonEdit" class="text-todo">{{ currentTodo.title }}</span>
                <input v-focus v-if="currentTodo.buttonEdit" v-model="currentTodo.title" @keyup.enter="update(currentTodo)" type="text" :placeholder="currentTodo.title">
                <button @click="update(currentTodo)">{{!currentTodo.buttonEdit ? "Edit" : "Save"}}</button>
                <button @click="del(currentTodo)">Delete</button>
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
            todos: JSON.parse(localStorage.getItem('YourItem')),
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
            localStorage.setItem('YourItem', JSON.stringify(this.todos))

        },
        del(currentTodo) {
            let index = this.todos.indexOf(currentTodo);
            this.todos.splice(index, 1);
            localStorage.setItem('YourItem', JSON.stringify(this.todos))

        },
        update(currentTodo) {
            currentTodo.buttonEdit = !currentTodo.buttonEdit;
            localStorage.setItem('YourItem', JSON.stringify(this.todos))
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