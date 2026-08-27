class BankAccount {
constructor (balance = 0, transactions = []){
  this.balance = balance;
  this.transactions = transactions;
}
deposit(amount){
  if (amount > 0) {
    this.transactions.push({type:"deposit", "amount": amount})
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}` 
  }
  if (amount <= 0) {
    
    return "Deposit amount must be greater than zero."
  }
}

withdraw(amount){
  if (amount > 0 && this.balance >= amount) {
    this.transactions.push({type:"withdraw", "amount": amount})
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`
  } 
  if (amount <= 0 || this.balance < amount) {
    
    return "Insufficient balance or invalid amount."
  }

}
checkBalance(){
  return `Current balance: $${this.balance}`
}

listAllDeposits() {
  let deposits = [];
  for (const { type, amount } of this.transactions) {
    if (type === "deposit") {
      deposits.push(amount);
    }
  }
  return `Deposits: ${deposits.join(",")}`;
}

listAllWithdrawals() {
  let deposits = [];
  for (const { type, amount } of this.transactions) {
    if (type === "withdraw") {
      deposits.push(amount);
    }
  }
  return `Withdrawals: ${deposits.join(",")}`;
}

}
const myAccount = new BankAccount()
myAccount.deposit(150)
myAccount.deposit(750)
myAccount.deposit(150)
myAccount.deposit(150)
myAccount.withdraw(10)
myAccount.withdraw(622)
console.log(myAccount.checkBalance())
console.log(myAccount.listAllWithdrawals())
