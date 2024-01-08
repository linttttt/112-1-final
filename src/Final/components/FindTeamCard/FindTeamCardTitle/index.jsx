import { Typography } from "@mui/material";

export default function FindTeamCardTitle({ title }) {

    return (
        <Typography fontSize="24px" fontWeight="bolder" sx={{ textAlign: "center" }}>
            {title}
        </Typography>
    )
}