import { useState, useEffect } from "react"
import HotJobCard from "./HotJobCard";

const HotJobs = () => {

  const [jobs, setJobs] = useState([]);

  useEffect( ()=>{
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        setJobs(data);
      })

    }, [])

  return (
    <div>
        <h2>jobs:{jobs.length}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <HotJobCard key={job._id} job={job} />
          ))}
        </div>
    </div>
  )
}

export default HotJobs