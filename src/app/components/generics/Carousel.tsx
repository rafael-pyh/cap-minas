"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveLeft, MoveRight, Volume2, VolumeOff } from "lucide-react";

type CarouselItem = {
    type: "image" | "video";
    src: string;
    alt?: string;
    altSrc?: string;
};

interface CarouselProps {
    items: CarouselItem[];
    setHasPlayedVideo: (hasPlayed: boolean) => void;
    interval?: number;
}

export default function Carousel({ items, setHasPlayedVideo, interval = 5000 }: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const [muted, setMuted] = useState(true);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, [items.length]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const toggleMute = () => {
        if (videoRef.current) {
            const newMuted = !muted;
            videoRef.current.muted = newMuted;
            setMuted(newMuted);

            if (!newMuted) {
                videoRef.current.play().catch(err => {
                    console.warn("Navegador bloqueou reprodução com áudio:", err);
                });
            }
        }
    };

    useEffect(() => {
        if (items[current].type === "image") {
            const timer = setTimeout(() => {
                nextSlide();
            }, interval);

            return () => clearTimeout(timer);
        }
    }, [current, items, interval, nextSlide]);

    return (
        <div className="relative w-auto max-w-full mx-auto overflow-hidden" aria-roledescription="carousel">
            <AnimatePresence mode="wait">
                <motion.div
                    key={items[current].type === "image" ? current : "video"}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    className="w-fit h-[203px] md:h-[480px] flex items-end justify-center"
                >
                    {items[current].type === "image" ? (
                        <img
                            src={items[current].src}
                            alt={items[current].alt}
                            className="w-auto h-fit max-h-[480px] object-fill rounded-t-2xl"
                            loading="lazy"
                        />
                    ) : (
                        <div className="relative">
                            <video
                                preload="auto"
                                ref={videoRef}
                                controls={false}
                                autoPlay
                                muted={muted}
                                poster="/carousel/thumbnail.png"
                                aria-label={`Carousel video ${current + 1}`}
                                className="w-full h-full max-h-[480px] object-cover rounded-t-2xl"
                                onEnded={() => {
                                    setHasPlayedVideo(true);
                                    nextSlide();
                                }}
                            >
                                    <source src={items[current].src} type="video/mp4" />
                                    {items[current].altSrc && <source src={items[current].altSrc} type="video/mp4" />}
                                    Seu navegador não suporta vídeo.
                            </video>
                            <button
                                type="button"
                                aria-label={muted ? "Ativar áudio" : "Desativar áudio"}
                                className="absolute bottom-3 left-3 bg-black/30 hover:bg-black/50 text-white/80 hover:text-white p-2 rounded-full flex items-center justify-center"
                                onClick={toggleMute}
                            >
                                {muted ? <VolumeOff /> : <Volume2 />}
                            </button>
                        </div>

                    )}
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-3 right-3 flex">
                <button
                    type="button"
                    aria-label="Slide anterior"
                    onClick={prevSlide}
                    className="bg-black/40 hover:bg-black/60 text-white padding-1 rounded-l-full"
                >
                    <MoveLeft />
                </button>
                <button
                    type="button"
                    aria-label="Próximo slide"
                    onClick={nextSlide}
                    className="bg-black/40 hover:bg-black/60 text-white padding-1 rounded-r-full"
                >
                    <MoveRight />
                </button>
            </div>
        </div>
    );
}
