import { Stack, Typography } from "@mui/material";

export default function FindTeamCardNumber({ currentNum, vacancyNum }) {

    return (
        <Stack direction="row" spacing={2} sx={{ gap: "40px", alignItems: "center", color: "#6c5044" }}>
            <Stack direction="column" sx={{ alignItems: "center" }}>
                <Typography fontSize="20px" fontWeight="bolder" lineHeight="20px">
                    {currentNum}
                </Typography>
                <Typography fontSize="12px" fontWeight="bold">
                    目前
                </Typography>
            </Stack>
            <Stack direction="column" sx={{ alignItems: "center" }}>
                <Typography fontSize="20px" fontWeight="bolder" lineHeight="20px">
                    {vacancyNum}
                </Typography>
                <Typography fontSize="12px" fontWeight="bold">
                    缺
                </Typography>
            </Stack>
        </Stack>
    )
}