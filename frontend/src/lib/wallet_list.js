export const walletList = [
  { name: 'Ví cá nhân', balance: 200000 },
  { name: 'Ngân hàng MBBank', balance: 2200000 }
]

export const calcAllBalance = () => {
  return walletList.reduce((accumulator, wallet) => {
    return accumulator + wallet.balance
  }, 0)
}

const addNewWallet = (name, defaultMoney) => {
  return [...walletList, { name: name, balance: defaultMoney }]
}
