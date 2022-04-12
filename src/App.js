import React,{useState,useEffect} from 'react'
import Tours from './Tours'
import Loading from './Loading'
import './App.css'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tour, setTour] = useState([]);

  const removeTour = (id) => {
    const mytour = tour.filter((value) => value.id !== id)
    setTour(mytour)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json()
      setLoading(false)
      setTour(data)
    }
    catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData()
  },[])


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tour.length === 0) {
    return (
      <main>
        <h2 className='title'>No Tours Left</h2>
        <button className='btn' onClick={()=> fetchData()}>Refresh</button>
      </main>
    )
  }
 
  return (
    <main>
      <Tours data ={tour} remove={removeTour} />
    </main>
  )
}

export default App;