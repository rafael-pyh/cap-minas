import { BadgeCheck, Star, TrendingUp } from "lucide-react";
import Card from "./generics/Card";

export default function Highlights() {
    return (
        <section
            id="differentials"
            className="dark-blue w-full flex flex-col text-start gap-6"
            aria-labelledby="highlights-heading"
        >
            <h2
                className="self-start text-slate md:text-1-5xl mt-10 font-semibold"
                id="highlights-heading"
            >
                Por que contar com a CAP Minas?
            </h2>
            <ul className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-4">
                <li className="lg:w-1/3 flex items-stretch">
                    <Card
                        icon={<TrendingUp aria-hidden="true" />}
                        title={"Fortalecimento de marca"}
                        description="Temos um excelente merchandising de impacto no ponto de venda, com as melhores campanhas, vendedores e ações de trade marketing."
                        titleStyle="text-[1.6rem]"
                    />
                </li>

                <li className="lg:w-1/3 flex items-stretch">
                    <Card
                        icon={<Star aria-hidden="true" />}
                        title={"Marcas líderes no mercado"}
                        description="Selecionamos as melhores marcas e produtos disponíveis, assegurando qualidade, credibilidade e satisfação para clientes e parceiros em todo o mercado."
                        titleStyle="text-[1.6rem]"
                    />
                </li>

                <li className="lg:w-1/3 flex items-stretch">
                    <Card
                        icon={<BadgeCheck aria-hidden="true" />}
                        title={"Priorização de qualidade"}
                        description="Compromisso inabalável com a excelência: oferecemos apenas produtos e serviços de alta qualidade, garantindo confiança, fidelização e crescimento sustentável para os clientes."
                        titleStyle="text-[1.6rem]"
                    />
                </li>
            </ul>
        </section>
    );
};