import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

import { useTranslation } from "react-i18next";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactPdf = () => {
  const { t } = useTranslation();

  return (
    <Card
      component="section"
      aria-labelledby="pdf-contact-title"
      sx={{ mb: 3 }}
    >
      <CardContent>
        {/* TÍTULO */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            id="pdf-contact-title"
            component="h2"
            variant="h6"
            sx={{ mr: 2 }}
          >
            {t("sections.contact")}
          </Typography>

          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        {/* EMAIL */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 1,
          }}
        >
          <EmailIcon />

          <Typography>diegolanus89@gmail.com</Typography>
        </Box>

        {/* LINKEDIN */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 1,
          }}
        >
          <LinkedInIcon />

          <Typography>linkedin.com/in/diego-peyrano-061b63120</Typography>
        </Box>

        {/* GITHUB */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <GitHubIcon />

          <Typography>github.com/diegolanu89</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContactPdf;
