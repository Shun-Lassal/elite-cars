<!-- eslint-disable no-undef -->
<script setup>
const route = useRoute()
let vehiculeId = parseInt(route.params.id)

const arrayVoitures = [
  {
    "id": 1,
    "nom": "Clio 5 RS Line",
    "constructeur": "Renault",
    "prix_location_journee": 50,
    "prix_reservation_journaliere": 20,
    "kilometrage_max_journalier": 200,
    "description": "La Clio 5 RS Line est une voiture compacte sportive avec un design élégant et des performances dynamiques. Parfaite pour les trajets en ville et les escapades sur route.",
    "informations_techniques": {
      "puissance_moteur": "147 ch",
      "moteur": "1.3L Turbo",
      "boite_vitesse": "Automatique",
      "consommation": "6.2 L/100km",
      "nombre_places": 5
    }
  },
  {
    "id": 4,
    "nom": "Class A A200 AMG",
    "constructeur": "Mercedes-Benz",
    "prix_location_journee": 80,
    "prix_reservation_journaliere": 30,
    "kilometrage_max_journalier": 250,
    "description": "La Class A A200 AMG est une berline haut de gamme avec un mélange parfait de luxe et de sportivité. Son intérieur raffiné et ses caractéristiques avancées en font une expérience de conduite exceptionnelle.",
    "informations_techniques": {
      "puissance_moteur": "188 ch",
      "moteur": "2.0L Turbo",
      "boite_vitesse": "Automatique",
      "consommation": "7.8 L/100km",
      "nombre_places": 5
    }
  },
  {
    "id": 2,
    "nom": "Golf Polo GTI",
    "constructeur": "Volkswagen",
    "prix_location_journee": 60,
    "prix_reservation_journaliere": 25,
    "kilometrage_max_journalier": 220,
    "description": "La Golf Polo GTI est une voiture compacte qui offre une conduite sportive et un intérieur confortable. Son moteur puissant et ses performances réactives en font un choix idéal pour les amateurs de conduite sportive.",
    "informations_techniques": {
      "puissance_moteur": "197 ch",
      "moteur": "2.0L Turbo",
      "boite_vitesse": "Automatique",
      "consommation": "7.2 L/100km",
      "nombre_places": 5
    }
  },
  {
  "id": 3,
  "nom": "Abarth 595 Pista",
  "constructeur": "Abarth",
  "prix_location_journee": 70,
  "prix_reservation_journaliere": 25,
  "kilometrage_max_journalier": 180,
  "description": "L'Abarth 595 Pista est une voiture de sport légère et agile avec un design distinctif et des performances exceptionnelles. Son moteur turbo et son échappement sport produisent un son unique qui ravira les passionnés de conduite.",
  "informations_techniques": {
    "puissance_moteur": "160 ch",
    "moteur": "1.4L Turbo",
    "boite_vitesse": "Manuelle",
    "consommation": "6.5 L/100km",
    "nombre_places": 4
  }
}];

if(typeof vehiculeId != 'number' || vehiculeId <= 0 )
{
  // eslint-disable-next-line no-undef
  navigateTo('/')
}
else 
{
  console.log('ID Okay!')
  console.log("Vérification en cours...");
  checkVehicleId(vehiculeId, arrayVoitures)
    .then((isVehicleIdPresent) => {
      console.log("Vérification terminée !");
      console.log(`ID du véhicule ${vehiculeId} présent : ${isVehicleIdPresent}`);
    });
}

const vehicule = ref(arrayVoitures.find(item => item.id === vehiculeId))

function checkVehicleId(vehicleId, vehicleArray) {
  return new Promise((resolve) => {
      const isVehicleIdPresent = vehicleArray.some((vehicle) => vehicle.id === vehicleId);
      resolve(isVehicleIdPresent);
// Simule un délai de chargement de 2 secondes
  });
}

</script>

<template>
  <NavBar />
  <div class="relative container mx-auto py-4">

    <div class="bg-red-500 absolute w-fit md:w-72 lg:w-96 mx-8 top-28 md:top-16 left-0 pl-2 shadow-lg">
      <h1 class="mx-2 text-2xl font-medium text-slate-50 drop-shadow-2xl ">{{ vehicule?.nom }}</h1>
    </div>

    <div class="bg-slate-100 m-4 shadow-md border border-slate-300 place-content-center items-center justify-items-center origin-center object-center content-center place-self-center">
      <div class="md:hidden flex flex-row w-fit items-center bg-slate-500 p-1 rounded group ml-4 mt-4">
        <Icon name="cil:arrow-left" size="" class="mr-2 text-slate-50 group-hover:text-slate-800" />
        <span class="text-slate-50 font-light group-hover:text-slate-800 w-fit">
          Retour à la liste des véhicules</span>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-start bg-slate-200 m-4">
        
        <div class="mr-0 md:mr-4 mb-1 flex flex-col p-1 bg-slate-200">
          <img class="w-fit border border-slate-200" :src="useAssets('pic' + vehiculeId + '.jpg')" alt="">
        </div>
        <div class="w-full h-full flex-initial flex flex-col justify-evenly items-center md:mr-1 border border-slate-300 mt-1">
          <div class="bg-slate-200 grid grid-cols-3 <lg:grid-rows-3 gap-0 relative justify-items-center w-full">
            <div class="h-16 w-16 sm:h-20 sm:w-20 md:h-32 md:w-32 flex flex-col justify-center items-center">
              <img class="object-contain bg-slate-100 p-0.5 border border-slate-300 shadow-md" :src="useAssets('pic1.jpg')" alt="">
            </div>
            <div class="h-16 w-16 sm:h-20 sm:w-20 md:h-32 md:w-32 flex flex-col justify-center items-center">
              <img class="object-contain bg-slate-100 p-0.5 border border-slate-300 shadow-md" :src="useAssets('pic2.jpg')" alt="">
            </div>
            <div class="h-16 w-16 sm:h-20 sm:w-20 md:h-32 md:w-32 flex flex-col justify-center items-center">
              <img class="object-contain bg-slate-100 p-0.5" :src="useAssets('pic4.jpg')" alt=""> 
            </div>
          </div>
          <div class="bg-slate-200 w-full border-t border-t-slate-300 ">
            <div class="w-full flex">
              <span class=" text-green-700 font-bold text-center border-b border-b-slate-300 w-full">Disponible</span>
            </div>
            <div class="py-1 px-2 flex flex-row justify-between items-center bg-slate-200 text-gray-700">
              <span class="font-medium">Modèle:</span>
              <span class="font-light">{{ vehicule?.nom }}</span>
            </div>
            <div class="py-1 px-2 flex flex-row justify-between items-center bg-slate-300 text-gray-700">
              <span class="font-medium">Constructeur:</span>
              <span class="font-light">{{ vehicule?.constructeur }}</span>
            </div>
            <div class="py-1 px-2 flex flex-row justify-between items-center bg-slate-200 text-gray-700">
              <span class="font-medium">Prix location journée:</span>
              <span class="font-light">{{ vehicule?.prix_location_journee }} €</span>
            </div>
            <div class="py-1 px-2 flex flex-row justify-between items-center bg-slate-300 text-gray-700">
              <span class="font-medium">Prix réservation:</span>
              <span class="font-light">{{ vehicule?.prix_reservation_journaliere }} €</span>
            </div>
            <div class="py-1 px-2 flex flex-row justify-between items-center bg-slate-200 border-b border-b-slate-300 text-gray-700">
              <span class="font-medium">Kilométrage maximum / jour:</span>
              <span class="font-light">{{ vehicule?.kilometrage_max_journalier }} €</span>
            </div>
          </div>
          <div class="rounded-sm bg-red-600 hover:bg-red-700 transition-colors duration-300 my-1 flex flex-col ">
            <button class="text-slate-50 rounded-sm py-1 px-4 text-center">Réserver maintenant</button>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-start mx-4 mb-4 p-4 bg-slate-200">
        <span class="border-b border-b-slate-300 w-full pb-1 mb-4 font-medium">Description:</span>
        <p class="font-light ">{{ vehicule?.description }}</p>
        <div>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FootView />
</template>