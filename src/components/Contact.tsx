import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Divider,
} from '@mui/material'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card
        component="section"
        aria-labelledby="contact-title"
        sx={{ mb: 3 }}
      >
        <CardContent>

          {/* TÍTULO */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography
              id="contact-title"
              component="h2"
              variant="h6"
              sx={{ mr: 2 }}
            >
              {t('sections.contact')}
            </Typography>

            <Divider sx={{ flexGrow: 1 }} />
          </Box>

          {/* CONTACT LINKS */}
          <Box
            component="nav"
            aria-label={t('sections.contact')}
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
              rel="noopener noreferrer"
              aria-label="Diego Peyrano LinkedIn profile"
            >
              LinkedIn
            </Button>

            {/* GitHub */}
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/diegolanu89/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Diego Peyrano GitHub profile"
            >
              GitHub
            </Button>

            {/* Email */}
            <Button
              variant="outlined"
              startIcon={<EmailIcon />}
              href="mailto:diegolanus89@gmail.com"
              aria-label="Email Diego Peyrano"
            >
              diegolanus89@gmail.com
            </Button>

          </Box>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Contact