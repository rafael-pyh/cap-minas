import { Snowflake, Truck } from "lucide-react";
import LightCard from "./generics/LightCard";

export default function Deliveries() {
    return (
        <section id="deliveries" className="w-full flex flex-col md:flex-row padding-b-0 justify-between" aria-labelledby="deliveries-heading">
            <div className="md:w-1/2 flex flex-col h-full">
                <h2 id="deliveries-heading" className="font-bold">Entregas seguras e eficientes</h2>
                <p className="md:-mt-1 mb-2">A CAP MINAS garante qualidade e excelência no atendimento ao cliente</p>
            </div>
            <ul className="md:w-2/5 flex flex-col">
                <li className="w-full m-0">
                    <LightCard
                        icon={<Snowflake />}
                        description="Nossos caminhões são equipados com opções de temperatura para resfriados e secos."
                        className="md:w-5/6"
                    />

                </li>
                <li>
                    <LightCard
                        icon={<Truck />}
                        description="Os veículos são monitorados por tecnologia de rastreio, permitindo um controle preciso do status das entregas."
                        className="md:w-5/6"
                    />
                </li>
                <li>
                    <LightCard
                        icon={<Truck />}
                        description="Na CAP MINAS, garantimos qualidade e entrega pontual, com armazenamento e distribuição eficientes para sua tranquilidade."
                        className="md:w-5/6"
                    />
                </li>
            </ul>
        </section>
    );
}