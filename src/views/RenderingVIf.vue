<template>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
        <h1 v-show="bshow">is bshow value true? this h1 show always block</h1>
    </div>
</template>

<script>
export default {
    data() {
        return{
            type: 'A',
            bshow: true
        }
    },
}
</script>