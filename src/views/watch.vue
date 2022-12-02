<template>
    <!--watch 는 watch에 정의된 데이터 값 이 변경될시 변경-->
    <h1>Full Name: {{fullName}}</h1>
    <button type="button" @click="changeName">change</button>
</template>
<script>
export default {
    name:'',
    components: {},
    data() {
    return {
            firstName: "seungwon",
            lastName: "GO",
            fullName: ''
        };
    },
    watch: {
        firstName() {
            this.fullName = this.firstName + ' ' + this.lastName;
        },
        lastName() {
            this.fullName = this.lastName + ' ' + this.lastName;
        }
    },
    methods: {
        changeName() {
            this.firstName = 'eunsol';
        }
    },
    created() {},
    mounted() {},
    updated() {},
    unmounted() {}
}
</script>