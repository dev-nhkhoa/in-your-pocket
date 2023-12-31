// Hàm chuyển string về dạng format
// Ví dụ: input: 300000 -> output: 300.000đ
export const formatNumber = (num) => {
  return `${parseFloat(num).toLocaleString()} đ`
}
