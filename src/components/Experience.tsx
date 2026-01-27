/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Box,
  Divider,
  Chip,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

const Experience = () => {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true }) as any[]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card sx={{ mb: 3 }}>
        <CardContent>
          {/* TÍTULO CON LÍNEA */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ mr: 2 }}>
              {t('sections.experience')}
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>

          {/* EXPERIENCIAS */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {items.map((job, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {/* LÍNEA VERTICAL */}
                  <Box
                    sx={{
                      width: 4,
                      bgcolor: 'primary.main',
                      borderRadius: 2,
                    }}
                  />

                  {/* CARD */}
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
                      {/* HEADER */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          mb: 1,
                        }}
                      >
                        <Typography fontWeight="bold">
                          {job.title}
                        </Typography>

                        <Chip
                          label={job.period}
                          size="small"
                          color="secondary"
                          sx={{ ml: 1 }}
                        />
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {job.company} — {job.location}
                      </Typography>

                      <Divider sx={{ mb: 1 }} />

                      {/* BULLETS */}
                      <List dense>
                        {job.bullets.map((b: string, j: number) => (
                          <ListItem
                            key={j}
                            sx={{
                              pl: 0,
                              '&::before': {
                                content: '"▸"',
                                color: 'primary.main',
                                fontWeight: 'bold',
                                mr: 1,
                              },
                            }}
                          >
                            <Typography variant="body2">{b}</Typography>
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Experience