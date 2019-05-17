
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/form/fields',
        component: () => import('pages/templates/form/FieldPage.vue')
      },
      {
        path: '/form/simple-form',
        component: () => import('pages/templates/form/SimpleFormPage.vue')
      },
      {
        path: '/form/complex-form',
        component: () => import('pages/templates/form/ComplexFormPage.vue')
      },
      {
        path: 'table/simple-table',
        component: () => import('pages/templates/table/SimpleTablePage.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
