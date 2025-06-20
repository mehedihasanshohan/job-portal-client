const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    location,
    jobType,
    category,
    salaryRange,
    company_logo,
  } = job;

  return (
    <div className="bg-[#8885a5] text-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* Logo & Company */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={company_logo}
          alt={company}
          className="w-12 h-12 rounded-full border border-gray-300 bg-white object-contain"
        />
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>

      {/* Job Info */}
      <div className="space-y-1 text-sm mb-4">
        <p><span className="font-semibold">📍 Location:</span> {location}</p>
        <p><span className="font-semibold">🕒 Type:</span> {jobType}</p>
        <p><span className="font-semibold">📂 Category:</span> {category}</p>
        <p>
          <span className="font-semibold">💰 Salary:</span>{" "}
          {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
        </p>
      </div>

      <button className="mt-4 w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-cyan-700 transition">
        View Details
      </button>
    </div>
  );
};

export default HotJobCard;
