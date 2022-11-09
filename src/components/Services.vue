<template>
    <section class="services">
        <div class="services-title">
            <h2>LIST OF SERVICES</h2>
            <h3>Start making the content you wished for, all posible by AI.</h3>
        </div>

        <div class="services-items">
            <a href="#" class="item">Service 1</a>
            <a href="#" class="item">Service 2</a>
            <a href="#" class="item">Service 3</a>
            <a href="#" class="item">Service 4</a>
            <a href="#" class="item">Service 5</a>
            <a href="#" class="item">Service 6</a>
        </div>
    </section>

</template>

<script>
export default {
    name: 'Services'
}
</script>

<style scoped>
    h2, h3 {
        margin: 0;
        padding: 0;
        font-size: 30px;
    }
    h3 {
        font-weight: 400;
    }
    .services {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
    }
    .services-title {
        text-align: center;
    }
    .services-items {
        max-width: 1200px;
        margin-top: 90px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .item {
        width: 320px;
        height: 140px;
        color: white;
        border: 1px solid var(--blue-600);
        background-color: var(--blue-600);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 50px;
        transition: all 0.4s ease;
    }
    .item:hover {
        transform: scale(1.1);
        
    }

</style>