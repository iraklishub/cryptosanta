const formatTokenValue = (value, decimals = 18, symbol = '') => {
  // Step 1: Divide the BigInt by 10^decimals to scale down the value
  const divisor = BigInt(10 ** decimals)
  const scaledValue = value / divisor

  // Step 2: Get the remainder to calculate the fractional part
  const remainder = value % divisor
  const fractionalPart = Number(remainder) / Number(divisor)

  // Step 3: Combine the integer and fractional parts
  let result = Number(scaledValue) + fractionalPart

  // Step 4: Round to two decimal places
  result = result.toFixed(2) // This ensures rounding to two decimal places

  // Step 5: Format with commas for thousands
  const [integerPart, decimalPart] = result.split('.') // Split into integer and decimal parts
  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',') // Add commas

  // Step 6: Return the final formatted string with symbol (optional)
  return `${integerWithCommas}.${decimalPart}${symbol ? ` ${symbol}` : ''}`
}

export default formatTokenValue
