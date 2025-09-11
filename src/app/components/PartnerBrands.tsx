"use client";

import Image from "next/image";

type PartnerBrandsProps = {
    logos: { src: string; name: string; url?: string }[];
};

export default function PartnerBrands({ logos }: PartnerBrandsProps) {
    const displayLogos = logos.length > 0 ? [...logos, ...logos] : [];

    return (
        <section
            className="w-full overflow-hidden bg-white padding-1 border-y border-slate-200"
            aria-labelledby="partner-brands-heading"
        >
            <ul className="flex gap-12 animate-scroll" aria-live="polite" aria-atomic="true" id="partner-brands-heading">
                {displayLogos.map((logo, idx) => (
                    <li
                        key={idx}
                        className="flex items-center justify-center w-24 mx-4 flex-shrink-0"
                    >
                        {logo.url ? (
                            <a
                                href={logo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visitar site da ${logo.name}`}
                            >
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name}`}
                                    width={100}
                                    height={50}
                                    loading="lazy"
                                    className="object-contain"
                                />
                            </a>
                        ) : (
                            <Image
                                src={logo.src}
                                alt={`${logo.name}`}
                                width={100}
                                height={50}
                                loading="lazy"
                                className="object-contain"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}
