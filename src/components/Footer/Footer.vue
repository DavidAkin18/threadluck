<template>
<footer class="bg-white text-black py-8">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Address Section -->
      <div class="flex items-start space-x-4">
        <i class="ri-map-pin-line text-2xl text-gold"></i>
        <div>
          <h3 class="text-xl font-semibold text-gold">Our Address</h3>
          <p>123 Business Street, Suite 456</p>
          <p>Cityname, Country, 78910</p>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="flex flex-col space-y-4">
        <h3 class="text-xl font-semibold text-gold">Contact Us</h3>
        <div class="flex items-center space-x-4">
          <i class="ri-whatsapp-line text-2xl text-gold"></i>
          <p>+1 (234) 567-8901</p>
        </div>
        <div class="flex items-center space-x-4">
          <i class="ri-mail-line text-2xl text-gold"></i>
          <p>info@business.com</p>
        </div>
      </div>

      <!-- Social Media Section -->
      <div class="flex flex-col space-y-4">
        <h3 class="text-xl font-semibold text-gold">Follow Us</h3>
        <div class="flex space-x-6">
          <a href="https://www.facebook.com" target="_blank" class="text-gold hover:text-white">
            <i class="ri-facebook-circle-line text-3xl"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" class="text-gold hover:text-white">
            <i class="ri-instagram-line text-3xl"></i>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" class="text-gold hover:text-white">
            <i class="ri-whatsapp-line text-3xl"></i>
          </a>
          <a href="mailto:info@business.com" class="text-gold hover:text-white">
            <i class="ri-mail-line text-3xl"></i>
          </a>
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
    background-color: #f9f9f9;
  }
  .text-gold {
    color: #D4AF37;
  }
  .hover\:text-white:hover {
    color: #ffffff;
  }

</style>