<template>
    <div>
        <h1>{{ data.title }}</h1>
        <p>{{ data.text }}</p>
    </div>
</template>

<script>
export default {
    name: 'HelloComponent',
    props: {
        data: Object,
    },
        
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding: 100px;

}

</style>