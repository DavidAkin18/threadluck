<template>
  <div class="">
    <Navbar />
    <MainAsoEbi />
    <Footer class="" />
  </div>
</template>

<script>
import MainAsoEbi from '@/components/AsoEbi.vue/MainAsoEbi.vue';
import Footer from '@/components/Footer/Footer.vue';
import Navbar from '@/components/Homepage/Navbar.vue';

export default {
components:{
    Footer,
    Navbar,
    MainAsoEbi
}
}
</script>

<style>

</style>