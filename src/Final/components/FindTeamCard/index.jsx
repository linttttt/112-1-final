import { Box, Stack } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

// import catCard from './img/catCard.svg'
// import catMatched from './img/catMatched.svg'
import catCard from './img/catCard.png'
import catHand from './img/catHand.png'

import FindTeamCardTitle from './FindTeamCardTitle';
import FindTeamCardNumber from './FindTeamCardNumber';
import FindTeamCardDescription from './FindTeamCardDescription';
import FindTeamCardContactBtn from './FindTeamCardContactBtn';



export default function FindTeamCard({ project }) {

    return (
        <Grid2 xs={12} sm={6} md={4} xl={3}>
            <FinalCard project={project} />
        </Grid2>
    )

}
export function FinalCard({ project }) {

    let matched = project["Vacancy Number of Teammate"] > 0 ? "hidden" : "visible"
    let opacityChange = project["Vacancy Number of Teammate"] > 0 ? 1 : 0.5

    return (
        <Box sx={{ position: "relative", height: "400px", minWidth: "260px" }}>
            <img src={catCard} width="100%" height="100%" />
            <Box sx={{ position: "absolute", width: "69%", height: "62%", bottom: "1.6%", left: "7%", backgroundColor: "rgba(255, 255, 255, 0.7)", borderRadius: "10px" }}>
                <Stack sx={{ alignItems: "center", padding: "4px", height: "calc(100% - 8px)", opacity: opacityChange }}>
                    <FindTeamCardTitle title={project["Title"]} />
                    <FindTeamCardNumber currentNum={project["Current Number of Teammates"]} vacancyNum={project["Vacancy Number of Teammate"]} />
                    <FindTeamCardDescription description={project["Description"]} vacancyNum={project["Vacancy Number of Teammate"]} />
                </Stack>
                <img src={catHand} width="90%" height="102%" style={{ position: "absolute", bottom: "-2px", left: "-8%", visibility: matched }} />
                <FindTeamCardContactBtn contactPerson={project["Contact Person"]} contactEmail={project["Contact Email"]} />

            </Box>
        </Box>
    )
}




