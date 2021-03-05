<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <router-link to="/">Home </router-link>
                <router-link to="/about">about </router-link>
                <h4>Main Component</h4>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
