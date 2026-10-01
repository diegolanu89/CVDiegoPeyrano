/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from '@mui/material'

import CodeIcon from '@mui/icons-material/Code'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import StorageIcon from '@mui/icons-material/Storage'
import BuildIcon from '@mui/icons-material/Build'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getIconForTech } from '../icons/GetIconForTech'

interface SkillCategory {
  id: string
  title: string
  items: string[]
}

/* 🧩 Tarjeta individual */
const TechCard = ({ label }: { label: string }) => {
  const icon = getIconForTech(label)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        px: 2,
        py: 1,
        borderRadius: 2,
        background:
          'linear-gradient(135deg, rgba(25,118,210,0.25), rgba(0,0,0,0.15))',
        border: '1px solid rgba(25,118,210,0.6)',
        minWidth: 120,
        transition: '0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      {icon}

      <Typography variant="body2">
        {label}
      </Typography>
    </Box>
  )
}

/* 🎨 Icono de cada categoría */
const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'languages':
      return <CodeIcon color="primary" />

    case 'architecture':
      return <ArchitectureIcon color="primary" />

    case 'frameworks':
      return <AccountTreeIcon color="primary" />

    case 'data':
      return <StorageIcon color="primary" />

    case 'engineering':
      return <BuildIcon color="primary" />

    case 'modern':
      return <AutoAwesomeIcon color="primary" />

    default:
      return <CodeIcon color="primary" />
  }
}

const Skills = () => {
  const { t } = useTranslation()

  const categories = t('skills.categories', {
    returnObjects: true,
  }) as SkillCategory[]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card sx={{ mb: 3 }}>
        <CardContent>

          {/* TÍTULO PRINCIPAL */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ mr: 2 }}
            >
              {t('sections.skills')}
            </Typography>

            <Divider sx={{ flexGrow: 1 }} />
          </Box>

          {/* CATEGORÍAS */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            {categories.map((category) => (
              <Box
                key={category.id}
                sx={{
                  display: 'flex',
                  gap: 2,
                }}
              >

                {/* LÍNEA LATERAL */}
                <Box
                  sx={{
                    width: 4,
                    bgcolor: 'primary.main',
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />

                {/* CARD DE CATEGORÍA */}
                <Card
                  variant="outlined"
                  sx={{
                    flex: 1,
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>

                    {/* HEADER */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      {getCategoryIcon(category.id)}

                      <Typography fontWeight="bold">
                        {category.title}
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 1.5 }} />

                    {/* SKILLS */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.5,
                      }}
                    >
                      {category.items.map((item) => (
                        <TechCard
                          key={`${category.id}-${item}`}
                          label={item}
                        />
                      ))}
                    </Box>

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

export default Skills