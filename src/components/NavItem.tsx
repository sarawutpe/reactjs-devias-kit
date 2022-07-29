import { NavLink, useLocation } from "react-router-dom";
import { Box, Button, ListItem, SxProps, Theme } from "@mui/material";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const location = useLocation();
  const { href, icon, title, ...others } = props;
  const active = href === location.pathname ? true : false;

  const classes: SxProps<Theme> | any = {
    root: {
      backgroundColor: active ? "rgba(255,255,255,0.08)" : "",
      borderRadius: 1,
      color: active ? "secondary.main" : "neutral.300",
      fontWeight: active && "fontWeightBold",
      justifyContent: "flex-start",
      px: 3,
      textAlign: "left",
      textTransform: "none",
      width: "100%",
      "& .MuiButton-startIcon": {
        color: active ? "secondary.main" : "neutral.400",
      },
      "&:hover": {
        backgroundColor: "rgba(255,255,255, 0.08)",
      },
    },
    buttons: { marginTop: 2 },
  };

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <NavLink to={href} style={{ width: "100%", textDecoration: "none" }}>
        <Button startIcon={icon} disableRipple sx={classes.root}>
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </NavLink>
    </ListItem>
  );
};

export default NavItem;
