<template>
    <div class="list-container">
        <input class="main-input" type="text" placeholder="I need to..." v-model="newTodo" @keyup.enter="addTodo" maxlength="">
        <button class="btns" id="btn-add" @click="addTodo">Add</button>
        <ul class="list">
            <li v-for="currentTodo in todos" :key="currentTodo.id" class="todo-lines">
                <div class="checkbox-text-align">
                    <input id="btn-checked" type="checkbox" v-model="currentTodo.completed">
                    <p v-if="!currentTodo.buttonEdit" class="text-todo" :class="{ 'completed' : currentTodo.completed}">{{ currentTodo.title }}</p>
                    <input class="update-input" v-focus v-if="currentTodo.buttonEdit" v-model="currentTodo.title" @keyup.enter="update(currentTodo)" type="text" :placeholder="currentTodo.title">
                </div>
                <div>
                    <button class="btns" id="btn-update" @click="update(currentTodo)">{{!currentTodo.buttonEdit ? "Edit" : "Save"}}</button>
                    <button class="btns" id="btn-del" @click="del(currentTodo)">Delete</button>
                </div>
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
            idForTodo: JSON.parse(localStorage.getItem('id-items')) || 1,
            todos: JSON.parse(localStorage.getItem('todos-items')) || [],
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
                console.log(this.todos);
                this.idForTodo++;
                this.newTodo = null;
            }
            localStorage.setItem('id-items', JSON.stringify(this.idForTodo))
            localStorage.setItem('todos-items', JSON.stringify(this.todos))
        },
        del(currentTodo) {
            let index = this.todos.indexOf(currentTodo);
            this.todos.splice(index, 1);
            localStorage.setItem('todos-items', JSON.stringify(this.todos))

        },
        update(currentTodo) {
            currentTodo.buttonEdit = !currentTodo.buttonEdit;
            localStorage.setItem('todos-items', JSON.stringify(this.todos))
        }
    },
    directives: {
        focus
    }
}
</script>

<style scoped>

    .main-input {
        font-size: 25px;
        border: none;
        height: 40px;
        background-color: transparent;
        border-bottom: 2px solid #112830;
        margin-left: 10px;
    }

    .main-input:focus {
        outline: none;
    }

    .main-input::placeholder {
        color: #112830ad;
    }
    .list {
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        list-style-type: none;
        overflow: hidden;
        border-left: 4px dotted #112830;
        margin-top: 40px;
        max-height: 540px;
        overflow-y: scroll;
    }

    .list::-webkit-scrollbar-track {
    background-color: #14838d;
    border-radius: 40px;
    }
    
    .list::-webkit-scrollbar {
        width: 8px;
        background: #14838d;
        border-radius: 40px;
    }

    .list::-webkit-scrollbar-thumb {
        border-radius: 40px;
        background: #112830;
    }

    .todo-lines {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .text-todo {
        display: inline-block;
        max-width: 330px;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 25px;
        margin: 0 10px;
    }

    .checkbox-text-align {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .completed {
        text-decoration: line-through;
    }

    #btn-del {
        margin-right: 8px;
    }

    #btn-add {
        margin-left: 70px;
        height: 32px;
        width: 80px;
        font-size: 20px;
    }

    #btn-update {
        margin-right: 8px;
    }

    .btns {
        font-size: 14px;
        border-radius: 40px;
        border-color: transparent;
        height: 25px;
        width: 60px;
        background-color: #112830;
        color: #0c7988;
    }

    .btns:hover {
        background-color: #14838d;
        border: 2px solid #112830;
        color: #112830;
        transition: .25s;
    }

    #btn-checked {
        margin: 0 5px;
    }

    .update-input {
        border: none;
        background-color: transparent;
        border-bottom: 2px solid #112830;
        margin-left: 10px;
        font-size: 16px;
        color: #112830bd;
    }

    .update-input:focus {
        outline: none;
    }
</style>