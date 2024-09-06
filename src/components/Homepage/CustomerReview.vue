<template>
  <div class="bg-gray-50 pb-20">
    <div class="md:w-10/12 mx-auto pt-10 mt-20 w-full">
      <h3 class="text-3xl font-bold text-gray-700 pl-2">Customer Reviews:</h3>
      <div class="overflow-x-auto py-4">
        <div class="reviews-track flex gap-4 md:gap-6">
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="inline-block min-w-64 h-auto relative border mx-4 p-6 bg-white rounded-lg shadow-lg text-center"
          >
            <p class="text-lg text-gray-700 italic mb-4 break-words">"{{ review.message }}"</p>
            <h3 class="text-xl absolute bottom-0  font-semibold text-[#D4AF37]">- {{ review.author }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        reviews: [
            { message: "Wow, you deliver on time", author: "Chisom" },
            { message: "Awwwn so beautiful . I like everything. Thank you dear.", author: "Simisola" },
            { message: "Thank you for making my loom good", author: "Lola" },
            { message: "The dress fits me so well love you", author: "Timi" },
            { message: "Best Aso Ebi cloths every!!. Everybody was admiring me at the party", author: "Sayo" },
            { message: "My wedding cloths is so beautify, thanks to you", author: "Kira" },
            { message: "I know you are good but this your work exceed my expectations", author: "Sade" },
            { message: "thank you so much!", author: "Olivia" },
        ],
        };
    },
}
</script>



<style scoped>
.bg-white {
  background-color: #f9f9f9;
}

.border {
  border-color: #D4AF37;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.rounded-lg {
  border-radius: 0.75rem;
}

.overflow-x-auto {
  overflow-x: auto;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.inline-block {
  display: inline-block;
}

.reviews-track {
  display: flex;
}
.break-words {
  word-break: break-word;
}
</style>