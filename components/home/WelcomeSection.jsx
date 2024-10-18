import React from "react";

export default function WelcomeSection() {
  return (
    <div className=" absolute top-0 left-0 w-full flex flex-col gap-5 items-center justify-center h-svh">
      <p className=" bg-white/20 backdrop-blur-md w-full text-center text-4xl p-5 text-white font-semibold">
        Bienvenue Dans La premiére agence de location de voiture électrique en
        Tunisie
      </p>
      <span className="text-white p-2 text-sm text-center sm:w-[600px]">
        Bienvenue chez TESLA_ALVT, votre partenaire de confiance pour tous vos
        besoins en location de véhicules. Notre agence met à votre disposition
        une large gamme de véhicules récents et soigneusement entretenus pour
        répondre à toutes vos exigences.
      </span>
      <button className=" bg-white p-3 rounded-lg text-xl font-semibold hover:opacity-90 transition-all">
        Commencer à louer
      </button>

      <div className="h-svh w-full absolute top-0 left-0 -z-10 ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="abF0uRhidP4hdUBc2Jmir_desktop.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
