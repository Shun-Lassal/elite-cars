<script setup>
defineProps({
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
    <div class="flex flex-col justify-evenly items-center h-full w-full">
      <span class="text-xl font-light py-2">{{ carName }}</span>
      <img
        :src="useAssets(carImage)"
        alt=""
        class="h-3/4 w-3/4 rounded-lg object-cover"
      />
      <span class="mt-2 text-green-700 font-bold" v-if="available"
        >Disponible aujourd'hui</span
      >
      <span class="mt-2 text-red-700 font-bold" v-if="!available"
        >Indisponible</span
      >
      <div class="bg-red-600 rounded p-2 text-white mb-4 mt-2">
        <span class="pr-2 font-light">{{ pricePerDay }}€ / Jour</span>
        <span class="pl-2 border-l border-l-gray-800 font-bold">Réserver</span>
      </div>
    </div>
  </div>
</template>
