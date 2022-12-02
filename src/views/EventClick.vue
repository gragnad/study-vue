<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <button type="button" @click="setCount(7)">setCount 7</button>
        <p>the counter is : {{counter}}</p>
        
        <select v-model="selectedValue" @change="changeSelect">
            <option value="seoul">seoul</option>
            <option value="busan">busan</option>
            <option value="jeju">jeju</option>
        </select>

    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: 0,
            selectedValue: '',
        };
    },
    methods: {
        increaseCounter() {
            this.counter = this.counter +1;
        },
        setCount(counter) {
            this.counter = counter;
        },
        changeSelect() {
            alert(this.selectedValue);
        }
    }
}
</script>