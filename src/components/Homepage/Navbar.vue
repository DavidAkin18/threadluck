<template>
    <nav class="fixed z-20 top-0 w-full h-16 md:h-28 border-b shadow-[0_4px_6px_rgba(212,175,55,0.5)] border-b-[#D4AF37] p-2 md:px-10 flex justify-between items-center bg-white shadow-md">
    <div class="logo">
        <img src="../../assets/logo.jpeg" alt="threadluck" class="h-10 w-16 md:w-40 md:h-24">
    </div>

    <ul class="flex text-xs gap-4 sm:text-sm md:text-lg lg:text-xl font-semibold text-[#333333]">
        <li v-for="(item, index) in lists" :key="index" class="flex items-center gap-1">
            <a :href="item.link" @click.prevent="handleClick(item.link)" class="text-[#D4AF37] hover:text-[#facc15] flex items-center gap-1">
                <i :class="item.icon "></i>
                {{ item.name }}
            </a>
        </li>
    </ul>
</nav>
</template>

<script>
import { defineComponent } from 'vue';

export default {
    data() {
        return {
            lists: [
                {
                name: 'Menu',
                icon: 'ri-home-line',
                link: '#menu'
                },
                {
                name: 'About',
                icon: 'ri-information-line',
                link: '#about'
                },
                {
                name: 'Contact Us',
                icon: 'ri-whatsapp-line',
                link: 'https://wa.me/2348136303442'
                }
            ]
        };
    },
    methods: {
        handleClick(link) {
            if (link.startsWith('#')) {
                this.scrollToSection(link);
            } else {
                window.open(link, '_blank');
            }
        },
        scrollToSection(sectionId) {
            const element = document.querySelector(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped>
nav {
  background-color: #ffffff;
  color: #333333;
}

/* nav .logo img {
  height: 40px;
  width: auto;
} */



nav a {
  text-decoration: none;
  color: #333333;
  transition: color 0.3s ease;
}
</style>