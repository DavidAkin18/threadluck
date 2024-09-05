<template>
     <div class="py-6 border bg-white mt-20 border-[#D4AF37] w-full">
        <h3 class="text-3xl text-[#D4AF37] font-bold pl-2">Customer Reviews:</h3>
        <div class="overflow-x-auto whitespace-nowrap py-4">
        <div class="reviews-track flex">
            <div
            v-for="(review, index) in reviews"
            :key="index"
            class="inline-block w-80 h-64 mx-4 p-6 bg-white rounded-lg shadow-lg text-center"
            >
            <p class="text-lg text-black italic mb-4">"{{ review.message }}"</p>
            <h3 class="text-xl font-semibold text-[#D4AF37]">- {{ review.author }}</h3>
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
            { message: "Excellent customer service and quality!", author: "Jane Smith" },
            { message: "Very satisfied with my purchase.", author: "David Lee" },
            { message: "Will definitely recommend to others.", author: "Emily Brown" },
            { message: "A seamless shopping experience!", author: "Michael Wilson" },
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

.text-[#D4AF37] {
  color: #D4AF37;
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