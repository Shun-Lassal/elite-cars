<template>
  <NavBar />
  <div class="flex md:flex-row flex-col-reverse justify-center items-center w-full ">
    <div class="border-t-2 border-t-red-500 md:border-t-0 md:border-r-red-500 md:border-r-2 flex-1 my-16 md:my-16 flex flex-col items-center md:pr-8 mx-8">
      <h2 class="text-center font-bold text-2xl my-6 text-gray-700">Nous contacter</h2>
      <form class="w-full md:w-1/2 p-4 border border-solid border-slate-300 rounded-lg bg-slate-100 shadow-md space-y-2" autocomplete="on">
        <div class="flex flex-col">
          <label class="font-medium text-gray-600" for="nom">Nom :</label>
          <input class="bg-slate-200 p-1 rounded-sm outline-red-600 font-light border border-slate-300" type="text" id="nom" name="nom" required>
        </div>
        <div class="flex flex-col">
          <label class="font-medium text-gray-600" for="email">Adresse e-mail :</label>
          <input class="bg-slate-200 p-1 rounded-sm outline-red-600 font-light border border-slate-300" type="email" id="email" name="email" required>
        </div>
        <div class="flex flex-col">
          <label class="font-medium text-gray-600" for="telephone">Téléphone :</label>
          <input class="bg-slate-200 p-1 rounded-sm outline-red-600 font-light border border-slate-300" type="tel" id="telephone" name="telephone">
        </div>
        <div class="flex flex-col">
          <label class="font-medium text-gray-600" for="message">Message :</label>
          <textarea class="bg-slate-200 p-1 rounded-sm outline-red-600 font-light border border-slate-300" id="message" name="message" rows="4" required></textarea>
        </div>
        <div class="mt-6 mb-4 mx-auto py-1 place-self-center rounded-sm bg-red-600 hover:bg-red-700 transition-colors duration-300 w-1/2">
          <button class="text-slate-50 rounded-sm py-1 px-4 text-center w-full">
            Envoyer
          </button>
        </div>
      </form>
    </div>
    <div class="flex-1 w-full flex flex-col">
      <h2 class="text-center font-bold text-2xl my-6 text-gray-700">Nos réseaux sociaux</h2>
      <p class="font-light text-center md:text-left px-4 text-slate-700">Suivez-nous sur nos réseaux sociaux pour découvrir les dernières offres, promotions et actualités de notre entreprise de location de véhicules et profitez pleinement de votre expérience avec nous.</p>
      <div class="flex flex-row justify-center items-center space-x-1 relative h-56 w-full my-8 group">
        <div class="w-32 h-52 absolute -translate-x-12 -rotate-6 group-hover:-rotate-0 group-hover:-translate-x-48 duration-500 transition-all">
          <img :src="useAssets('pic5.jpg')" class="absolute w-full h-full " alt="">
          <div class="absolute w-full h-full bg-gradient-to-t from-slate-200 to-slate-200 via-transparent"></div>
        </div>
        <div class="w-32 h-52 absolute -translate-x-4 -rotate-3 group-hover:rotate-0 group-hover:-translate-x-20 duration-500 transition-all">
          <img :src="useAssets('pic6.jpg')" class="absolute w-full h-full" alt="">
          <div class="absolute w-full h-full bg-gradient-to-t from-slate-200 to-slate-200 via-transparent"></div>
        </div>
        <div class="w-32 h-52 absolute translate-x-4 rotate-3 group-hover:rotate-0 group-hover:translate-x-8 duration-500 transition-all">
          <img :src="useAssets('pic7.jpg')" class="absolute w-full h-full" alt="">
          <div class="absolute w-full h-full bg-gradient-to-t from-slate-200 to-slate-200 via-transparent"></div>
        </div>
        <div class="w-32 h-52 absolute translate-x-12 rotate-6 group-hover:rotate-0 group-hover:translate-x-36 duration-500 transition-all">
          <img :src="useAssets('pic8.jpg')" class="absolute w-full h-full" alt="">
          <div class="absolute w-full h-full bg-gradient-to-t from-slate-200 to-slate-200 via-transparent"></div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-evenly items-center space-y-3 md:space-x-4">
        <div class="flex flex-col justify-center items-center p-1 bg-slate-100 rounded-lg border border-slate-300 shadow">
          <Icon name="fa6-brands:square-snapchat" size="2em" class="text-3xl text-yellow-300 bg-slate-100 border border-slate-300 shadow-sm rounded-lg stroke-black"/>
          <span class="font-light text-slate-700 bg-slate-200 rounded-lg  px-1 border border-slate-300 m-1">EliteCars13</span>
        </div>
        <div class="flex flex-col justify-center items-center p-1 bg-slate-100 rounded-lg border border-slate-300 shadow">
          <Icon name="uil:instagram-alt" size="2em" class="border border-slate-300 shadow-sm text-3xl bg-gradient-to-tr from-purple-400 via-red-400 to-yellow-100 rounded-lg text-white "/>
          <span class="font-light text-slate-700 bg-slate-200 rounded-lg  px-1 border border-slate-300 m-1">EliteCarsMarseille</span>
        </div>
        <div class="flex flex-col justify-center items-center p-1 bg-slate-100 rounded-lg border border-slate-300 shadow">
          <Icon name="mdi:phone-in-talk" size="2em" class="border border-slate-300 shadow-sm text-3xl bg-gradient-to-tr text-white from-green-600 via-green-400 to-green-500 rounded-lg"/>
          <span class="font-light text-slate-700 bg-slate-200 rounded-lg  px-1 border border-slate-300 m-1">+33 6 00 00 00 00</span>
        </div>
      </div>
      <span class="text-center my-2 text-slate-700">Nous prennons vos réservations sur les réseaux sociaux!</span>
    </div>
  </div>
  <FootView />
</template>