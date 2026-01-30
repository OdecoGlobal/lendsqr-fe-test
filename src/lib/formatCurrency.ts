const CURRENCY_FORMATTER = new Intl.NumberFormat('en-NG', {
  currency: 'NGN',
  style: 'currency',
  minimumFractionDigits: 2,
});

export function formatCurrency(amount: number | string | null | undefined) {
  let value: number;
  if (typeof amount === 'number') {
    value = amount;
  } else if (typeof amount === 'string') {
    value = Number(amount);
  } else {
    return 'NaN';
  }
  if (isNaN(value)) {
    return 'NaN';
  }

  return CURRENCY_FORMATTER.format(value);
}
