<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <one-item
                :item="item"
                class="iteminlist"
                v-on:itemChanged="$emit('reloadList')"
            />
        </div>
    </div>
</template>

<script>
import oneItem from "./oneItem";
export default {
    props: ["items"],
    components: { oneItem }
};
</script>

<style scoped>
.iteminlist {
    background-color: #d1d8e0;
    padding: 5px;
    margin: 4px 0;
}
</style>
