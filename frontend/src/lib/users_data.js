import { calcWalletBalance } from './wallet_data'

export const USERS_DATA_TEMPLATE = {
  _id: 'IYP-1',
  username: 'anhkhoa000zz',
  password: '123456@',
  data_created: '31/12/2023',
  time_created: '23:11',
  wallet: [
    {
      // _id: (generateWalletId) => `${this.username}-wallet-${generateWalletId}`,
      _id: 'anhkhoa000zz-wallet-1',
      name: 'Ví Cá Nhân',
      balance: (walletName) => calcWalletBalance(walletName),
      transactions: [
        {
          // _id: (generateTransactionId) =>
          //   `wallet-${this._id}-transaction-${generateTransactionId}`,
          _id: 'anhkhoa000zz-wallet-1-transaction-1',
          balanceChange: 300000, // - 300000,
          date: '31/12/2023',
          time: '23:15',
          note: 'Chuyển quỹ'
        }
      ]
    },
    {
      _id: 'anhkhoa000zz-wallet-2',
      name: 'Ngân Hàng MBBank',
      balance: (walletName) => calcWalletBalance(walletName),
      transactions: [
        {
          _id: 'anhkhoa000zz-wallet-2-transaction-1',
          balanceChange: 500000, // - 300000,
          date: '31/12/2023',
          time: '23:15',
          note: 'Chuyển quỹ'
        },
        {
          _id: 'anhkhoa000zz-wallet-2-transaction-2',
          balanceChange: -900000, // - 300000,
          date: '31/12/2023',
          time: '23:16',
          note: 'Chuyển quỹ'
        }
      ]
    }
  ]
}
