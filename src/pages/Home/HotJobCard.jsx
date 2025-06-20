// const HotJobCard = ({ job }) => {
//   const {
//     title,
//     company,
//     location,
//     jobType,
//     category,
//     salaryRange,
//     company_logo,
//   } = job;

//   return (
//     <div className="bg-white/80 backdrop-blur-md border border-cyan-200 text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-6">
//       {/* Logo & Company */}
//       <div className="flex items-center gap-4 mb-4">
//         <img
//           src={company_logo}
//           alt={company}
//           className="w-12 h-12 rounded-full border border-gray-300 bg-white object-contain"
//         />
//         <div>
//           <h3 className="text-xl font-bold">{title}</h3>
//           <p className="text-sm text-gray-600">{company}</p>
//         </div>
//       </div>

//       {/* Job Info */}
//       <div className="space-y-1 text-sm mb-4">
//         <p><span className="font-semibold">📍 Location:</span> {location}</p>
//         <p><span className="font-semibold">🕒 Type:</span> {jobType}</p>
//         <p><span className="font-semibold">📂 Category:</span> {category}</p>
//         <p>
//           <span className="font-semibold">💰 Salary:</span>{" "}
//           {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
//         </p>
//       </div>

//       <button className="mt-4 w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-cyan-700 transition">
//         View Details
//       </button>
//     </div>
//   );
// };

// export default HotJobCard;


const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    location,
    jobType,
    category,
    salaryRange,
    company_logo,
    requirements,
  } = job;

  return (
    <div className="bg-white/70 backdrop-blur-md border border-cyan-100 text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-6 space-y-4">
      {/* Logo & Title */}
      <div className="flex items-center gap-4">
        <img
          src={company_logo}
          alt={company}
          className="w-12 h-12 rounded-full border border-gray-300 bg-white object-contain shadow"
        />
        <div>
          <h3 className="text-xl font-bold text-cyan-800">{title}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>

      {/* Job Info */}
      <div className="space-y-1 text-sm">
        <p><span className="font-semibold">📍 Location:</span> {location}</p>
        <p><span className="font-semibold">🕒 Type:</span> {jobType}</p>
        <p><span className="font-semibold">📂 Category:</span> {category}</p>
        <p>
          <span className="font-semibold">💰 Salary:</span>{" "}
          {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
        </p>
      </div>

      {/* Requirements */}
      {requirements?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {requirements.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-semibold rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Apply Button */}
      <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white font-semibold py-2 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
        🚀 Apply Now
      </button>
    </div>
  );
};

export default HotJobCard;
