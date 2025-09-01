<template>
    <div>
        <img :src="src" :alt="alt">
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: auto;
        max-width: 500px;
        margin-top: -40px;
    }

    @media (max-width: 700px) {
        img {
            min-height: 300px;
            max-width: 100%;
            object-fit: cover;
            overflow-x: scroll;
        }
    }
</style>