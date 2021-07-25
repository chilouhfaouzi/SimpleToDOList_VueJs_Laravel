<template>
    <div class="item">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
        />
        <span :class="[item.completed ? 'completed' : '', 'itemtext']">{{
            item.name
        }}</span>
        <!-- <button @click="removeItem()" class="remove">Delete</button> -->
        <font-awesome-icon icon="trash" @click="removeItem()" class="remove" />
    </div>
</template>

<script>
export default {
    props: ["item"],
    methods: {
        updateCheck() {
            axios
                .put("api/item/" + this.item.id, { item: this.item })
                .then(response => {
                    if (response.status == 200) {
                        this.$emit("itemChanged"); //call this event in father componenet
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        removeItem() {
            axios
                .delete("api/item/" + this.item.id)
                .then(response => {
                    if (response.status == 200) {
                        this.$emit("itemChanged"); //call this event in
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style scoped>
.item {
    display: flex;
    justify-content: center;
    align-items: center;
}
.completed {
    text-decoration: line-through;
    color: #999999;
}
.itemtext {
    width: 100%;
    margin-left: 15px;
}
.remove {
    background-color: #eb3b5a;
    color: #fff;
    outline: none;
    border: none;
    padding: 6px;
    border-radius: 3px;
    cursor: pointer;
}
</style>
