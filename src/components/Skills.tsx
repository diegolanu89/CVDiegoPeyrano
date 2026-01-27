import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import DeviceHubIcon from '@mui/icons-material/DeviceHub'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import BuildIcon from '@mui/icons-material/Build'
import DataObjectIcon from '@mui/icons-material/DataObject'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getIconForTech } from '../icons/GetIconForTech'

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
        background: 'linear-gradient(135deg, rgba(25,118,210,0.25), rgba(0,0,0,0.15))',
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
      <Typography variant="body2">{label}</Typography>
    </Box>
  )
}

const Skills = () => {
  const { t } = useTranslation()

  const sections = [
    {
      title: t('skills.languagesTitle'),
      value: t('skills.languages'),
      icon: <CodeIcon color="primary" />,
    },
    {
      title: t('skills.paradigmsTitle'),
      value: t('skills.paradigms'),
      icon: <DeviceHubIcon color="primary" />,
    },
    {
      title: t('skills.patternsTitle'),
      value: t('skills.patterns'),
      icon: <ArchitectureIcon color="primary" />,
    },
    {
      title: t('skills.toolsTitle'),
      value: t('skills.tools'),
      icon: <BuildIcon color="primary" />,
    },
    {
      title: t('skills.dataTitle'),
      value: t('skills.data'),
      icon: <DataObjectIcon color="primary" />,
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          {/* TÍTULO */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ mr: 2 }}>
              {t('sections.skills')}
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {sections.map((section, i) => {
              const items = section.value.split(',').map((s) => s.trim())

              return (
                <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                  {/* Línea lateral */}
                  <Box
                    sx={{
                      width: 4,
                      bgcolor: 'primary.main',
                      borderRadius: 2,
                    }}
                  />

                  <Card variant="outlined" sx={{ flex: 1 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {section.icon}
                        <Typography fontWeight="bold">
                          {section.title}
                        </Typography>
                      </Box>

                      <Divider sx={{ my: 1 }} />

                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1.5,
                        }}
                      >
                        {items.map((item, j) => (
                          <TechCard key={j} label={item} />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              )
            })}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Skills