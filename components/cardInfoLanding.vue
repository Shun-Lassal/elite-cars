<script setup>
defineProps({
  carName: String,
  kmPerDay: Number,
  pricePerDay: Number,
});
</script>

<template>
  <div
    class="absolute flex flex-row justify-start items-end top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent via-transparent z-10"
  >
    <div class="flex flex-col ml-4 mb-10 md:ml-16 md:mb-16 lg:ml-24 lg:mb-24">
      <span class="text-white font-bold text-xl md:text-3xl">{{
        carName
      }}</span>
      <span class="text-white font-medium text-lg md:text-2xl"
        >{{ pricePerDay }}€ / Jour</span
      >
      <span class="text-white font-normal text-md md:text-xl"
        >{{ kmPerDay }} KMs</span
      >
      <div
        class="bg-red-600 p-1 md:p-2 shadow shadow-black group w-fit rounded"
      >
        <span class="text-white font-bold group-hover:border-b border-b-white"
          >Réserver maintenant</span
        >
      </div>
    </div>
  </div>
</template>
