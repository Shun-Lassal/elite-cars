<template>
  <NavBar/>
  <div class="h-24 md:h-48 relative">
    <img src="../assets/pic4.jpg" class="h-full object-cover w-full " alt="">
    <div class="absolute bg-gradient-to-t from-black to-transparent via-transparent z-20"></div>
    <div class="absolute top-0 right-0 left-0 md:left-10 bottom-2 md:bottom-5 flex flex-col justify-end items-center md:items-start">
      <h2 class="border-b border-b-red-500 w-fit text-2xl text-white font-bold drop-shadow-md">Nos bateaux de location</h2>
    </div>
    
  </div>
  <div class="z-20 bg-slate-200 border-t border-t-red-500 shadow-inner">
    <div class="py-8 text-center"> PARAGRAPHE ICI où on peux mettre les conditions d'utilisation minimales, prix de caution etc.. </div>
    <div class="py-8 grid lg:grid-cols-3 <lg:grid-cols-2 gap-8 px-12 md:px-24">
      <carCard
        :available="true"
        car-name="206 Coupé"
        car-brand="peugeot"
        car-image="pic1.jpg"
        :price-per-day="170"
      />
      <carCard
        car-name="Audi A3"
        car-brand="audi"
        car-image="pic2.jpg"
        :price-per-day="170"
      />
      <carCard
        car-name="Clio RS4"
        car-brand="renault"
        car-image="pic3.jpg"
        :price-per-day="170"
      />
      <carCard
        car-name="Class A200"
        car-brand="mercedes"
        car-image="pic4.jpg"
        :price-per-day="170"
      />
    </div>
  </div>
  <FootView />
</template>