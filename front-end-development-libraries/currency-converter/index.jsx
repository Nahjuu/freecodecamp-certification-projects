const { useState, useMemo } = React;

export function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [selectFrom, setSelectFrom] = useState("USD");
  const [selectTo, setSelectTo] = useState("USD");

  const convertTable = {
    "USD": 1,
    "EUR": 0.92,
    "GBP": 0.78,
    "JPY": 156.7
  };

  const memoizedConversions = useMemo(() => {
    const numericAmount = Number(amount) || 0;
    const baseAmount = numericAmount / convertTable[selectFrom];
    
    return {
      USD: baseAmount * convertTable["USD"],
      EUR: baseAmount * convertTable["EUR"],
      GBP: baseAmount * convertTable["GBP"],
      JPY: baseAmount * convertTable["JPY"],
    };
  }, [amount, selectFrom]);

    const convertedAmount = memoizedConversions[selectTo].toFixed(2);
  

  return (
    <>
      <input 
        type="number" 
        placeholder="Set an amount" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)} 
      />
      <br />
      
      <select 
        value={selectFrom} 
        onChange={(e) => setSelectFrom(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <br />

      <select 
        value={selectTo} 
        onChange={(e) => setSelectTo(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      <div id="result">Converted Amount: {convertedAmount} {selectTo}</div>
    </>
  );
}
