import { ButtonGroup, Button, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        left: 16,
        zIndex: 2000,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <ButtonGroup size="small">
        <Button onClick={() => i18n.changeLanguage('es')}>ES</Button>
        <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
      </ButtonGroup>
    </Box>
  )
}

export default LanguageSwitcher