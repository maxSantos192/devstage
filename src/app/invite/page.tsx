import Image from "next/image";
import logo from "../../assets/logo.svg";
import Ranking from "./components/ranking";
import Stats from "./components/stats";
import InviteLinkInput from "./components/invite-link-input";

const InvitePage = () => {
  const inviteLink = "http://localhost:3000/123456798";

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between gap-16 md:flex-row">
      <div className="flex w-full max-w-[550px] flex-col gap-10">
        <div className="relative h-[30px] w-[108.5px]">
          <Image src={logo} alt="Devstage" fill />
        </div>
        <div className="space-y-2">
          <h1 className="font-heading text-4xl leading-none font-semibold text-gray-100">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>
        </div>
        <InviteLinkInput inviteLink={inviteLink} />
        <Stats />
      </div>
      <Ranking />
    </div>
  );
};

export default InvitePage;
