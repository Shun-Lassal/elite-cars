<script setup>
defineProps({
  carId: Number,
  available: Boolean,
  carName: String,
  carBrand: String,
  carImage: String,
  pricePerDay: Number,
});
</script>

<template>
  <div
    class="flex flex-row justify-start items-start bg-gray-100 border border-gray-200 border-t border-t-red-500 rounded shadow-md shadow-gray-400 relative"
  >
    <div
      class="absolute -top-2 left-4 sm:left-14 md:left-24 lg:left-8 right-0 bottom-0 pointer-events-none"
    >
      <div class="relative flex flex-row justify-center items-center">
        <Icon
          name="ic:sharp-bookmark"
          size="4em"
          class=" absolute top-0 -left-7 right-0 bottom-0 text-red-500"
        />
        <Icon
          :name="`simple-icons:` + carBrand"
          size="2.2em"
          class=" absolute  top-2.5 right-0 -left-3.5  bottom-0 text-white"
        />
      </div>
    </div>
    <div class="flex flex-col justify-evenly items-center h-full w-full bg-slate-50">
      <span class="text-lg font-normal py-2 text-slate-700 bg-slate-100 lg:text-base w-full border-b text-center mb-4 font-prim">{{ carName }}</span>
      <img
        :src="useAssets(carImage)"
        alt=""
        class="h-3/4 w-3/4 rounded-lg object-cover border shadow-inner"
      />
      
      <div class="flex flex-col justify-center items-center mt-2">
        <span class=" text-sm">Prix de la location:</span>
        <span class="text-red-500 font-extrabold text-lg">€{{ pricePerDay }} / Jour</span>
      </div>

      <NuxtLink :to="`/vehicule/`+carId">
        <div class="group  p-2 text-white mb-4 mt-2">
          <span class="font-bold pr-2 bg-slate-600 rounded-tl rounded-bl p-2 group-hover:bg-slate-700">Détails</span>
          <span class="font-bold pl-2 bg-red-600 rounded-tr rounded-br p-2 group-hover:bg-red-700">Réserver</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
