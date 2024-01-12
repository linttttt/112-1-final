import './App.css'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { fetchData } from './fetchData'

import FindTeamCard from './components/FindTeamCard'
import HideAppBar from './components/HideAppBar'
import SimpleBottomNavigation from './components/SimpleBottomNavigation'


function App() {

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
