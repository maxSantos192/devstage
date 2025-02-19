import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

const Stats = () => {
  const statsInfo = [
    { icon: MousePointerClick, value: 1042, label: "Acessos ao link" },
    { icon: BadgeCheck, value: 875, label: "Inscrições feitas" },
    { icon: Medal, value: "3º", label: "Posição no ranking" },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {statsInfo.map((info) => (
        <div
          key={info.label}
          className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7"
        >
          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            {info.value}
          </span>
          <span className="text-center text-sm leading-none text-gray-300">
            {info.label}
          </span>
          <info.icon className="text-purple absolute top-3 left-3 size-5" />
        </div>
      ))}
    </div>
  );
};

export default Stats;
