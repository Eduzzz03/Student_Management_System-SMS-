import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft,
  Home,
  MenuBook,
  Class,
  People,
  Person,
  Notifications,
  ReportProblem,
  Logout,
  AccountCircle,
} from "@mui/icons-material";

import Students from "../../assets/img1.png";
import Classes from "../../assets/img2.png";
import Teachers from "../../assets/img3.png";
import Fees from "../../assets/img4.png";

const expandedWidth = 200;
const collapsedWidth = 70;

export default function AdminHomePage() {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState({
    students: 0,
    classes: 0,
    teachers: 0,
    fees: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setData({
        students: 0,
        classes: 0,
        teachers: 0,
        fees: 23000,
      });
    }, 1000);
  }, []);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const menuItems = [
    { text: "Home", icon: <Home /> },
    { text: "Classes", icon: <Class /> },
    { text: "Subjects", icon: <MenuBook /> },
    { text: "Teachers", icon: <People /> },
    { text: "Students", icon: <Person /> },
    { text: "Notices", icon: <Notifications /> },
    { text: "Complains", icon: <ReportProblem /> },
  ];

  const userItems = [
    { text: "Profile", icon: <AccountCircle /> },
    { text: "Logout", icon: <Logout /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar sx={{ backgroundColor: "#1976d2" }}>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
            {open ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Avatar sx={{ bgcolor: "#bbb" }}>Y</Avatar>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? expandedWidth : collapsedWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? expandedWidth : collapsedWidth,
            transition: "width 0.3s",
            overflowX: "hidden",
            boxSizing: "border-box",
            pt: 8,
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <Tooltip title={!open ? item.text : ""} placement="right" key={item.text}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItem>
            </Tooltip>
          ))}
        </List>
        <Divider />
        <Typography variant="caption" sx={{ pl: open ? 2 : 0.5, pt: 1 }}>
          {open ? "User" : ""}
        </Typography>
        <List>
          {userItems.map((item) => (
            <Tooltip title={!open ? item.text : ""} placement="right" key={item.text}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Drawer>

      <Main open={open}>
        <Toolbar />
        <CardContainer>
          <Card>
            <img src={Students} alt="Students" />
            <p className="label">Total Students</p>
            <p className="value">
              <CountUp end={data.students} duration={1.5} />
            </p>
          </Card>
          <Card>
            <img src={Classes} alt="Classes" />
            <p className="label">Total Classes</p>
            <p className="value">
              <CountUp end={data.classes} duration={1.5} />
            </p>
          </Card>
          <Card>
            <img src={Teachers} alt="Teachers" />
            <p className="label">Total Teachers</p>
            <p className="value">
              <CountUp end={data.teachers} duration={1.5} />
            </p>
          </Card>
          <Card>
            <img src={Fees} alt="Fees" />
            <p className="label">Fees Collection</p>
            <p className="value green">
              $
              <CountUp end={data.fees} duration={1.5} separator="," />
            </p>
          </Card>
        </CardContainer>

        <NoticeCard>
          <p>No Notices to Show Right Now</p>
        </NoticeCard>
      </Main>
    </Box>
  );
}

const Main = styled.main`
  flex-grow: 1;
  padding: 40px;
  background: #f3f3f3;
  min-height: 100vh;
  margin-left: ${({ open }) => (open ? `${expandedWidth}px` : `${collapsedWidth}px`)};
  transition: margin-left 0.3s;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  width: 22%;
  min-width: 200px;
  height: 150px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;

  img {
    width: 40px;
    margin-bottom: 8px;
  }

  .label {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    margin: 4px 0;
  }

  .value {
    font-size: 20px;
    font-weight: bold;
    color: green;
  }
`;

const NoticeCard = styled.div`
  background: white;
  margin-top: 30px;
  padding: 30px;
  border-radius: 8px;
  text-align: left;
  font-size: 18px;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;









