<template>
    <div class="container">
        <div class="header">
            <h2 id="title">Todo List</h2>
            <add-item v-on:reloadList="getItems()" />
        </div>
        <list-items :items="items" v-on:reloadList="getItems()" />
    </div>
</template>

<script>
import addItem from "./addItem";
import listItems from "./listItems";
export default {
    components: { addItem, listItems },
    data: function() {
        return {
            items: []
        };
    },
    methods: {
        getItems() {
            axios
                .get("api/items")
                .then(response => {
                    this.items = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    created() {
        this.getItems();
    }
};
</script>

<style scoped>
.container {
    width: 60%;
    margin: auto;
}
.header {
    background-color: #778ca3;
    padding: 10px;
}
#title {
    text-align: center;
    padding: 10px;
}
</style>
