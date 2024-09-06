<template>
<footer class="bg-white w-full text-black border-t py-8">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row md:w-10/12 mx-auto justify-between md:items-end gap-8">
         <!-- Social Media Section -->
        <div class="flex flex-col space-y-4 ">
            <div>
                <img src="../../assets/logo.jpeg" alt="logo" class=" h-16 w-20 md:h-24 object-cover md:w-40">
                <p class="text-gray-700 text-lg font-bold">All the luck and more! </p>
            </div>
            <h3 class="text-xl text-gray-700 pb-2 font-semibold ">Follow Us</h3>
            <div class="flex space-x-6 text-center md:text-left">
                <a href="https://www.facebook.com" target="_blank" class="text-gold hover:text-yellow-300">
                <i class="ri-facebook-circle-line text-3xl"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" class="text-gold hover:text-yellow-300">
                <i class="ri-instagram-line text-3xl"></i>
                </a>
                <a href="https://wa.me/2348136303442" target="_blank" class="text-gold hover:text-yellow-300">
                <i class="ri-whatsapp-line text-3xl"></i>
                </a>
                <a href="mailto:info@business.com" class="text-gold hover:text-yellow-300">
                <i class="ri-mail-line text-3xl"></i>
                </a>
            </div>
        </div>
      <!-- Address Section -->
      <div class="flex space-x-2">
        <i class="ri-map-pin-line text-2xl text-gold"></i>
        <div class="leading-8">
          <h3 class="text-xl text-gray-700 font-semibold ">Our Address</h3>
          <p>43b Gilbert Odior street Unity Homes Thomas Estate Ajah.</p>
          <p>Lagos, Nigeria, </p>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="flex flex-col space-y-4">
        <h3 class="text-xl font-semibold text-gray-700 ">Contact Us</h3>
        <div class="flex items-center space-x-4">
          <i class="ri-whatsapp-line text-2xl text-gold"></i>
          <a href="tel:0813-630-3442" target="_blank" >+1 (234) 813-630-3442</a>
        </div>
        <div class="flex items-center space-x-4">
            <i class="ri-mail-line text-2xl text-gold"></i>
          <a href="mailto:threadluck@gmail.com">threadluck@gmail.com</a>
        </div>
      </div>
    

      
    </div>
  </div>
</footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-icon {
  transition: color 0.3s ease;
}
.footer-icon:hover {
  color: #f59e0b; /* Adjust for a slightly darker yellow */
}
.bg-white {
    background-color: #ffffff;
  }
  .text-gold {
    color: #D4AF37;
  }
  .hover\:text-white:hover {
    color: #ffffff;
  }

</style>