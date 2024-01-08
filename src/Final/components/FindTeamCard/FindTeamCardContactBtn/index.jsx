import { IconButton, Link, Stack, Tooltip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function FindTeamCardContactBtn({ contactEmail, contactPerson }) {

    let mailLink = "mailto:" + contactEmail

    return (
        <Stack direction="row" sx={{ position: "absolute", width: "100%", bottom: "0px", justifyContent: "space-between" }}>
            <Tooltip title={contactPerson} placement="top">
                <IconButton>
                    <PersonIcon sx={{ color: "#6c5044", padding: "3px" }} />
                </IconButton>
            </Tooltip>
            <Link href={mailLink} target="_blank" rel="noopener noreferrer">
                <Tooltip title={contactEmail} placement="top">
                    <IconButton >
                        <EmailIcon sx={{ color: "#6c5044", padding: "3px" }} />
                    </IconButton>
                </Tooltip>
            </Link>
        </Stack>
    )
}