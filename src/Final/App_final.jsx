import { useEffect, useState } from 'react'
import './App.css'
// import data_final from './data_final.json'
import { fetchData } from './fetchData'
// import axios from 'axios'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import FindTeamCard from './components/FindTeamCard'


function App() {

  // const dataObjects = create_dataObjects_from_data(data_final)

  // const ui = dataObjects ? <Grid2 container spacing={2} >

  //   {
  //     dataObjects.map((e, i) => {
  //       return (<FindTeamCard project={e} key={i} />)
  //     })
  //   }
  // </Grid2> : <div>loading...</div>
  // return (
  //   <>
  //     {ui}
  //   </>
  // )


  const [dataObjects, setDataObjects] = useState(null)

  const ui = dataObjects ? <Grid2 container spacing={2}>
    {
      dataObjects.map((e, i) => {
        return <FindTeamCard project={e} key={i} />
      })
    }
  </Grid2> : <div> loading....</div>

  useEffect(() => {
    fetchData().then(
      (res) => {
        setDataObjects(res)
      }
    )

  }, [])

  return (
    <>
      {ui}
    </>
  )

}


export default App
