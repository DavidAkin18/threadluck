<template>
    <div class="bg-gray-50">
      <div class="md:w-10/12 mx-auto  pt-10  mt-20  w-full">
        <h3 class="text-3xl font-bold text-gray-700 pl-2">Customer Reviews:</h3>
        <div class="overflow-x-auto whitespace-nowrap py-4">
          <div class="reviews-track flex gap-4 md:gap-6">
            <div
              v-for="(review, index) in reviews"
              :key="index"
              class="inline-block h-34 border mx-4 p-6 bg-white rounded-lg shadow-lg text-center"
              >
              <p class="text-lg text-gray-700 italic mb-4">"{{ review.message }}"</p>
              <h3 class="text-xl font-semibold text-[#D4AF37]">- {{ review.author }}</h3>
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
            { message: "Great product and fast delivery! ", author: "John Doe" },
            { message: "Awwwn so beautiful . I like everything. Thank you dear.", author: "Simisola" },
            { message: "Thank you for making my loom good", author: "Lola" },
            { message: "The dress fits me so well love you", author: "Timi" },
            { message: "Best Aso Ebi cloths every!!. Everybody was admiring me at the party", author: "Sayo" },
            { message: "Amazing quality and fast support.", author: "Sophia Taylor" },
            { message: "Exceeded my expectations!", author: "Ethan Thomas" },
            { message: "Five-star experience all the way!", author: "Olivia Martin" },
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
</style>