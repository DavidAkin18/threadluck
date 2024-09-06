<template>
  <div>
    <Navbar />
    <h1 class="min-h-screen text-6xl">BeSpoke</h1>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue';
import Navbar from '@/components/Homepage/Navbar.vue';

export default {
components:{
    Navbar,
    Footer
}
}
</script>

<style>

</style>