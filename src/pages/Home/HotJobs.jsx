import { useState, useEffect } from "react"

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

    </div>
  )
}

export default HotJobs