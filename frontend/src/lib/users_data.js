const USERS_DATA_TEMPLATE = {
  _id: 'IYP-1',
  username: 'anhkhoa000zz',
  password: '123456@',
  data_created: '31/12/2023',
  time_created: '23:11',
  wallet: [
    {
      name: 'Ví cá nhân',
      balance: 0,
      transactions: [
        {
          _id: (_id) => `TRANS-${_id}-1`,
          balanceChange: 300000, // - 300000,
          date: '31/12/2023',
          time: '23:15',
          note: 'Chuyển quỹ'
        }
      ]
    }
  ]
}
