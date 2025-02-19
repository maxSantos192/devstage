import Image from "next/image";
import gold from "../../../assets/medal-gold.svg";
import silver from "../../../assets/medal-silver.svg";
import cooper from "../../../assets/medal-cooper.svg";

const Ranking = () => {
  const rankingInfo = [
    { name: "André Souza", place: "1º", points: 1030, medal: gold },
    { name: "Maria Silva", place: "2º", points: 900, medal: silver },
    { name: "João Pereira", place: "3º", points: 800, medal: cooper },
  ];

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>
      {rankingInfo.map((info) => (
        <div key={info.place} className="space-y-4">
          <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
            <span className="text-small text-gray-300">
              <span className="font-semibold">{info.place}</span> | {info.name}
            </span>
            <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
              {info.points}
            </span>
            <Image
              src={info.medal}
              alt="Medalha de outro"
              className="absolute top-0 right-8"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ranking;
