import { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DownloadIcon from "@mui/icons-material/Download";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import Summary from "../components/Summary";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import ContactPdf from "../components/ContactPdf";
import LanguageSwitcher from "../components/LenguageSwitcher";
import { PdfAgentController } from "../controllers/PdfAgentController";
//import { PdfController } from "../controllers/PdfController";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const CvPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { id: "summary", label: t("sections.summary"), icon: <PersonIcon /> },
    { id: "experience", label: t("sections.experience"), icon: <WorkIcon /> },
    { id: "skills", label: t("sections.skills"), icon: <BuildIcon /> },
    { id: "education", label: t("sections.education"), icon: <SchoolIcon /> },
    { id: "contact", label: t("sections.contact"), icon: <ContactMailIcon /> },
  ];

  const handleNavigate = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  const handleDownloadPdf = async () => {
    if (!cvRef.current) return;
    //await PdfController.export(cvRef.current, "Diego_Peyrano_CV.pdf");
    await PdfAgentController.export();
  };

  return (
    <>
      {/* 🔝 NAVBAR */}
      <AppBar position="fixed" color="default" elevation={2}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />

          <Button
            startIcon={<DownloadIcon />}
            onClick={handleDownloadPdf}
            sx={{ mr: 2 }}
          >
            {t("actions.downloadPdf")}
          </Button>

          {isMobile ? (
            <>
              <LanguageSwitcher />

              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>

              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 260 }}>
                  <List>
                    {menuItems.map((item, index) => (
                      <Box key={item.id}>
                        <ListItemButton onClick={() => handleNavigate(item.id)}>
                          <ListItemIcon sx={{ color: "primary.main" }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.label} />
                        </ListItemButton>

                        {index < menuItems.length - 1 && (
                          <Divider sx={{ bgcolor: "primary.main", mx: 2 }} />
                        )}
                      </Box>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              {menuItems.map((item, index) => (
                <Box
                  key={item.id}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    startIcon={item.icon}
                    onClick={() => scrollToId(item.id)}
                  >
                    {item.label}
                  </Button>

                  {index < menuItems.length - 1 && (
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ mx: 1, bgcolor: "primary.main" }}
                    />
                  )}
                </Box>
              ))}

              <LanguageSwitcher />
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* 📄 CONTENIDO EXPORTABLE */}
      <Container sx={{ mt: 10, mb: 4 }}>
        <div ref={cvRef}>
          <Box id="summary" data-pdf-section>
            <Header />
            <Summary />
          </Box>

          <Box id="experience" data-pdf-section>
            <Experience />
          </Box>

          <Box id="skills" data-pdf-section>
            <Skills />
          </Box>

          <Box id="education" data-pdf-section>
            <Education />
          </Box>

          <Box id="contact" data-pdf-section>
            <Contact />
          </Box>

          <Box id="contactPdf" sx={{ display: "none" }} data-pdf-only>
            <ContactPdf />
          </Box>
        </div>
      </Container>
    </>
  );
};

export default CvPage;
