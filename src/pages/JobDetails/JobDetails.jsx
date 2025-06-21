import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center py-10 text-gray-500">⏳ Loading job details...</div>;
  if (!job) return <div className="text-center py-10 text-red-500">❌ Job not found</div>;

  const {
    title,
    company,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-sky-50 to-white shadow-xl rounded-3xl border border-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <img src={company_logo} alt="Company Logo" className="w-24 h-24 rounded-xl border p-2 bg-white shadow-md" />
        <div>
          <h1 className="text-3xl font-bold text-cyan-800">{title}</h1>
          <p className="text-gray-600 text-lg">{company}</p>
          <p className="text-sm text-gray-500 mt-1">📍 {location} | 🕒 {jobType} | 🗂️ {category}</p>
        </div>
      </div>

      {/* Apply & Deadline */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-cyan-100/20 border border-cyan-200 p-4 rounded-xl">
          <p className="text-sm text-gray-500">💰 Salary</p>
          <p className="text-lg font-semibold text-cyan-700">
            {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
          </p>
        </div>
        <div className="bg-red-100/20 border border-red-200 p-4 rounded-xl">
          <p className="text-sm text-gray-500">📅 Deadline</p>
          <p className="text-lg font-semibold text-red-600">{applicationDeadline}</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-xl transition">
            🚀 Apply Now
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📝 Job Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">✅ Requirements</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 Responsibilities</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {responsibilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR Info */}
      <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
        <h2 className="text-lg font-semibold mb-1">👤 HR Contact</h2>
        <p><span className="font-medium text-gray-600">Name:</span> {hr_name}</p>
        <p><span className="font-medium text-gray-600">Email:</span> <a href={`mailto:${hr_email}`} className="text-cyan-600 hover:underline">{hr_email}</a></p>
      </div>
    </div>
  );
};

export default JobDetails;
