/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Box,
  Divider,
} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation()
  const items = t('education.items', { returnObjects: true }) as any[]

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card sx={{ mb: 3 }}>
        <CardContent>
          {/* TÍTULO */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SchoolIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6">{t('sections.education')}</Typography>
            <Divider sx={{ flexGrow: 1, ml: 2 }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {items.map((edu, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                {/* LÍNEA VERTICAL */}
                <Box
                  sx={{
                    width: 4,
                    bgcolor: 'primary.main',
                    borderRadius: 2,
                  }}
                />

                <Card
                  variant="outlined"
                  sx={{
                    flex: 1,
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <CardContent>
                    {/* TÍTULO */}
                    <Typography fontWeight="bold" variant="subtitle1">
                      {edu.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {edu.org} — {edu.location}
                    </Typography>

                    {/* PERÍODO */}
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'inline-block',
                        mt: 0.5,
                        mb: 1,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                      }}
                    >
                      {edu.period}
                    </Typography>

                    {/* NOTAS */}
                    <List dense sx={{ pl: 2 }}>
                      {edu.notes.map((n: string, j: number) => (
                        <ListItem
                          key={j}
                          sx={{
                            display: 'list-item',
                            listStyleType: 'disc',
                            pl: 1,
                          }}
                        >
                          <Typography variant="body2">{n}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Education