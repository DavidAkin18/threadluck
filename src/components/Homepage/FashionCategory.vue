<template>
  <div class="md:w-10/12 border mt-20 p-2 mx-auto min-h-full border-[#D4AF37] p-4">
    <h1 class="text-3xl text-[#D4AF37] font-bold py-6">FASHION CATEGORIES:</h1>
    <div class="flex flex-col md:flex-row items-start justify-center gap-4">
        <div class="w-full rounded-lg border-2 border-[#D4AF37] md:w-1/3 bg-white flex flex-col items-center">
            <img src="../../assets/intro_image.jpg" alt="" class="rounded-lg w-full object-cover">
            <h3 class="mt-2 text-lg font-semibold text-[#D4AF37]">Traditional</h3>
            <button class="mt-auto bg-[#D4AF37] text-white hover:bg-[#facc15] hover:text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">Check Out</button>
        </div>
        <div class="w-full border-2 rounded-lg border-[#D4AF37] md:w-1/3 bg-white flex flex-col items-center">
            <img src="../../assets/hero.jpeg" alt="" class="rounded-lg w-full object-cover">
            <h3 class="mt-2 text-lg font-semibold text-[#D4AF37]">Bespoke</h3>
            <button class="mt-auto bg-[#D4AF37] text-white hover:bg-[#facc15] hover:text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">Check Out</button>
        </div>
        <div class="w-full border-2 rounded-lg border-[#D4AF37] md:w-1/3 bg-white flex flex-col items-center">
            <img src="../../assets/readyToWear.jpeg" alt="" class="rounded-lg w-full object-cover">
            <h3 class="mt-2 text-lg font-semibold text-[#D4AF37]">Ready to wear</h3>
            <button class="mt-auto bg-[#D4AF37] text-white hover:bg-[#facc15] hover:text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">Check Out</button>
        </div>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.bg-white {
  background-color: #f9f9f9;
}

.border {
  border-color: #D4AF37;
}

.text-[#D4AF37] {
  color: #D4AF37;
}

.bg-[#D4AF37] {
  background-color: #D4AF37;
}

.hover\:bg-[#facc15]:hover {
  background-color: #facc15;
}

.text-white {
  color: #ffffff;
}

.text-black {
  color: #000000;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.rounded-lg {
  border-radius: 0.75rem;
}

.transition {
  transition: all 0.3s;
}
</style>
