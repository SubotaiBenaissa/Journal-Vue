export default {
  name: 'daybook',
  component: () => import("../layouts/DaybookLayout.vue"),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import('@/modules/daybook/views/NoEntryView.vue')
    }
  ],
};
