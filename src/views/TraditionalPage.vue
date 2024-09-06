<template>
  <div class="">
    <Navbar />
    <h1 class="h-46 text-6xl">Traditional</h1>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue';
import Navbar from '@/components/Homepage/Navbar.vue';

export default {
components:{
    Footer,
    Navbar
}
}
</script>

<style>

</style>