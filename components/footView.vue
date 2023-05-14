<template>
  <div
      class="border-t border-t-red-500 bg-slate-100 flex flex-col md:flex-row justify-center items-center"
    >
      <div class="flex flex-col justify-center items-center my-8">
        <NuxtLink to="/" class="w-1/4">

          <img src="../assets/logo-no-background.svg" />
        </NuxtLink>
        <div class="flex space-x-4 mt-4">
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
        class="flex flex-col justify-center items-start space-y-4 text-ellipsis mb-8 md:mb-0 md:py-8"
      >
        <NuxtLink to="mentions_legales">
          <span class="text-slate-400 hover:text-slate-500">Mentions légales</span>
        </NuxtLink>
        <NuxtLink to="mentions_legales">
          <span class="text-slate-400 hover:text-slate-500">Conditions générales de location</span>
        </NuxtLink>
        <NuxtLink to="contact">
          <span class="text-slate-400 hover:text-slate-500">Contact</span>
        </NuxtLink>
      </div>
    </div>
</template>