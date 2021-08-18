const formatter = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

export default function formatMoney(pence) {
  return formatter.format(pence / 100);
}
