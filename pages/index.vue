<script setup></script>

<template>
  <div class="h-full">
    <NavBar />
    <div class="bg-slate-100 relative object-contain">
      <img
        src="../assets/pic2.JPG"
        class="object-cover md:object-none md:h-fit w-full h-192"
      />
      <div
        class="absolute flex flex-col justify-end items-start top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent via-transparent z-10"
      >
        <div
          class="flex flex-col ml-6 mb-6 md:ml-16 md:mb-16 lg:ml-24 lg:mb-24"
        >
          <span class="text-white font-bold text-xl md:text-3xl">Clio RS4</span>
          <span class="text-white font-medium text-lg md:text-2xl"
            >170€ / Jour</span
          >
          <span class="text-white font-normal text-md md:text-xl">150 KMs</span>
          <div class="bg-red-600 p-1 md:p-2 shadow shadow-black group">
            <span
              class="text-white font-bold group-hover:border-b border-b-white"
              >Réserver maintenant</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-t-red-500 h-full bg-slate-100">
      <div class="h-40 flex flex-col justify-center items-center">
        <h2 class="text-3xl font-medium border-b border-b-red-500">
          Véhicules disponibles
        </h2>
      </div>
      <div
        class="grid lg:grid-cols-3 <lg:grid-cols-2 gap-8 px-12 md:px-24 pb-16"
      >
        <carCard
          car-name="206 Coupé"
          car-brand="peugeot"
          car-image=""
          :price-per-day="170"
        />
        <carCard
          car-name="Audi A3"
          car-brand="audi"
          car-image=""
          :price-per-day="170"
        />
        <carCard
          car-name="Clio RS4"
          car-brand="renault"
          car-image=""
          :price-per-day="170"
        />
        <carCard
          car-name="Class A200"
          car-brand="mercedes"
          car-image=""
          :price-per-day="170"
        />
      </div>
    </div>
    <div class="border-t border-t-red-500 h-64 bg-black">eeee</div>
  </div>
</template>
