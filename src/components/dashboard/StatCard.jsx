const StatCard = ({ title, value, icon }) => {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#111111] p-5 transition hover:border-gray-700">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A1A1A] text-gray-300">
        {icon}
      </div>

      <p className="text-sm text-gray-400">{title}</p>

      <h3 className="mt-2 text-2xl font-semibold text-white">
        {value.toLocaleString()}
      </h3>
    </div>
  );
};

export default StatCard;
