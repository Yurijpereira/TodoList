<template>
    <div>
        <div id="header-container">
            <h1 class="title">Todo Lists</h1>
        </div>
        <ul>
            <li class="list-item" v-for="(list, index) in savedTodoLists" :key="index">
                <router-link :to="{ name: 'SavedTodoList', params: { id: index } }">{{ list.name }}</router-link>
                <button class="btns" id="delete-btn" @click="deleteList(index)">Delete</button>
            </li>
        </ul>
        <div id="footer-container">
            <button class="btns" id="create-btn" @click="createNewList">Create New List</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SavedTodoLists',
    data() {
        return {
            savedTodoLists: []
        };
    },
    created() {
        this.loadSavedTodoLists();
    },
    methods: {
        loadSavedTodoLists() {
            const savedLists = localStorage.getItem('savedTodoLists');
            if (savedLists) {
                this.savedTodoLists = JSON.parse(savedLists);
            }
        },
        createNewList() {
            this.$router.push({ name: 'TodoList' });
        },
        deleteList(index) {
            this.savedTodoLists.splice(index, 1);
            localStorage.setItem('savedTodoLists', JSON.stringify(this.savedTodoLists));
        }
    }
};
</script>

<style scoped>
#header-container {
    margin-left: 10px;
}

.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.list-item a {
    text-decoration: none;
    color: inherit;
}

#delete-btn {
    margin-right: 15px;
}

#footer-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
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
    cursor: pointer;
    background-color: #14838d;
    border: 2px solid #112830;
    color: #112830;
    transition: .25s;
}

#create-btn {
    height: 30px;
    width: 135px;
}
</style>
