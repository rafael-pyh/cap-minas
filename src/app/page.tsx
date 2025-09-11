import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import PartnerBrands from "./components/PartnerBrands";
import CoverageMap from "./components/CoverageMap";
import Deliveries from "./components/Deliveries";
import Differentials from "./components/Differentials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PartnerBrands
        logos={
          [
            { src: "/logos/bimbo-logo.png", name: "Grupo Bimbo", url: "https://www.bimbobrasil.com.br/" },
            { src: "/logos/bel-chocolates.png", name: "Bel Chocolates", url: "https://www.zdalimentos.com.br/" },
            { src: "/logos/carolina-logo.png", name: "Laticínios Carolina", url: "https://www.latcarolina.com.br/" },
            { src: "/logos/mezzani-logo.png", name: "Mezzani", url: "https://www.mezzani.com.br/" },
            { src: "/logos/natural-one-logo.png", name: "Natural One", url: "https://www.natone.com.br/" },
            { src: "/logos/peccin-logo.png", name: "Peccin", url: "https://www.peccin.com.br/" },
            { src: "/logos/vovo-clara-logo.png", name: "Vovó Clara", url: "https://www.vovoclara.com.br/" },
            { src: "/logos/ana-maria-logo.png", name: "Ana Maria", url: "https://www.bolinhosanamaria.com.br/" },
            { src: "/logos/pullman-logo.png", name: "Pullman", url: "https://www.bimbobrasil.com.br/" },
            { src: "/logos/nutrella-logo.png", name: "Nutrella", url: "https://www.bimbobrasil.com.br/" },
            { src: "/logos/artesano-logo.png", name: "Artesano", url: "https://www.bimbobrasil.com.br/" },
            { src: "/logos/crocantissimo-logo.png", name: "Crocantíssimo", url: "https://www.bimbobrasil.com.br/" },
            { src: "/logos/pinguinos-logo.png", name: "Pinguinos", url: "https://www.bimbobrasil.com.br/" },
            { src: "/logos/plusvita-logo.png", name: "Plus Vita", url: "https://www.bimbobrasil.com.br/" }, 
            { src: "/logos/rap10-logo.png", name: "Rap 10", url: "https://www.bimbobrasil.com.br/" },
            { src: "/logos/takis-logo.png", name: "Takis", url: "https://www.bimbobrasil.com.br/" },
            { src: "/logos/tradicao-logo.png", name: "Tradição", url: "https://www.bimbobrasil.com.br/" },
          ]
        } 
      />
      <CoverageMap />
      <Highlights />
      <Deliveries />
      <Differentials />
      <Footer />
    </div>
  );
}
