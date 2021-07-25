<template>
    <div class="form-add">
        <input type="text" v-model="item.name" />
        <!-- <button
            class="addbtn"
            :class="[item.name ? 'active' : 'inactive']"
            @click="addItem"
        >
            Add
        </button> -->

        <font-awesome-icon
            class="addbtn"
            :class="[item.name ? 'active' : 'inactive']"
            @click="addItem"
            icon="plus-circle"
        />
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            item: {
                name: ""
            }
        };
    },
    methods: {
        addItem() {
            if (this.item.name == "") {
                return;
            }
            axios
                .post("api/item/store", {
                    item: this.item
                })
                .then(response => {
                    if (response.status == 201) {
                        this.item.name = "";
                        this.$emit("reloadList"); //call this event in
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
.form-add {
    display: flex;
    justify-content: center;
    align-items: center;
}
input {
    width: 100%;
    padding: 6px;
    margin-right: 15px;
}
.addbtn {
    padding: 6px 8px;
    outline: none;
    border: none;
    color: #fff;
    border-radius: 3px;
}
.active {
    background-color: #20bf6b;
    cursor: pointer;
}
.inactive {
    background-color: #4b6584;
    cursor: not-allowed;
}
</style>
