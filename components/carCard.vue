<script setup>
defineProps({
  carName: String,
  carBrand: String,
  carImage: String,
  pricePerDay: Number,
});
</script>

<template>
  <div
    class="flex flex-row justify-start items-start bg-gray-100 border border-gray-200 border-t border-t-red-500 rounded shadow-xl shadow-gray-400 relative"
  >
    <div
      class="absolute -top-2 left-4 sm:left-14 md:left-24 lg:left-8 right-0 bottom-0"
    >
      <div class="relative">
        <Icon
          name="ic:sharp-bookmark"
          size="4em"
          class="absolute top-0 left-0 right-0 bottom-0 text-red-500"
        />
        <Icon
          :name="`simple-icons:` + carBrand"
          size="2.2em"
          class="absolute top-2.5 right-0 left-3.5 bottom-0 text-white"
        />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <span class="text-xl font-light py-2">{{ carName }}</span>
      <img src="../assets/pic1.JPG" alt="" class="h-3/4 w-3/4 rounded-lg" />
      <div class="bg-red-600 rounded p-2 text-white my-4">
        <span class="pr-2 font-light">{{ pricePerDay }}€ / Jour</span>
        <span class="pl-2 border-l border-l-gray-800 font-bold">Réserver</span>
      </div>
    </div>
  </div>
</template>
