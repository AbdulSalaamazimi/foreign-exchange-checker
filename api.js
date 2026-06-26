async function getCurrencies() {
  const response = await fetch('https://api.frankfurter.dev/v2/currencies');

  if (!response.ok) {
    throw new Error(`Failed to fetch currencies: ${response.status}`);
  }

  return response.json();
}

async function getLatestRates(baseCurrency, symbols) {
  let url = `https://api.frankfurter.dev/v2/latest?base=${baseCurrency}`;

  if (symbols) {
    url += `&symbols=${symbols}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch latest rates for ${baseCurrency}: ${response.status}`
    );
  }

  return response.json();
}

async function getHistoricalRates(
  baseCurrency,
  symbol,
  startDate,
  endDate
) {
  const url =
    `https://api.frankfurter.dev/v2/${startDate}..${endDate}` +
    `?base=${baseCurrency}&symbols=${symbol}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch historical rates for ${baseCurrency}/${symbol}: ${response.status}`
    );
  }

  return response.json();
}