<template>
 <div class="md:w-10/12 mx-auto min-h-full border mt-20 p-4 border-[#D4AF37]">
  <h1 class="text-3xl text-gray-700 font-bold py-6 text-center">Fashion Categories</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Aso-Ebi Section -->
    <div class="bg-white rounded-lg  w-[90%] mx-auto shadow-[0_4px_6px_rgba(212,175,55,0.5)] flex flex-col items-center">
      <img src="https://res.cloudinary.com/def9quyti/image/upload/v1728086287/trad13_l3pgqi.jpg" alt="Aso Ebi Image" class="rounded-t-lg w-full object-cover h-[400px]">
      <div class="py-4 text-center">
        <h3 class="text-xl font-semibold text-gray-700">Aso-Ebi</h3>
      </div>
      <router-link to="traditional" class="w-full bg-white hover:bg-[#D4AF37] border border-[#D4AF37] text-black text-center font-bold py-3 px-6 transition duration-300"><button >
        Check Out
      </button></router-link>
    </div>

    <!-- Wedding Section -->
    <div class="bg-white rounded-lg shadow-[0_4px_6px_rgba(212,175,55,0.5)]  w-[90%] mx-auto  flex flex-col items-center">
      <img src="https://res.cloudinary.com/def9quyti/image/upload/v1728086321/wed1_kgrmuy.jpg" alt="Wedding Image" class="rounded-t-lg w-full object-cover h-[400px]">
      <div class="py-4 text-center">
        <h3 class="text-xl font-semibold text-gray-700">Bridals</h3>
      </div>
      <router-link to="bespoke" class="w-full bg-white hover:bg-[#D4AF37] border border-[#D4AF37] text-black text-center font-bold py-3 px-6 transition duration-300"> <button >
       Check Out
      </button></router-link>
    </div>

    <!-- Ready-to-Wear Section -->
    <div class="bg-white rounded-lg shadow-[0_4px_6px_rgba(212,175,55,0.5)]  w-[90%] mx-auto  flex flex-col items-center">
      <img src="https://res.cloudinary.com/def9quyti/image/upload/v1728086360/casual_gxlpvq.jpg" alt="Ready-to-wear Image" class="rounded-t-lg w-full object-cover h-[400px]">
      <div class="py-4 text-center">
        <h3 class="text-xl font-semibold text-gray-700">Ready-to-Wear</h3>
      </div>
      <router-link to="ready" class="w-full bg-white hover:bg-[#D4AF37] border border-[#D4AF37] text-black text-center font-bold py-3 px-6 transition duration-300"><button>
        Check Out
      </button></router-link>
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
