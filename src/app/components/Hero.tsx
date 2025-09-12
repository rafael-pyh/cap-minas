"use client";
import Button from "./generics/Button";
import { CircleCheckBig } from "lucide-react";
import Carousel from "./generics/Carousel";
import { useState } from "react";

export default function Hero() {
    const [hasPlayedVideo, setHasPlayedVideo] = useState(false);
    return (
        <section
            id="about"
            className="flex flex-col lg:flex-row padding-y-0 justify-between items-stretch w-full h-fit gap-8"
            aria-labelledby="hero-heading"
        >
            <div className="lg:w-1/2 flex flex-col h-stretch justify-end mb-8 gap-2">
                <p className="text-green font-bold flex items-start gap-2 -mb-4">
                    <CircleCheckBig className="w-6 h-6 lg:w-4 lg:h-4" aria-hidden="true" />
                    Nossa média de positivação de marcas é muito superior à do mercado
                </p>
                <h1
                    id="hero-heading"
                    className="text-3xl md:text-5xl font-bold"
                >
                    Há mais de 30 anos distribuindo com logística ágil e eficiente
                </h1>
                <p className="text-xl">Somos sinônimo de experiência e confiança e temos uma distribuição robusta para mais de 200 municípios.</p>
                <div className="mt-4 flex gap-4">
                    <Button className="mr-4" cls="primary" aria-label="Conhecer mais sobre os serviços da CAP Minas">Conhecer mais nossos serviços</Button>
                    <Button cls="secondary" aria-label="Entrar em contato com a CAP Minas">Entrar em contato</Button>
                </div>
            </div>
            <div className="lg:w-1/2 h-stretch flex items-end">
                <Carousel
                    setHasPlayedVideo={setHasPlayedVideo}
                    items={[
                    ...(!hasPlayedVideo ? [
                        { type: "video" as const, src: "/carousel/institucional-648.mp4", alt: "Vídeo institucional CAP MINAS", altSrc:"/carousel/institucional-720.mp4" }
                    ] : []),
                    { type: "image" as const, src: "/carousel/artesano-banner.jpeg", alt: "Família Artesano" },
                    { type: "image" as const, src: "/carousel/bimbo-banner.jpeg", alt: "Familia Bimbo" },
                    { type: "image" as const, src: "/carousel/bisnaguito-banner.jpeg", alt: "Bisnaguito" },
                    { type: "image" as const, src: "/carousel/crocantissimo-banner.jpeg", alt: "Crocantíssimo" },
                    { type: "image" as const, src: "/carousel/familia-artesano-banner.jpeg", alt: "Família Artesano" },
                    { type: "image" as const, src: "/carousel/nutrella-banner.jpeg", alt: "Nutrella" },
                    { type: "image" as const, src: "/carousel/pullman-banner.jpeg", alt: "Familia Pullman" },
                    { type: "image" as const, src: "/carousel/rap10-banner.jpeg", alt: "Rap 10" },
                    { type: "image" as const, src: "/carousel/takis-banner.jpeg", alt: "Takis" },
                    { type: "image" as const, src: "/carousel/te-vi-pullman-banner.jpeg", alt: "Pullman" },
                ]} />
            </div>
        </section>
    );
}
