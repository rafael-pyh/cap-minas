export default function CoverageMap() {
    return (
        <section id="services" className="w-full h-fit lg:h-130 bg-slate-100" aria-labelledby="coverage-heading">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="lg:w-1/2">
                    <h2 id="coverage-heading" className="text-2xl font-bold">Áreas de cobertura</h2>
                    <p className="text-lg font-bold">
                        Atendemos as regiões do Triângulo Mineiro, Noroeste de Minas, Alto Paranaíba e Centro-Oeste. Com central de distribuição em Uberaba e Patos de Minas, garantimos agilidade e eficiência na entrega dos produtos.
                    </p>
                </div>
                <figure className="w-fit">
                    <img
                        className="lg:h-100 w-auto"
                        src="/maps/mg_map.png"
                        alt="Mapa de Minas Gerais com regiões atendidas"
                    />
                    <figcaption className="sr-only">
                        Mapa destacando as regiões atendidas pelo CAP MINAS em Minas Gerais
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}