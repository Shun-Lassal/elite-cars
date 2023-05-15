<template>
  <NavBar/>
  <div class="h-24 md:h-48 relative">
    <img src="../assets/pic4.jpg" class="h-full object-cover w-full " alt="">
    <div class="absolute bg-gradient-to-t from-black to-transparent via-transparent z-20"></div>
    <div class="absolute top-0 right-0 left-0 md:left-10 bottom-2 md:bottom-5 flex flex-col justify-end items-center md:items-start">
      <h2 class="border-b border-b-red-500 w-fit text-2xl text-white font-bold drop-shadow-md">Nos voitures de location</h2>
    </div>
    
  </div>
  <div class="z-20 bg-slate-200 border-t border-t-red-500 shadow-inner">
    <div class="py-8 text-center bg-slate-100 border-b border-b-red-500"> 
      <p class="container mx-auto">
        PARAGRAPHE ICI où on peux mettre les conditions d'utilisation minimales, prix de caution etc.. 
      </p>
    </div>
    <div class="py-8 grid lg:grid-cols-3 <lg:grid-cols-2 gap-8 px-12 md:px-24 container mx-auto">
      <carCard
        :car-id="1"
        :available="true"
        car-name="Clio 5 RS Line"
        car-brand="renault"
        car-image="pic1.jpg"
        :price-per-day="170"
      />
      <carCard
      :car-id="2"
        car-name="Golf Polo GTI"
        car-brand="volkswagen"
        car-image="pic2.jpg"
        :price-per-day="170"
      />
      <carCard
      :car-id="3"
        car-name="Abarth 595 Pista"
        car-brand="fiat"
        car-image="pic3.jpg"
        :price-per-day="170"
      />
      <carCard
      :car-id="4"
        car-name="Class A200 AMG"
        car-brand="mercedes"
        car-image="pic4.jpg"
        :price-per-day="170"
      />
    </div>
  </div>
  <FootView />
</template>