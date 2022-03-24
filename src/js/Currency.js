export default class CurrencyExchange {
  static async exchangeCurrency(foreignCurrency) {
    try {
      // const url = `https://v6.exchangerate-api.com/v6/39dcba4fa5ea9142fe439f2f/latest/USD`;
      const url = `https://v6.exchangerate-api.com/v6/39dcba4fa5ea9142fe439f2f/pair/USD/${foreignCurrency}`;
      console.log(url);
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

// Would you mind pushing this up to github? If so, don't forget to push just the .gitignore first. Thx //