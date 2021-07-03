export default function createPdf(window, document, id, name, callback) {
  const element = document.getElementById(`${id}`)
  const opt = {
    margin: 0.5,
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    filename: `${name}.pdf`
  }
  window.html2pdf(element, opt)
  callback()
}
