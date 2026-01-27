import { Typography, Card, CardContent, Box, Divider } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        sx={{
          mb: 3,
          background: 'linear-gradient(135deg, #0d47a1 0%, #1976d2 40%, #42a5f5 100%)',
          color: 'white',
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              {t('header.name')}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 1,
                color: '#bbdefb',
                fontWeight: 500,
              }}
            >
              {t('header.role')}
            </Typography>

            {/* línea decorativa */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8 }}
            >
              <Divider
                sx={{
                  mt: 2,
                  borderColor: '#90caf9',
                  borderBottomWidth: 3,
                }}
              />
            </motion.div>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Header