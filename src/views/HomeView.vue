<template>
  <div>
    <Navbar />
    <!-- <hr class="border-2 border-[#fbbf24]"> -->
    <Main id="about" />
    <FashionCategory id="menu" />
    <CustomerReview />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Homepage/Main.vue';
import Navbar from '@/components/Homepage/Navbar.vue';
import FashionCategory from '@/components/Homepage/FashionCategory.vue';
import CustomerReview from '@/components/Homepage/CustomerReview.vue';
import Footer from '@/components/Footer/Footer.vue';
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Main,
    FashionCategory,
    CustomerReview,
    Footer
  }
}
</script>
