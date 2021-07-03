export default function numberWithCommas(x) {
  const number = parseFloat(x).toFixed(2)
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
