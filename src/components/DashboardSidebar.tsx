import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

import {
  Box,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
import { XCircle as XCircleIcon } from "../icons/x-circle";
import { Logo } from "./Logo";
import NavItem from "./NavItem";

interface Item {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const items: any[] | Item = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/customer",
    icon: <UsersIcon fontSize="small" />,
    title: "Customer",
  },
  {
    href: "/product",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Product",
  },
  {
    href: "/account",
    icon: <UserIcon fontSize="small" />,
    title: "Account",
  },
  {
    href: "/setting",
    icon: <CogIcon fontSize="small" />,
    title: "Setting",
  },
  {
    href: "/login",
    icon: <LockIcon fontSize="small" />,
    title: "Login",
  },
  {
    href: "/register",
    icon: <UserAddIcon fontSize="small" />,
    title: "Register",
  },
  {
    href: "/404",
    icon: <XCircleIcon fontSize="small" />,
    title: "Error",
  },
];

interface DashboardSidebarProps {
  onClose: () => void;
  open: boolean;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = (props) => {
  const location = useLocation();
  const { open, onClose } = props;
  const theme = useTheme();

  const lgUp = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(() => {
    if (open) {
      onClose?.();
    }
  }, [location.pathname]);

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NavLink to="/">
              <Logo
                sx={{
                  height: 42,
                  width: 42,
                }}
              />
            </NavLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Acme Inc
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Your tier : Premium
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: "neutral.500",
                  width: 14,
                  height: 14,
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item: Item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        ></Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

export default DashboardSidebar;
