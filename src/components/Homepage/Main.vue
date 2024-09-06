<template>
    <section class="hero z-10  mt-16 md:mt-28 bg-cover bg-center h-screen flex items-center justify-center relative text-white overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative md:w-9/12 mx-auto z-10 text-center px-4 md:px-8">
            <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-4">
                Embrace Your Elegance with Threadluck
            </h1>
            <p class="text-lg md:text-2xl mb-6">
                Discover timeless luxury and contemporary style for every shape and size. Redefine fashion with pieces that blend flair and functionality.
            </p>
            <a href="https://wa.me/2348136303442" class="bg-[#D4AF37] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#facc15] transition duration-300">
                Shop Now
            </a>
        </div>
    </section>


  <div class="p-4 mt-20   md:w-10/12 mx-auto  md:border-b border-b-[#D4AF37] ">
    <!-- <div class="md:w-1/3  border rounded-lg">
        <img src="../../assets/intro_image.jpg" alt="" class=" w-full h-50 rounded-lg ">
    </div>
    <div class="md:w-1/2 mt-4">
        <h1><strong class="text-black text-xl">Threadluck: </strong> <span class="font-bold text-gray-800 text-lg">A Legacy of Elegance and Inclusivity</span></h1>
        <p class="text-gray-700 text-sm mt-2">
            Threadluck Nig Ltd is a leading fashion brand with over 20 years of service in creating luxury women’s wear.
            Founded by Olayisade Ruth Oluwatoyin, Threadluck celebrates fashion for every shape and size. Our brand is committed to empowering individuals through versatile and stylish clothing that enhances unique attributes. 
        </p>
        <p class="text-gray-700 text-sm mt-2">
            In our second generation, we merge cutting-edge design with unparalleled comfort, offering a diverse range of garments for any occasion. 
        </p>
        <p class="text-gray-700 text-sm mt-2">
            Our mission is to blend flair with functionality, creating pieces that inspire confidence and self-expression. Threadluck is not just a fashion brand; it’s a destination where elegance meets innovation. 
        </p>
        <p class="text-gray-700 text-sm mt-2">
            Join us in embracing a fashion revolution where every piece tells a story of individuality and grace.
        </p>
    </div>-->
    <div class="md:flex items-center gap-4 justify-between" id="about"> 
      <div class="md:w-1/3 w-full" >
        <img src="../../assets/intro_image.jpg" alt="" class=" w-full h-auto rounded-lg ">
      </div>
      <div class="md:w-2/3 pt-10 items-start ">
        <div class="md:flex gap-2">
          <div class="md:w-1/2">
            <h1 class="text-left text-gray-700 font-bold  text-2xl">welcome</h1>
            <p class="text-gray-700  text-sm">
                Threadluck Nig Ltd is a leading fashion brand with over 20 years of service in creating luxury women’s wear.
                Founded by Olayisade Ruth Oluwatoyin, Threadluck celebrates fashion for every shape and size. Our brand is committed to empowering individuals through versatile and stylish clothing that enhances unique attributes. 
            </p>
          </div>
          <div class="md:w-1/2 pt-5 md:pt-0">
            <h1 class="text-left text-gray-700  font-bold  text-2xl">What we do!</h1>
              <p class="text-gray-700 text-sm ">
                In our second generation, we merge cutting-edge design with unparalleled comfort, offering a diverse range of garments for any occasion. 
              </p>
          </div>
        </div>
        <div class="md:flex items-start  pt-5 ">
          <div class="md:w-1/2 w-full ">
            <h1 class="text-left text-gray-700  font-bold  text-2xl">Mission</h1>
            <p class="text-gray-700  w-full text-sm ">
              Our mission is to blend flair with functionality, creating pieces that inspire confidence and self-expression. Threadluck is not just a fashion brand; it’s a destination where elegance meets innovation.
            </p>
          </div>
          <div class="md:w-1/2  pt-5 md:pt-0">
            <h1 class="text-left text-gray-700 px-2 font-bold text-2xl">Join us</h1>
            <p class="text-gray-700 text-sm ">
              Join us in embracing a fashion revolution where every piece tells a story of individuality and grace.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {

}
</script>

<style>
.hero {
  background-image: url('../../assets/hero.jpeg');
  height: 80vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position:top;
}

.hero-content {
  z-index: 1;
}

.btn-primary {
  background-color: #0056b3;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #003d7a;
}
</style>