import { AppBar, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import PropTypes from 'prop-types';

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <HideOnScroll {...props}>
      <AppBar sx={{ backgroundColor: "#4e3a31", height: "56px", justifyContent: "center" }}>
        <Toolbar sx={{ gap: "10px" }}>
          <img src='https://tpemartin.github.io/find-teammate2/vite.svg' />
          <Typography variant="h5" fontWeight="bolder">
            尋找神隊友
          </Typography>
          <Typography fontSize="12px" fontWeight="bold" sx={{ height: "25px", display: "flex", alignItems: "flex-end" }}>
            快來找尋最神的隊友，加入最棒的組別！
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
