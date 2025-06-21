import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const JobApply = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    resume: '',
    linkedin: '',
    github: '',
    coverLetter: ''
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then(res => res.json())
      .then(data => setJob(data));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const applicationData = {
      ...form,
      jobId: id,
      jobTitle: job?.title,
      company: job?.company,
      appliedAt: new Date().toISOString()
    };
    console.log(applicationData);

    fetch('http://localhost:5000/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicationData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setSuccess(true);
          setForm({
            name: '',
            email: '',
            resume: '',
            linkedin: '',
            github: '',
            coverLetter: ''
          });
        }
      });
  };

  if (!job) return <div className="text-center mt-10 text-gray-500">Loading job info...</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-cyan-700 mb-2">Apply for: {job.title}</h2>
      <p className="text-gray-600 mb-6">Company: {job.company}</p>

      {success && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-800 border border-green-200">
          ✅ Application submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Full Name"
            className="w-full p-3 border border-gray-300 text-gray-800 rounded-lg"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email Address"
            className="w-full p-3 border border-gray-300 text-gray-800 rounded-lg"
            required
          />
        </div>

        {/* Resume Link */}
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
            Resume Link
          </label>
          <input
            id="resume"
            name="resume"
            value={form.resume}
            onChange={handleChange}
            type="url"
            placeholder="https://your-resume-link.com"
            className="w-full p-3 border border-gray-300 text-gray-800 rounded-lg"
            required
          />
        </div>

        {/* LinkedIn Profile */}
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn Profile
          </label>
          <input
            id="linkedin"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            type="url"
            placeholder="https://linkedin.com/in/yourname"
            className="w-full p-3 border border-gray-300 text-gray-800 rounded-lg"
            required
          />
        </div>

        {/* GitHub Profile */}
        <div>
          <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
            GitHub Profile
          </label>
          <input
            id="github"
            name="github"
            value={form.github}
            onChange={handleChange}
            type="url"
            placeholder="https://github.com/yourusername"
            className="w-full p-3 border border-gray-300 text-gray-800 rounded-lg"
            required
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={form.coverLetter}
            onChange={handleChange}
            placeholder="Write a short cover letter..."
            rows="5"
            className="w-full p-3 border border-gray-300 text-gray-800 rounded-lg"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 font-semibold rounded-lg"
        >
          🚀 Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApply;
