// Секция Dynamic

// @ алиас к папке /src
export default [
  {
    path: '/dynamic',
    name: 'dynamic',
    // Создаётся чанк (dynamic.v1.[hash].js) для динамической загрузки при первого посещении ресурса
    component: () => import(/* webpackChunkName: "dynamic" */ '@/views/DynamicLoadModule.vue')
  }
]
