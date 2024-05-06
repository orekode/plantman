import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="p-6">

      <div className="h-[65vh] flex-center flex-col text-center">
        <div className=" w-full">
          <img src="/images/plant.gif" className="img-cover" />
        </div>

        <div className="name font-normal text-lg -mt-6">
          Hello Username
        </div>

        <Link to="/picture">
          <button className="btn-outline text-xs shadow-none w-max mt-3" style={{boxShadow: 'none', width: 'max-content'}}>Start Diagnosis</button>
        </Link>
        <Link to="/history">
          <button className="btn-dark text-xs shadow-none w-max mt-3" style={{boxShadow: 'none', width: 'max-content'}}>History</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Home