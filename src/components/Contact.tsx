import { Card, CardContent, Typography, Box, Button, Divider } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import DownloadIcon from '@mui/icons-material/Download'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          {/* TÍTULO */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ mr: 2 }}>
              {t('sections.contact')}
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>


          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
              mt: 2,
            }}
          >
            {/* LinkedIn */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/diego-peyrano-061b63120/"
              target="_blank"
            >
              LinkedIn
            </Button>

            {/* GitHub */}
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/diegolanu89/"
              target="_blank"
            >
              GitHub
            </Button>

            {/* Email */}
            <Button
              variant="outlined"
              startIcon={<EmailIcon />}
              href="mailto:diegolanus89@gmail.com"
            >
              diegolanus89@gmail.com
            </Button>

            {/* Descargar CV (si después ponés el PDF) */}
            <Button
              variant="text"
              startIcon={<DownloadIcon />}
              href="/cv.pdf"
              target="_blank"
            >
              {t('actions.downloadPdf')}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Contact