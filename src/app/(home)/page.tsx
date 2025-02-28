import Image from "next/image";
import logo from "../../assets/logo.svg";
import { Radio } from "lucide-react";
import SubscriptionForm from "./subscription-form";

const Home = () => {
  return (
    <main className="mx-auto max-w-[1240px] px-5 py-8 md:py-0">
      <div className="flex min-h-dvh flex-col justify-center gap-16">
        <div className="flex flex-col items-center gap-8 md:items-start">
          <div className="relative h-[30px] w-[108.5px]">
            <Image src={logo} alt="Devstage" fill />
          </div>

          <h1 className="font-heading flex flex-col text-center text-4xl leading-none font-medium md:text-left md:text-7xl">
            <span className="text-blue">CodeCraft</span>
            Summit 2025
          </h1>
        </div>

        <div className="flex flex-col items-stretch gap-5 md:flex-row">
          <div className="flex-1 rounded-2xl border border-gray-600 bg-gray-700 p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-xl font-semibold text-gray-200">
                  Sobre o evento
                </h2>
                <span className="text-purple flex items-center gap-2 text-xs font-semibold">
                  <Radio className="size-5" />
                  AO VIVO
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                Um evento feito por e para pessoas desenvolvedoras apaixonadas
                por criar soluções inovadoras e compartilhar conhecimento. Vamos
                mergulhar nas tendências mais recentes em desenvolvimento de
                software, arquitetura de sistemas e tecnologias emergentes, com
                palestras, workshops e hackathons.
                <br />
                <br />
                Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
              </p>
            </div>
          </div>
          <SubscriptionForm />
        </div>
      </div>
    </main>
  );
};

export default Home;
