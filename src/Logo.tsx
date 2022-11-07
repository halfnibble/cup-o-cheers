import Box from '@mui/material/Box'

import logoText from './cupocheers_logo_text.svg'
import logoIced from './cupocheers_logo_iced.svg'
import logoHot from './cupocheers_logo_hot.svg'
import styles from './Logo.module.sass'

const Logo = () => {
  return (
    <Box className={styles.logo}>
      <img src={logoText} className={styles.logoText} alt="Cup O'Cheers logo" />
      <img src={logoIced} className={styles.logoIced} alt="Cup O'Cheers iced coffee logo image" />
      <img src={logoHot} className={styles.logoHot} alt="Cup O'Cheers hot coffee logo image" />
    </Box>
  )
}

export default Logo
