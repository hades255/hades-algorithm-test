function reportExpenses(arr) {
  let expenseCount = 0;
  let expenseSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      const amount = parseFloat(arr[i].replace(/[^\d.-]/g, ''));
      if (amount !== 0 && !isNaN(amount)) {
        if (amount < 0) {
          expenseCount++;
          expenseSum += Math.abs(amount);
        }
      }
    }
  }
  return `expenseCount: ${expenseCount}, expenseSum: ${expenseSum.toFixed(2)}`;
}