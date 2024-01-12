import { useState } from 'react'
import { Alert, Backdrop, Button, Typography } from "@mui/material";

export default function FindTeamCardDescription({ description, vacancyNum }) {

    let backdropClose = vacancyNum ? "flex" : "none"
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Typography sx={{ width: "100%" }}>
            <Button onClick={handleOpen} sx={{ color: "#000000", width: "100%" }}>
                <Typography color="#000000"
                    sx={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3, overflow: "hidden" }}
                >
                    {description}
                </Typography>
            </Button>
            <Backdrop
                sx={{ display: backdropClose, color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <Alert onClose={() => { setOpen(false) }} icon={false} variant="outlined"
                    sx={{ width: "50%", backgroundColor: "white", border: "3px solid #6c5044", color: "#6c5044" }}
                >
                    {description}
                </Alert>
            </Backdrop>
        </Typography>
    )
}