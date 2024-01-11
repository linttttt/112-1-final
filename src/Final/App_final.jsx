import { useEffect, useState } from 'react'
import './App.css'
import data_final from './data_final.json'
import { create_dataObjects_from_data, fetchData } from './fetchData'
// import axios from 'axios'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import FindTeamCard from './components/FindTeamCard'
import { CircularProgress, Stack } from '@mui/material'
import SimpleBottomNavigation from './components/SimpleBottomNavigation'
import HideAppBar from './components/HideAppBar'


function App() {

  // const dataObjects = create_dataObjects_from_data(data_final)

  // const ui = dataObjects ? <>
  // <HideAppBar/>
  //   <Grid2 container spacing={2}>

  //     {
  //       dataObjects.map((e, i) => {
  //         return (<FindTeamCard project={e} key={i} />)
  //       })
  //     }
  //   </Grid2>
  //   <SimpleBottomNavigation/>
  // </> : <div>loading...</div>
  // return (
  //   <>
  //     {ui}
  //   </>
  // )


  const [dataObjects, setDataObjects] = useState(null)

  const ui = dataObjects ? <>
    <HideAppBar />
    <Grid2 container spacing={2}>
      {
        dataObjects.map((e, i) => {
          return <FindTeamCard project={e} key={i} />
        })
      }
    </Grid2>
    <SimpleBottomNavigation />
  </> : <>
    <HideAppBar />
    <CircularProgress sx={{ position: "absolute", top: "calc(50% - 20px)", left: "calc(50% - 20px)", color: "#6c5044" }} />
  </>

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
