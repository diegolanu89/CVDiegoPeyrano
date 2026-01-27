// src/controllers/PdfController.ts
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export class PdfController {
  static async export(element: HTMLElement, fileName: string) {
    // 🔹 ocultar Contact normal y mostrar ContactPdf
    const contact = element.querySelector('#contact') as HTMLElement | null
    const contactPdf = element.querySelector('#contactPdf') as HTMLElement | null

    const prevContact = contact?.style.display
    const prevContactPdf = contactPdf?.style.display

    if (contact) contact.style.display = 'none'
    if (contactPdf) contactPdf.style.display = 'block'

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#121212',
      useCORS: true,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    })

    const imgData = canvas.toDataURL('image/png')

    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    // px → mm
    const pxToMm = (px: number) => px * 0.264583

    const imgWidthMm = pxToMm(canvas.width)
    const imgHeightMm = pxToMm(canvas.height)

    // escalar al ancho A4
    const scale = pageWidth / imgWidthMm
    const scaledHeight = imgHeightMm * scale

    let position = 0
    let heightLeft = scaledHeight

    // primera página
    pdf.addImage(imgData, 'PNG', 0, position, pageWidth, scaledHeight)
    heightLeft -= pageHeight

    // páginas siguientes
    while (heightLeft > 0) {
      position -= pageHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, pageWidth, scaledHeight)
      heightLeft -= pageHeight
    }

    pdf.save(fileName)

    // 🔹 restaurar visibilidad
    if (contact) contact.style.display = prevContact ?? ''
    if (contactPdf) contactPdf.style.display = prevContactPdf ?? ''
  }
}