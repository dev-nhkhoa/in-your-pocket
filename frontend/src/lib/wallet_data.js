import { USERS_DATA_TEMPLATE } from './users_data'

export const getWallets = () => {
  return USERS_DATA_TEMPLATE.wallet
}

export const getWallet = (walletName) => {
  return getWallets().filter((wallet) => wallet.name === walletName)[0]
}

export const calcTotal = () => {
  return getWallets().reduce((accumulator, wallet) => {
    return accumulator + wallet.balance(wallet.name)
  }, 0)
}

export const calcWalletBalance = (walletName) => {
  return getTransaction(walletName).reduce((accumulator, transaction) => {
    return accumulator + transaction.balanceChange
  }, 0)
}

export const addNewWallet = (name, defaultMoney) => {
  USERS_DATA_TEMPLATE.wallet = [
    ...USERS_DATA_TEMPLATE.wallet,
    { name: name, balance: defaultMoney, transactions: [] }
  ]
}

export const getAllTransactions = () => {
  let allTransactions = []
  getWallets().forEach((wallet) => {
    allTransactions.push(...wallet.transactions)
  })
  return allTransactions
}

export const getTransaction = (walletName) => {
  return getWallet(walletName).transactions
}

export const getWalletViaIdTransaction = (idTransaction) => {
  return getWallets().filter(
    (wallet) =>
      wallet.transactions.filter(
        (transaction) => transaction._id === idTransaction
      )[0]
  )[0].name
}
