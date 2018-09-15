// Секция Blockchain

// @ алиас к папке /src
export default [
  {
    path: '/blockchain',
    name: 'blockchain',
    // Создаётся чанк (blockchain.[hash].js) для динамической загрузки при первого посещении ресурса
    component: () => import(/* webpackChunkName: "blockchain" */ '@/views/Blockchain.vue')
  }
]
