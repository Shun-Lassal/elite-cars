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
          <div
            class="pl-0 md:ml-4 flex items-center font-light hover:border-b border-b-black"
          >
            <NuxtLink to="/voitures">
              <Icon name="tabler:car" size="1.5em" />
              <span class="pl-4 text-lg">Voitures</span>
            </NuxtLink>
          </div>
          <div
            class="flex items-center font-light hover:border-b border-b-black"
          >
            <NuxtLink to="/bateaux">
              <Icon name="tabler:speedboat" size="1.5em" />
              <span class="pl-4 text-lg">Bateaux</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-row justify-center items-start w-2/4">
        <NuxtLink to="/">
          <img src="../assets/logo-no-background.svg" class="w-30 h-10" />
        </NuxtLink>
      </div>
      <div
        class="flex flex-1 flex-row justify-end items-center md:justify-center space-x-2 w-1/3"
      >
        <Icon name="uil:snapchat-square" size="1.5em" class="" />
        <Icon name="uil:instagram" size="1.5em" class="" />
        <div class="pr-2 sm:pr-4 flex flex-row items-center">
          <Icon name="uil:phone" size="1.5em" class="" />
          <span class="hidden md:block text-red-500 pl-1"
            ><span class="text-black">+33 6</span> 00 00 00 00</span
          >
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-start border-b border-solid border-b-red-500 shadow-lg top-0 z-20 relative md:hidden"
      v-if="mobileHamburger"
    >
      <div class="py-2 pl-4 border-b w-full flex flex-row items-center">
        <NuxtLink to="/voitures">
          <Icon name="tabler:car" size="1.5em" />
          <span class="pl-4 text-lg">Voitures</span>
        </NuxtLink>
      </div>
      <div class="py-2 pl-4 border-b w-full flex flex-row items-center">
        <NuxtLink to="/bateaux">
          <Icon name="tabler:speedboat" size="1.5em" />
          <span class="pl-4 text-lg">Bateaux</span>
        </NuxtLink>
      </div>
      <div class="py-2 pl-4 border-b w-full flex flex-row items-center">
        <NuxtLink to="/contact">
          <Icon name="uil:phone" size="1.5em" />
          <span class="pl-4 text-lg">Contact</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
