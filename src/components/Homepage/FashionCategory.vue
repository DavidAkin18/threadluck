<template>
  <div class="md:w-10/12  p-2 mx-auto min-h-full border-[#D4AF37] p-4">
    <h1 class="text-3xl text-gray-700 font-bold py-6">FASHION CATEGORIES:</h1>
    <div class="flex flex-col md:flex-row items-start justify-center gap-4">
        <div class="w-full rounded-t-lg shadow-[0_4px_6px_rgba(212,175,55,0.5)] md:w-1/3 bg-white flex flex-col items-center">
            <img src="../../assets/trad17.jpeg" alt="" class="rounded-t-lg w-full object-cover">
            <h3 class="mt-2 text-xl py-4 font-semibold text-gray-700">Aso-Ebi</h3>
            <button class="mt-auto w-full hover:bg-[#D4AF37] border border-[#D4AF37]  text-black  font-bold py-3 px-6 shadow-lg transition duration-300"><router-link to="traditional">Check Out</router-link></button>
        </div>
        <div class="w-full shadow-[0_4px_6px_rgba(212,175,55,0.5)] shadow-[#D4AF37] rounded-t-lg  md:w-1/3 bg-white flex flex-col items-center">
            <img src="../../assets/wedding4.jpeg" alt="" class="rounded-t-lg w-full border h-[445px] ">
            <h3 class="mt-2 text-xl py-4 font-semibold text-gray-700">Wedding</h3>
            <button class="mt-auto w-full hover:bg-[#D4AF37] border border-[#D4AF37]  text-black  font-bold py-3 px-6  shadow-lg transition duration-300"><router-link to="bespoke">Check Out</router-link></button>
        </div>
        <div class="w-full  shadow-[0_4px_6px_rgba(212,175,55,0.5)] shadow-[#D4AF37] rounded-t-lg  md:w-1/3 bg-white flex flex-col items-center">
            <img src="../../assets/ready1.jpeg" alt="" class="rounded-t-lg w-full object-cover">
            <h3 class="mt-2 text-xl py-4 font-semibold text-gray-700">Ready-to-wear</h3>
            <button class="mt-auto w-full hover:bg-[#D4AF37] border border-[#D4AF37] text-black font-bold py-3 px-6  shadow-lg transition duration-300"><router-link to="ready">Check Out</router-link></button>
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
