// Секция Desktop

// @ алиас к папке /src
export default [
  {
    path: '/desktop',
    name: 'desktop',
    // Создаётся чанк (desktop.[hash].js) для динамической загрузки при первого посещении ресурса
    component: () => import(/* webpackChunkName: "desktop" */ '@/views/Desktop.vue')
  }
]
