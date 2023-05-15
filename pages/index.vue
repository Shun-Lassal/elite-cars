<script setup>
import FootView from '~/components/footView.vue';

// eslint-disable-next-line no-undef
const carouselPage = ref(0);

function carouselMove(value = null) {

  if(value != null)
  {
    switch(value){
      case 1:
        carouselPage.value = 1
        break;
      case 2:
        carouselPage.value = 2
        break;
      case 3:
        carouselPage.value = 3
        break;
      default:
        carouselPage.value = 1
        break;
    }
  }
  else
  {
    switch (carouselPage.value) {
      case 1:
        carouselPage.value = 2;
        break;
      case 2:
        carouselPage.value = 3;
        break;
      case 3:
        carouselPage.value = 1;
        break;
      default:
        carouselPage.value = 1;
        break;
    }
    setTimeout(carouselMove, 5000);
  }
  
}

carouselMove();

</script>

<template>
  <div class="h-full">
    <NavBar />
    <div class="transition-all transform-gpu duration-500 ease-in-out">
      <!-- "CAROUSEL "-->
      <div class="bg-slate-100 object-contain" v-if="carouselPage == 1">
        <img
          src="../assets/pic1.jpg"
          class="object-cover w-full h-80 lg:h-160 md:h-128"
        />
        <cardInfoLanding
          car-name="Clio RS4"
          :km-per-day="150"
          :price-per-day="180"
        />
      </div>

      <div class="bg-slate-100 object-contain" v-if="carouselPage == 2">
        <img
          src="../assets/pic2.jpg"
          class="object-cover w-full h-80 lg:h-160 md:h-128"
        />
        <cardInfoLanding
          car-name="Golf GTI 2021"
          :km-per-day="150"
          :price-per-day="180"
        />
      </div>

      <div class="bg-slate-100 object-contain" v-if="carouselPage == 3">
        <img
          src="../assets/pic3.jpg"
          class="object-cover w-full h-80 lg:h-160 md:h-128"
        />
        <cardInfoLanding
          car-name="Fiat 500 Abarth"
          :km-per-day="180"
          :price-per-day="200"
        />
      </div>

      <!-- SELECT CAROUSEL ITEMS -->
      <div
        class="absolute top-0 left-0 right-0 bottom-0 flex flex-row justify-center items-end z-20 space-x-4 mb-1 md:mb-5"
      >
        <!-- Button 1-->
        <Icon
          name="ic:baseline-circle"
          size="1em"
          class="text-slate-50"
          v-if="carouselPage == 1"
        />
        <Icon
          name="ic:baseline-circle"
          size="1em"
          class="text-slate-500"
          @click="carouselMove(1)"
          v-if="carouselPage != 1"
        />

        <!-- Button 2-->
        <Icon
          name="ic:baseline-circle"
          size="1em"
          class="text-slate-50"
          v-if="carouselPage == 2"
        />
        <Icon
          name="ic:baseline-circle"
          size="1em"
          class="text-slate-500"
          @click="carouselMove(2)"
          v-if="carouselPage != 2"
        />

        <!-- Button 3-->
        <Icon
          name="ic:baseline-circle"
          size="1em"
          class="text-slate-50"
          v-if="carouselPage == 3"
        />
        <Icon
          name="ic:baseline-circle"
          size="1em"
          class="text-slate-500"
          @click="carouselMove(3)"
          v-if="carouselPage != 3"
        />
      </div>
    </div>
    <div class="border-t border-t-red-500 h-full bg-slate-100">
      <div class="container mx-auto">
        <div
          class="h-full flex flex-col justify-center items-center border-b border-b-red-500 pb-14"
        >
          <h2 class="text-3xl font-medium border-b border-b-red-500 mt-14 mb-8">
            Services de location
          </h2>
  
          <p
            class="px-4 md:px-16 mb-8 text-center text-xl font-semibold drop-shadow-md"
          >
            Explorez Marseille et ses environs à bord de nos voitures de location
            de qualité supérieure.
          </p>
          <div class="h-full px-4 md:px-16 text-ellipsis space-y-6 font-light">
            <p class="">
              Chez <span class="text-red-500 font-bold">ELITE-CARS</span>, nous
              sommes fiers de proposer une expérience de location de voitures haut
              de gamme à Marseille et dans ses environs, nous disposons d'une
              large sélection de voitures de qualité supérieure pour répondre à
              tous vos besoins de déplacement.
            </p>
            <p class="">
              Que vous soyez en visite à Marseille pour affaires ou pour le
              plaisir, notre équipe expérimentée est là pour vous aider à trouver
              la voiture de location parfaite pour votre voyage.
            </p>
            <p class="pb-6">
              Contactez-nous dès maintenant pour réserver votre voiture de
              location et découvrir la beauté de la Côte d'Azur à votre rythme.
            </p>
          </div>
        </div>
      </div>
      <div class="border-t bg-slate-200">
        <div class="h-40 flex flex-col justify-center items-center container mx-auto">
          <h2 class="text-2xl font-medium border-b border-b-red-500">
            Véhicules disponibles
          </h2>
        </div>
        <div
          class="grid lg:grid-cols-3 <lg:grid-cols-2 gap-8 px-12 md:px-24 pb-16 container mx-auto"
        >
          <carCard
            :car-id="1"
            :available="true"
            car-name="Clio 5 RS Line"
            car-brand="renault"
            car-image="pic1.jpg"
            :price-per-day="170"
          />
          <carCard
            :car-id="2"
            car-name="Golf Polo GTI"
            car-brand="volkswagen"
            car-image="pic2.jpg"
            :price-per-day="170"
          />
          <carCard
            :car-id="3"
            car-name="Abarth 595 Pista"
            car-brand="fiat"
            car-image="pic3.jpg"
            :price-per-day="170"
          />
          <carCard
            :car-id="4"
            car-name="Class A200 AMG"
            car-brand="mercedes"
            car-image="pic4.jpg"
            :price-per-day="170"
          />
        </div>
      </div>
    </div>
    <FootView />
  </div>
</template>
