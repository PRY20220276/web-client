<template>
    <section class="services">
        <div class="services-title">
            <h2>LIST OF SERVICES</h2>
            <h3>Start making the content you wished for, all posible by AI.</h3>
        </div>

        <div class="services-items">
            <div class="item">Service 1</div>
            <div class="item">Service 2</div>
            <div class="item">Service 3</div>
            <div class="item">Service 4</div>
            <div class="item">Service 5</div>
            <div class="item">Service 6</div>
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
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .item {
        width: 350px;
        height: 150px;
        color: white;
        border: 1px solid var(--blue-600);
        background-color: var(--blue-600);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 50px;
    }

</style>