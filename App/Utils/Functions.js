export const getTotalQuantity = cartList => {
  let total = 0;
  cartList.forEach(item => {
    total += item.quantity;
  });
  return total;
};

export const getTotalPrice = cartList => {
  let totalPrice = 0;
  cartList.forEach(item => {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice;
};

const symbols = [
  {value: 1, symbol: ''},
  {value: 1e6, symbol: 'M'},
  {value: 1e9, symbol: 'B'},
  {value: 1e12, symbol: 'T'},
  {value: 1e15, symbol: 'Q'},
  {value: 1e18, symbol: 'E'},
];

export function numberFormatter(num, digits, symbol) {
  const numToCheck = Math.abs(num);
  for (let i = symbols.length - 1; i >= 0; i--) {
    if (numToCheck >= symbols[i].value) {
      const newNumber = (num / symbols[i].value).toFixed(digits);
      const sign = newNumber < 0 ? '-' : '+';
      const absoluteValue = Math.abs(newNumber);
      if (sign === '-') {
        return `${sign}${symbol}${absoluteValue} ${symbols[i].symbol}`;
      }
      return `${symbol}${newNumber}${symbols[i].symbol}`;
    }
  }
  return '0';
}

export const currencyFormat = value => {
  if (!value) return value;
  const locale = 'en-us';
  const symbol = '$';
  if (value.toString().length > 6)
    return `${symbol}${isNaN(value) ? 0 : numberFormatter(value, 2, '')}`;
  else return `${symbol}${isNaN(value) ? 0 : value?.toLocaleString(locale)}`;
};
