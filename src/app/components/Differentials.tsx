import { CalendarCheck, Store, Map, Users } from "lucide-react";
import Card from "./generics/Card";

export default function Differentials() {
    return (
        <section
            id="differentialsSection"
            aria-labelledby="differentials-heading"
        >   
        <div className="lg:w-5/12">
            <h2 id="differentials-heading" className=" font-bold">A CAP MINAS conta com diversos diferenciais, como</h2>

        </div>
            <ul className="w-full flex flex-col lg:flex-row items-stretch justify-between md:gap-4">
                <li className="flex items-stretch lg:w-1/4">
                    <Card
                        title="Mais de 3.000 pontos de vendas"
                        description="Pontos de venda espalhados pelas regiões do Triângulo Mineiro, Alto Paranaiba, Noroeste de Minas e Centro-oeste de Minas"
                        icon={<Store />}
                        className="w-full"
                        titleStyle="text-[1.2rem]"
                        descriptionStyle="text-sm"
                    />
                </li>
                <li className="flex items-stretch lg:w-1/4">
                    <Card
                        title="Realizamos atendimentos semanais"
                        description="Atendemos mais de 1.800 clientes por semana atualmente."
                        icon={<CalendarCheck />}
                        className="w-full"
                        titleStyle="text-[1.2rem]"
                        descriptionStyle="text-sm"
                    />
                </li>
                <li className="flex items-stretch lg:w-1/4">
                    <Card
                        title="Municípios de MG atendidos"
                        description="A CAP MINAS já está presente em mais de 100 municípios da região de Minas Gerais."
                        icon={<Map />}
                        className="w-full"
                        titleStyle="text-[1.2rem]"
                        descriptionStyle="text-sm"
                    />
                </li>
                <li className="flex items-stretch lg:w-1/4">
                    <Card
                        title="Atendemos todos os públicos"
                        description="Do pequeno varejo às grandes redes, atendemos todos os perfis de clientes com soluções sob medida."
                        icon={<Users />}
                        className="w-full"
                        titleStyle="text-[1.2rem]"
                        descriptionStyle="text-sm"
                    />
                </li>
            </ul>
        </section>
    );
};
