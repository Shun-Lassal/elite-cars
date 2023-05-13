<template>
  <div class="h-screen bg-slate-50">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="flex items-center justify-center">
        <img class="w-3/4 h-3/4" src="../assets/logo-no-background.svg" alt="">
      </div>
      <form action="" class="lg:w-1/3 flex-initial border border-solid border-slate-300 rounded-lg bg-slate-100 shadow-md">
        <div class="p-4 flex flex-col justify-center items-center">
          <span class="text-center font-bold text-2xl my-6 text-gray-700">Connexion</span>
          <div class="flex flex-col mb-4">
            <label for="login" class="font-medium text-gray-600">Identifiant</label>
            <input type="text" class="bg-slate-200 p-1 rounded-sm outline-red-600 font-light border border-slate-300">
          </div>
          <div class="flex flex-col">
            <label for="password" class="font-medium text-gray-600">Mot de passe</label>
            <input type="password" class="bg-slate-200 p-1 rounded-sm outline-red-600 font-light border border-slate-300">
          </div>
          <div class="content-center mt-6 mb-4 py-1 flex flex-col justify-center items-center rounded-sm bg-red-600 hover:bg-red-700 transition-colors duration-300">
            <div class="">
              <button class="text-slate-50 rounded-sm py-1 px-4">Connexion</button>
            </div>
          </div>
        </div>
      </form>
      <div class="flex flex-row justify-center items-center bg-slate-400 mt-4 p-2 rounded group mb-32">
        <NuxtLink to="/">
          <Icon name="cil:arrow-left" class="mr-2 text-slate-50 group-hover:text-slate-800" />
          <span class="text-slate-50 font-light group-hover:text-slate-800">
            Retour à la page d'accueil
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
