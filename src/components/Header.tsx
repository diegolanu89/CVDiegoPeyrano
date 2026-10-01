import {
  Typography,
  Card,
  CardContent,
  Box,
  Divider,
  Avatar,
} from '@mui/material'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import profileImage from '../assets/image.png'

const Header = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        component="header"
        sx={{
          mb: 3,
          background:
            'linear-gradient(135deg, #0d47a1 0%, #1976d2 40%, #42a5f5 100%)',
          color: 'white',
        }}
      >
        <CardContent
          sx={{
            p: { xs: 3, md: 4 },
            '&:last-child': {
              pb: { xs: 3, md: 4 },
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',

              // Mobile: foto arriba
              // Desktop: foto a la derecha
              flexDirection: {
                xs: 'column-reverse',
                md: 'row',
              },

              alignItems: 'center',
              justifyContent: 'space-between',

              gap: {
                xs: 2.5,
                md: 4,
              },
            }}
          >
            {/* ================================================= */}
            {/* NOMBRE Y PERFIL                                   */}
            {/* ================================================= */}

            <Box
              sx={{
                flex: 1,

                textAlign: {
                  xs: 'center',
                  md: 'left',
                },

                minWidth: 0,
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,

                  fontSize: {
                    xs: '2rem',
                    sm: '2.5rem',
                    md: '3rem',
                  },
                }}
              >
                {t('header.name')}
              </Typography>

              <Typography
                component="p"
                variant="h6"
                sx={{
                  mt: 1,
                  color: '#bbdefb',
                  fontWeight: 500,

                  fontSize: {
                    xs: '1rem',
                    md: '1.25rem',
                  },
                }}
              >
                {t('header.role')}
              </Typography>

              {/* Línea decorativa */}

              <Box
                sx={{
                  display: 'flex',

                  justifyContent: {
                    xs: 'center',
                    md: 'flex-start',
                  },
                }}
              >
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
            </Box>

            {/* ================================================= */}
            {/* FOTO                                              */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <Avatar
                src={profileImage}
                alt={`${t('header.name')} - Software Engineer`}
                sx={{
                  width: {
                    xs: 115,
                    sm: 130,
                    md: 145,
                  },

                  height: {
                    xs: 115,
                    sm: 130,
                    md: 145,
                  },

                  border: '4px solid rgba(255,255,255,0.9)',

                  boxShadow:
                    '0 8px 24px rgba(0,0,0,0.30)',

                  bgcolor: 'white',
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