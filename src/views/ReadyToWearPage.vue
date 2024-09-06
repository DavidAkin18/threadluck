<template>
  <div>
    <Navbar />
    <ReadyToGo />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue';
import Navbar from '@/components/Homepage/Navbar.vue';
import ReadyToGo from '@/components/ReadyToGo/ReadyToGo.vue';

export default {
components:{
    Navbar,
    ReadyToGo,
    Footer
}
}
</script>

<style>

</style>