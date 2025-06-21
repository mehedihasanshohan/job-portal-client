import JobApply from "../JobApply/JobApply"
import Banner from "./Banner"
import HotJobs from "./HotJobs"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HotJobs></HotJobs>
      <JobApply></JobApply>
    </div>
  )
}

export default Home