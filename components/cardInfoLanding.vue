<script setup>
defineProps({
  carId: Number,
  carName: String,
  kmPerDay: Number,
  pricePerDay: Number,
});
</script>

<template>
  <div
    class="absolute flex flex-row justify-start items-end top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent via-transparent z-10"
  >
    <div class="flex flex-col ml-4 mb-10 md:ml-16 md:mb-16 lg:ml-24 lg:mb-24 space-y-1">
      <span class="text-slate-50 font-bold text-xl md:text-3xl border-b-red-500 border-b-2 font-prim w-fit">{{
        carName
      }}</span>
      <span class="text-slate-200 font-medium text-lg md:text-2xl font-prim"
        >{{ pricePerDay }}€ / Jour</span
      >
      <NuxtLink :to="`/vehicule/` + carId" class="pointer-events-auto bg-red-600 hover:bg-red-700 shadow shadow-black group w-fit rounded px-4">
        <button class="text-white font-bold rounded-sm  transition-colors duration-300 p-1 md:p-2"
        >Réserver maintenant</button
        >
      </NuxtLink>
    </div>
  </div>
</template>
