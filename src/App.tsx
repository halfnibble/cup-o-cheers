import { useState, useRef } from "react";

// MUI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";

import logo from "./logo.svg";
import styles from "./App.module.scss";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const containerRef = useRef(null);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Container ref={containerRef}>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Cup O'Cheers
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button key={"item1"} sx={{ color: "#fff" }}>
                Item 1
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={containerRef.current}
            variant="temporary"
            open={mobileMenuOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                Cup O'Cheers
              </Typography>
              <Divider />
              <List>
                <ListItem key={"item1"} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={"Item 1"} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Box>
      </Box>
      <Paper className={styles.AppContent}>
        <img src={logo} className={styles.logo} alt="logo" />
        <Typography sx={{ marginTop: "20px" }} variant={"h5"}>
          Welcome to the future website of Cup O'Cheers!
        </Typography>
      </Paper>
    </Container>
  );
};

export default App;
