import Vue from 'vue'

Vue.filter('btc', function (value) {
  if (typeof value !== 'number') {
    return value
  }
  let formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'BTC',
    minimumFractionDigits: 8
  })
  return formatter.format(value / 100000000)
})
