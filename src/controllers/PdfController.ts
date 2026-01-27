// src/controllers/PdfController.ts
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export class PdfController {
  static async export(element: HTMLElement, fileName: string) {
    // 1) Ocultar Contact normal y mostrar ContactPdf
    const contact = element.querySelector('#contact') as HTMLElement | null
    const contactPdf = element.querySelector('#contactPdf') as HTMLElement | null

    const prevContact = contact?.style.display
    const prevContactPdf = contactPdf?.style.display

    if (contact) contact.style.display = 'none'
    if (contactPdf) contactPdf.style.display = 'block'

    // 2) Mantener MISMO formato que browser cuando se exporta desde móvil
    //    (sin tocar desktop)
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    const prevWidth = element.style.width
    const prevMaxWidth = element.style.maxWidth
    const prevMargin = element.style.margin

    // Elegí un ancho "desktop" consistente (podés ajustarlo a tu layout)
    const FORCED_DESKTOP_WIDTH_PX = 1200

    if (isMobile) {
      element.style.width = `${FORCED_DESKTOP_WIDTH_PX}px`
      element.style.maxWidth = `${FORCED_DESKTOP_WIDTH_PX}px`
      element.style.margin = '0 auto'
    }

    try {
      // 3) Render a canvas (dark)
      //    En móvil bajamos scale para evitar PDF gigante/pesado,
      //    en desktop mantenemos buena calidad.
      const scale = isMobile ? 1.6 : 2

      const canvas = await html2canvas(element, {
        scale,
        backgroundColor: '#121212',
        useCORS: true,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      })

      // 4) Lienzo único en formato A4 de ancho, alto dinámico
      //    A4 width = 210mm. Le damos una única página con altura calculada.
      const A4_WIDTH_MM = 210
      const MM_PER_PX = 0.264583 // aproximación estándar a 96dpi

      // Convertimos dimensiones del canvas a mm
      const canvasWidthMm = canvas.width * MM_PER_PX
      const canvasHeightMm = canvas.height * MM_PER_PX

      // Escalamos para que el contenido ocupe TODO el ancho A4
      const fitScale = A4_WIDTH_MM / canvasWidthMm
      const pdfHeightMm = canvasHeightMm * fitScale

      // 5) Para no generar archivos monstruosos, usamos JPEG (mucho más liviano que PNG)
      const imgData = canvas.toDataURL('image/jpeg', 0.92)

      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: [A4_WIDTH_MM, pdfHeightMm], // ✅ una sola hoja tipo lienzo
      })

      pdf.addImage(imgData, 'JPEG', 0, 0, A4_WIDTH_MM, pdfHeightMm, undefined, 'FAST')
      pdf.save(fileName)
    } finally {
      // 6) Restaurar estilos (SIEMPRE)
      if (isMobile) {
        element.style.width = prevWidth
        element.style.maxWidth = prevMaxWidth
        element.style.margin = prevMargin
      }

      if (contact) contact.style.display = prevContact ?? ''
      if (contactPdf) contactPdf.style.display = prevContactPdf ?? ''
    }
  }
}