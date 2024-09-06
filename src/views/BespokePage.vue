<template>
  <div>
    <Navbar />
    <WeddingWears />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue';
import Navbar from '@/components/Homepage/Navbar.vue';
import WeddingWears from '@/components/Wedding.vue/WeddingWears.vue';

export default {
    components:{
        Navbar,
        Footer,
        WeddingWears
    }
}
</script>

<style>

</style>