import jsPDF from "jspdf";
import i18n from "../i18n/i18n";
import profileImage from "../assets/image.png";

// ============================================================
// TIPOS INTERNOS
// ============================================================

interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
}

interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

interface EducationItem {
  year?: string;
  title: string;
  org: string;
  location?: string;
  period: string;
  notes?: string[];
}

interface CvData {
  header: {
    name: string;
    role: string;
  };

  sections: {
    summary: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
  };

  summary: {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };

  experience: {
    items: ExperienceItem[];
  };

  skills: {
    categories: SkillCategory[];
  };

  education: {
    items: EducationItem[];
  };
}

// ============================================================
// CONTROLLER
// ============================================================

export class PdfAgentController {
  private static readonly PAGE_WIDTH = 210;
  private static readonly PAGE_HEIGHT = 297;

  private static readonly MARGIN_LEFT = 16;
  private static readonly MARGIN_RIGHT = 16;
  private static readonly MARGIN_TOP = 15;
  private static readonly MARGIN_BOTTOM = 15;

  private static readonly CONTENT_WIDTH =
    PdfAgentController.PAGE_WIDTH -
    PdfAgentController.MARGIN_LEFT -
    PdfAgentController.MARGIN_RIGHT;

  // ==========================================================
  // OBTENER IDIOMA
  // ==========================================================

  private static getLanguage(): "es" | "en" {
    return i18n.language.toLowerCase().startsWith("es") ? "es" : "en";
  }

  // ==========================================================
  // OBTENER DATOS DESDE I18N
  // ==========================================================

  private static getCvData(): CvData {
    return {
      header: i18n.t("header", {
        returnObjects: true,
      }) as CvData["header"],

      sections: i18n.t("sections", {
        returnObjects: true,
      }) as CvData["sections"],

      summary: i18n.t("summary", {
        returnObjects: true,
      }) as CvData["summary"],

      experience: i18n.t("experience", {
        returnObjects: true,
      }) as CvData["experience"],

      skills: i18n.t("skills", {
        returnObjects: true,
      }) as CvData["skills"],

      education: i18n.t("education", {
        returnObjects: true,
      }) as CvData["education"],
    };
  }

  // ==========================================================
  // EXPORT
  // ==========================================================

  static async export() {
    /*
     * El controller se ocupa de TODO.
     *
     * CvPage no necesita conocer:
     * - idioma
     * - JSON
     * - estructura de datos
     * - nombre del archivo
     * - layout
     */

    const language = this.getLanguage();
    const data = this.getCvData();

    const isSpanish = language === "es";

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    // ========================================================
    // METADATA
    // ========================================================

    pdf.setProperties({
      title: isSpanish ? "Diego Peyrano - CV" : "Diego Peyrano - Resume",

      subject: "Technical Lead | Software Engineer | Software Architecture",

      author: "Diego Peyrano",

      keywords: [
        "Software Engineer",
        "Technical Lead",
        "Software Architecture",
        "Systems Analyst",
        "System Design",
        "Full-Stack Development",
        "Backend Development",
        "C#",
        ".NET",
        "ASP.NET Core",
        "Angular",
        "TypeScript",
        "JavaScript",
        "Python",
        "SQL",
        "REST APIs",
        "Hexagonal Architecture",
        "SOLID",
        "Design Patterns",
        "Docker",
        "Kubernetes",
        "Azure",
        "CI/CD",
        "AI-Assisted Development",
      ].join(", "),

      creator: "Diego Peyrano Professional CV",
    });

    // ========================================================
    // POSICIÓN VERTICAL
    // ========================================================

    let y = this.MARGIN_TOP;

    // ========================================================
    // PAGE BREAK
    // ========================================================

    const checkPageBreak = (requiredHeight: number) => {
      if (y + requiredHeight > this.PAGE_HEIGHT - this.MARGIN_BOTTOM) {
        pdf.addPage();
        y = this.MARGIN_TOP;
      }
    };

    // ========================================================
    // DIVIDER
    // ========================================================

    const addDivider = () => {
      checkPageBreak(5);

      pdf.setDrawColor(180);
      pdf.setLineWidth(0.2);

      pdf.line(this.MARGIN_LEFT, y, this.PAGE_WIDTH - this.MARGIN_RIGHT, y);

      y += 5;
    };

    // ========================================================
    // SECTION TITLE
    // ========================================================

    const addSectionTitle = (title: string) => {
      checkPageBreak(12);

      y += 2;

      pdf.setFont("helvetica", "bold");

      pdf.setFontSize(12);
      pdf.setTextColor(20);

      pdf.text(title.toUpperCase(), this.MARGIN_LEFT, y);

      y += 3;

      pdf.setDrawColor(80);
      pdf.setLineWidth(0.4);

      pdf.line(this.MARGIN_LEFT, y, this.PAGE_WIDTH - this.MARGIN_RIGHT, y);

      y += 6;
    };

    // ========================================================
    // PARAGRAPH
    // ========================================================

    const addParagraph = (text: string, fontSize = 9.5) => {
      if (!text) return;

      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(fontSize);
      pdf.setTextColor(40);

      const lines = pdf.splitTextToSize(text, this.CONTENT_WIDTH);

      const lineHeight = 4.5;

      const blockHeight = lines.length * lineHeight;

      checkPageBreak(blockHeight + 3);

      pdf.text(lines, this.MARGIN_LEFT, y);

      y += blockHeight + 2;
    };

    // ========================================================
    // BULLET
    // ========================================================

    const addBullet = (text: string) => {
      if (!text) return;

      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(9);
      pdf.setTextColor(40);

      const bulletIndent = 5;

      const lines = pdf.splitTextToSize(
        text,
        this.CONTENT_WIDTH - bulletIndent
      );

      const lineHeight = 4.2;

      checkPageBreak(lines.length * lineHeight + 2);

      pdf.text("•", this.MARGIN_LEFT, y);

      pdf.text(lines, this.MARGIN_LEFT + bulletIndent, y);

      y += lines.length * lineHeight + 1;
    };

    // ========================================================
    // HEADER
    // ========================================================

    // ========================================================
    // FOTO DE PERFIL
    // ========================================================

    const photoSize = 32;

    // Posición: arriba a la derecha
    const photoX = this.PAGE_WIDTH - this.MARGIN_RIGHT - photoSize;

    const photoY = this.MARGIN_TOP;

    pdf.addImage(
      profileImage, // imagen importada desde assets
      "PNG", // formato
      photoX, // posición X
      photoY, // posición Y
      photoSize, // ancho
      photoSize, // alto
      undefined,
      "FAST"
    );

    pdf.setFont("helvetica", "bold");

    pdf.setFontSize(22);
    pdf.setTextColor(15);

    pdf.text(data.header.name.toUpperCase(), this.MARGIN_LEFT, y);

    y += 8;

    pdf.setFont("helvetica", "normal");

    pdf.setFontSize(11);
    pdf.setTextColor(55);

    pdf.text(data.header.role, this.MARGIN_LEFT, y);

    y += 6;

    // ========================================================
    // CONTACTO
    // ========================================================

    pdf.setFontSize(8.5);
    pdf.setTextColor(70);

    pdf.text(
      "Buenos Aires, Argentina | diegolanus89@gmail.com",
      this.MARGIN_LEFT,
      y
    );

    y += 5;

    pdf.setTextColor(40, 80, 150);

    pdf.textWithLink(
      "LinkedIn: linkedin.com/in/diego-peyrano-061b63120",
      this.MARGIN_LEFT,
      y,
      {
        url: "https://www.linkedin.com/in/diego-peyrano-061b63120/",
      }
    );

    y += 4.5;

    pdf.textWithLink("GitHub: github.com/diegolanu89", this.MARGIN_LEFT, y, {
      url: "https://github.com/diegolanu89/",
    });

    pdf.setTextColor(40);

    y += 6;

    addDivider();

    // ========================================================
    // SUMMARY
    // ========================================================

    addSectionTitle(data.sections.summary);

    addParagraph(data.summary.p1);
    addParagraph(data.summary.p2);
    addParagraph(data.summary.p3);
    addParagraph(data.summary.p4);

    // ========================================================
    // EXPERIENCE
    // ========================================================

    addSectionTitle(data.sections.experience);

    data.experience.items.forEach((experience) => {
      checkPageBreak(25);

      pdf.setFont("helvetica", "bold");

      pdf.setFontSize(10.5);
      pdf.setTextColor(20);

      const titleLines = pdf.splitTextToSize(
        experience.title,
        this.CONTENT_WIDTH
      );

      pdf.text(titleLines, this.MARGIN_LEFT, y);

      y += titleLines.length * 4.5;

      pdf.setFont("helvetica", "bold");

      pdf.setFontSize(9.5);
      pdf.setTextColor(50);

      pdf.text(experience.company, this.MARGIN_LEFT, y);

      y += 4;

      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(8.5);
      pdf.setTextColor(90);

      const info = [experience.location, experience.period]
        .filter(Boolean)
        .join(" | ");

      pdf.text(info, this.MARGIN_LEFT, y);

      y += 5;

      experience.bullets?.forEach((bullet) => addBullet(bullet));

      y += 4;
    });

    // ========================================================
    // SKILLS
    // ========================================================

    addSectionTitle(data.sections.skills);

    data.skills.categories.forEach((category) => {
      checkPageBreak(15);

      pdf.setFont("helvetica", "bold");

      pdf.setFontSize(9.5);
      pdf.setTextColor(25);

      pdf.text(category.title, this.MARGIN_LEFT, y);

      y += 4.5;

      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(8.8);
      pdf.setTextColor(55);

      const skillsText = category.items.join(" | ");

      const lines = pdf.splitTextToSize(skillsText, this.CONTENT_WIDTH);

      const lineHeight = 4;

      checkPageBreak(lines.length * lineHeight + 5);

      pdf.text(lines, this.MARGIN_LEFT, y);

      y += lines.length * lineHeight + 5;
    });

    // ========================================================
    // EDUCATION
    // ========================================================

    addSectionTitle(data.sections.education);

    data.education.items.forEach((education) => {
      checkPageBreak(20);

      pdf.setFont("helvetica", "bold");

      pdf.setFontSize(10);
      pdf.setTextColor(20);

      const titleLines = pdf.splitTextToSize(
        education.title,
        this.CONTENT_WIDTH
      );

      pdf.text(titleLines, this.MARGIN_LEFT, y);

      y += titleLines.length * 4.5;

      pdf.setFont("helvetica", "bold");

      pdf.setFontSize(9);
      pdf.setTextColor(55);

      const orgLines = pdf.splitTextToSize(education.org, this.CONTENT_WIDTH);

      pdf.text(orgLines, this.MARGIN_LEFT, y);

      y += orgLines.length * 4;

      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(8.5);
      pdf.setTextColor(90);

      const educationInfo = [education.location, education.period]
        .filter(Boolean)
        .join(" | ");

      pdf.text(educationInfo, this.MARGIN_LEFT, y);

      y += 5;

      education.notes?.forEach((note) => addBullet(note));

      y += 4;
    });

    // ========================================================
    // FOOTER
    // ========================================================

    const totalPages = pdf.getNumberOfPages();

    for (let page = 1; page <= totalPages; page++) {
      pdf.setPage(page);

      pdf.setFont("helvetica", "normal");

      pdf.setFontSize(7.5);
      pdf.setTextColor(120);

      const pageText = isSpanish
        ? `Diego Peyrano | CV | Página ${page} de ${totalPages}`
        : `Diego Peyrano | Resume | Page ${page} of ${totalPages}`;

      pdf.text(pageText, this.PAGE_WIDTH / 2, this.PAGE_HEIGHT - 7, {
        align: "center",
      });
    }

    // ========================================================
    // DESCARGA
    // ========================================================

    const fileName = isSpanish
      ? "Diego_Peyrano_CV_ES.pdf"
      : "Diego_Peyrano_CV_EN.pdf";

    pdf.save(fileName);
  }
}
