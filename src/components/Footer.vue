<template>
    <div class="footer">
        <div class="project-title">
            <img alt="project logo" src="../assets/logo.png" width="50" height="50">
            <h2>Project</h2>
        </div>
        <div class="copyright">
            <p>Copyright</p>
        </div>
        <div class="terms">
            <p>Privacy | Terms</p>
        </div>
    </div>


</template>

<script>
export default {
    name: 'Footer.vue'
}
</script>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.project-title {
    display: flex;
    gap: 20px;
}
.copyright, .terms {
    font-size: 20px;
}
</style>