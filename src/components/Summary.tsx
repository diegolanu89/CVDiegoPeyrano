import { Card, CardContent, Typography, Box } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Summary = () => {
  const { t } = useTranslation()

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <Card sx={{ mb: 3 }}>
        <CardContent>

          {/* TÍTULO CON LÍNEA */}
          <Box mb={2}>
            <Typography variant="h6" fontWeight="bold">
              {t('sections.summary')}
            </Typography>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.6 }}
              style={{
                height: 3,
                backgroundColor: '#1976d2',
                borderRadius: 2,
                marginTop: 4,
              }}
            />
          </Box>

          {/* TEXTO */}
          <Typography
            paragraph
            sx={{
              textAlign: 'justify',
              textIndent: '2em',
              lineHeight: 1.7,
            }}
          >
            {t('summary.p1')}
          </Typography>

          <Typography
            paragraph
            sx={{
              textAlign: 'justify',
              textIndent: '2em',
              lineHeight: 1.7,
            }}
          >
            {t('summary.p2')}
          </Typography>

          <Typography
            paragraph
            sx={{
              textAlign: 'justify',
              textIndent: '2em',
              lineHeight: 1.7,
            }}
          >
            {t('summary.p3')}
          </Typography>

          <Typography
            paragraph
            sx={{
              textAlign: 'justify',
              textIndent: '2em',
              lineHeight: 1.7,
            }}
          >
            {t('summary.p4')}
          </Typography>

        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Summary