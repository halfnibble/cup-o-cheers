import { useState, useRef } from 'react'

// MUI Components
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu'
import EmailIcon from '@mui/icons-material/Email'
// import CheckIcon from '@mui/icons-material/Check'
import AcUnitIcon from '@mui/icons-material/AcUnit'

import Logo from './Logo'
import Gallery from './Gallery'
import logoHot from './cupocheers_logo_hot.svg'
import logoIced from './cupocheers_logo_iced.svg'
import styles from './App.module.sass'

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const containerRef = useRef(null)

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <Container ref={containerRef}>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={styles.MenuTitle}>
              <img className={styles.MenuIcon} src={logoHot} />
              Cup O'Cheers
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button href="#contact-info" key={'item1'} sx={{ color: '#fff' }}>
                Contact us
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
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                <img className={styles.MenuIconTilt} src={logoIced} />
                Cup O'Cheers
              </Typography>
              <Divider />
              <List>
                <ListItem key={'item1'} disablePadding>
                  <ListItemButton href={'#contact-info'} sx={{ textAlign: 'center' }}>
                    <ListItemText primary={'Contact us'} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Box>
      </Box>
      <Paper className={styles.AppContent}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={3}
          className={styles.AppContainer}
        >
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Typography variant={'h4'} className={styles.PageTitle}>
              Cup O'Cheers Cozies
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <AcUnitIcon />
                </ListItemIcon>
                <ListItemText primary={'Keep your drink hot or iced and your hands cozy'} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AcUnitIcon />
                </ListItemIcon>
                <ListItemText primary={'Made of high quality Acrylic, Cotton, or Wool'} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AcUnitIcon />
                </ListItemIcon>
                <ListItemText primary={'Handmade in the USA'} />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ marginTop: '15px' }} />

        <Gallery />

        <Divider sx={{ marginTop: '15px' }} />

        <Box id="contact-info" className={styles.Contact}>
          <Typography variant={'h5'}>Contact us to place an order</Typography>
          <Typography>
            <Link sx={{ textDecoration: 'none' }} href="mailto:beelieveart@gmail.com?subject=Cozie order">
              <Chip
                className={styles.ContactChip}
                icon={<EmailIcon />}
                label="beelieveart@gmail.com"
                variant="filled"
                color={'secondary'}
                sx={{ fontSize: '1.2em' }}
              />
            </Link>
          </Typography>
        </Box>
      </Paper>

      <Box sx={{ height: '200px' }} />
    </Container>
  )
}

export default App
