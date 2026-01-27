import { Card, CardContent, Typography, Box, Divider } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

const ContactPdf = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ mr: 2 }}>
            Contacto
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <PhoneIcon />
          <Typography>1166127056</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <EmailIcon />
          <Typography>diegolanus89@gmail.com</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ContactPdf