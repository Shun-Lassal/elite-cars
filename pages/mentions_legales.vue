<template>
  <NavBar/>
  <div class="space-y-8 bg-slate-200">
    <h1 class="text-2xl font-medium border-b border-b-red-500 w-fit md:mx-auto mx-4 text-center pt-16 font-prim">Mentions Légales, conditions générales de location, etc.</h1>
    <div class="space-y-2 mx-16">
      <h2 class="text-xl font-medium border-b border-b-red-500 w-fit font-prim">Mentions Légales</h2>
      <div class="flex flex-col w-fit font-light space-y-1">
        <span class="font-light">Status: <span class="font-medium">Entreprise</span></span>
        <span class="font-light">Nom de l'entreprise: <span class="font-medium">Elite-Cars</span></span>
        <span class="font-light">Adresse de l'entreprise: <span class="font-medium">50 rue cantonnerie</span></span>
        <span class="font-light">Téléphone: <span class="font-medium">06 00 00 00 00</span></span>
        <span class="font-light">Adresse Mail: <span class="font-medium">elite-cars@elite.com</span></span>
        <span class="font-light">SIRET: <span class="font-medium">129 912 192</span></span>
      </div>

      <div class="flex flex-col w-fit font-light space-y-1">
        <span class="font-light">Réalisation du site web: <span class="font-medium">Shun Lassal</span></span>
        <span class="font-light">Directeur des publications: <span class="font-medium">Samy Hambli</span></span>
        <span class="font-light">Coordonnées de l'hébergeur: <span class="font-medium">Ovh Cloud</span></span>
      </div>
    </div>

    <div class="space-y-2 bg-slate-100 px-16 py-8">
      <h2 class="text-xl font-medium border-b border-b-red-500 w-fit font-prim">Conditions générales de location</h2>
      <div class="flex flex-col w-fit font-light space-y-1">
        <span>Les prix de location sont indiqués sous les véhicules présentés</span>
        <span>Toute location de véhicule nécessite une caution de 1500€ en cas de dédommagement du véhicule</span>
        <span>La durée de location minimale est de 1 jour ouvré</span>
        <span>Les frais supplémentaires</span>
        <span>Les conditions d'annulations</span>
        <span>Les conditions d'utilisation du véhicule</span>
        <span>Les responsabilités du client</span>
        <span>Les responsabilités de l'entreprise</span>
        <span>Les clauses de garantie</span>
      </div>
    </div>

    <div class="space-y-2 mx-16">
      <h2 class="text-xl font-medium border-b border-b-red-500 w-fit font-prim">Restrictions de location</h2>
      <div class="flex flex-col w-fit font-light space-y-1">
        <span>Nous avons le droit de vous interdire la location de nos véhicules</span>
        <span>Nous acceptons pas les baileurs dont l'âge est inférieur à 20 ans et moins d'un an et demi d'ancienneté d'un permis de conduire valide</span>
        <span>La limite de kilométrage est défini sur chaque véhicule de manière journalière, chaque kilomètre au dessus de celle-ci entrainera l'ajout de 0.50€ de frais supplémentaire à la fin de la location.</span>
        <span>Nos véhicules ne peuvent pas quitter le territoire français</span>
      </div>
    </div>

    <div class="space-y-2 bg-slate-100 px-16 py-8">
      <h2 class="text-xl font-medium border-b border-b-red-500 w-fit font-prim">Politique de confidentialité</h2>
      <div class="flex flex-col w-fit font-light space-y-1">
        <span>Nous collectons seulement les informations que vous avez fournis lors d'une réservation</span>
        <span>La collection des données passent par le remplissage des formulaires de réservation</span>
        <span>Nous collectons ces données dans le but de gérer les réservations, facturer les clients et se protéger lors de conflits avec le loueur</span>
        <span>Aucune donnée n'est partagée à des tiers, celles-ci sont stockées dans nos bases de données de façon sécurisées</span>
        <span>Nous gardons vos données pour une durée de 2ans maximum, il vous est possible de nous demander la suppression de celles-ci 4 mois après un bail de location</span>
        <span>Vous avez également le droit de nous demander quelles données nous possèdons sur vous</span>
        <span>Merci de contacter le responsable de l'entreprise si vous avez d'autres questions concernant la conservation des données.</span>
      </div>
    </div>

    <div class="space-y-2 mx-16 pb-16">
      <h2 class="text-xl font-medium border-b border-b-red-500 w-fit font-prim">Cookies</h2>
      <div class="flex flex-col w-fit font-light space-y-1">
        <span>Nous ne partageons aucuns de nos cookies à des tiers</span>
        <span>Vous acceptez nos cookies à partir du moment où vous consultez le site</span>
      </div>
    </div>
  </div>
  <FootView/>
</template>