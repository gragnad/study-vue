<template>
    <h1>full Name : {{fullName}}</h1>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'Seungwon',
            lastName: 'Go'
        };
    },
    computed: {
        fullName() {
            return this.firstName + " " + this.lastName;
        }
    }
}
</script>