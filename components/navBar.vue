<script setup>
// eslint-disable-next-line no-undef
const mobileHamburger = ref(false);
</script>

<template>
  <nav class="bg-slate-100 top-0 sticky z-20">
    <div
      class="flex flex-row items-center h-16 border-b border-solid border-b-red-500"
    >
      <div
        class="w-1/3 flex flex-1 flex-row justify-start md:justify-center items-center"
      >
        <div class="visible md:hidden lg:hidden">
          <Icon
            name="cil:hamburger-menu"
            size="1.5em"
            class="ml-4 md:ml-0"
            @click="
              mobileHamburger
                ? (mobileHamburger = false)
                : (mobileHamburger = true)
            "
          />
        </div>
        <div
          class="hidden sm:space-x-8 md:visible md:space-x-8 md:flex flex-row justify-center items-center text-gray-900"
        >
          <NuxtLink to="/voitures" class="pl-0 md:ml-4 flex items-center font-light border-b hover:border-b-slate-700 text-slate-700">
            <Icon name="tabler:car" size="1.5em" />
            <span class="pl-4 text-lg font-second ">Voitures</span>
          </NuxtLink>
          <NuxtLink to="/bateaux" class="flex items-center font-light border-b hover:border-b-slate-700 text-slate-700">
            <Icon name="tabler:speedboat" size="1.5em" />
            <span class="pl-4 text-lg font-second">Bateaux</span>
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/" class="flex-1 flex flex-row justify-center items-start w-2/4">
        <img src="../assets/logo-no-background.svg" class="w-30 h-10" />
      </NuxtLink>
      <div
        class="flex flex-1 flex-row justify-end items-center md:justify-center space-x-2 w-1/3 text-slate-700"
      >
        <Icon name="uil:snapchat-square" size="1.5em" class="" />
        <Icon name="uil:instagram" size="1.5em" class="" />
        <div class="pr-2 sm:pr-4 flex flex-row items-center">
          <Icon name="uil:phone" size="1.5em" class="" />
          <span class="hidden md:block text-red-600 pl-1"
            ><span class="text-slate-700">+33 6</span> 00 00 00 00</span
          >
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-start border-b border-solid border-b-red-500 shadow-lg top-0 z-20 relative md:hidden text-slate-700"
      v-if="mobileHamburger"
    >
        <NuxtLink to="/voitures" class="py-2 px-4 border-b w-full flex flex-row items-center">
          <Icon name="tabler:car" size="1.5em" />
          <span class="pl-4 text-lg font-prim">Voitures</span>
        </NuxtLink>
        <NuxtLink to="/bateaux" class="py-2 px-4 border-b w-full flex flex-row items-center">
          <Icon name="tabler:speedboat" size="1.5em" />
          <span class="pl-4 text-lg font-prim">Bateaux</span>
        </NuxtLink>
        <NuxtLink to="/contact" class="py-2 px-4 border-b w-full flex flex-row items-center">
          <Icon name="uil:phone" size="1.5em" />
          <span class="pl-4 text-lg font-prim">Contact</span>
        </NuxtLink>
    </div>
  </nav>
</template>
