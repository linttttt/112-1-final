import { BottomNavigation, Button, Paper, Typography } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function SimpleBottomNavigation() {

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        sx={{ justifyContent: "space-around", alignItems: "center" }}
      >
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSfNWRPc4tS6qnJVWjo_knh232EOkoSondfwXupkzCwKzcqv7w/viewform"
          target="_blank" rel="noopener noreferrer"
          sx={{ flexDirection: "column", color: "#4e3a31" }}
        >
          <EditNoteIcon fontSize="large" />
          <Typography fontSize="12px">
            張貼宣傳卡(Post Ad)
          </Typography>
        </Button>
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSdIj3EKvGmdg_olWN_BVre1lp4nxEFnPmsVTF6_bf6AhaTchQ/viewform"
          target="_blank" rel="noopener noreferrer"
          sx={{ flexDirection: "column", color: "#4e3a31" }}
        >
          <GroupAddIcon fontSize="large" />
          <Typography fontSize="12px">
            加入組別(Register Team)
          </Typography>
        </Button>
      </BottomNavigation>
    </Paper >
  );
}
