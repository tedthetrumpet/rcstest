import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/rcstest/',
    component: ComponentCreator('/rcstest/', '63a'),
    exact: true
  },
  {
    path: '/rcstest/',
    component: ComponentCreator('/rcstest/', '994'),
    routes: [
      {
        path: '/rcstest/',
        component: ComponentCreator('/rcstest/', '70a'),
        routes: [
          {
            path: '/rcstest/',
            component: ComponentCreator('/rcstest/', '024'),
            routes: [
              {
                path: '/rcstest/appendices',
                component: ComponentCreator('/rcstest/appendices', 'e4c'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/assessments',
                component: ComponentCreator('/rcstest/assessments', '416'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/handbook',
                component: ComponentCreator('/rcstest/handbook', '9b3'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/handbook/assessment',
                component: ComponentCreator('/rcstest/handbook/assessment', '017'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/handbook/attendance',
                component: ComponentCreator('/rcstest/handbook/attendance', '091'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/handbook/learning_and_teaching',
                component: ComponentCreator('/rcstest/handbook/learning_and_teaching', '8f3'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/handbook/learning_environment',
                component: ComponentCreator('/rcstest/handbook/learning_environment', 'a6b'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/handbook/programme_specification',
                component: ComponentCreator('/rcstest/handbook/programme_specification', '2a1'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/modules',
                component: ComponentCreator('/rcstest/modules', '87f'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/modules/module_template',
                component: ComponentCreator('/rcstest/modules/module_template', 'ce7'),
                exact: true,
                sidebar: "handbookSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
