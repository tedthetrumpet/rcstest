import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dev/rcstemplate-2024-08-06/',
    component: ComponentCreator('/dev/rcstemplate-2024-08-06/', 'b97'),
    exact: true
  },
  {
    path: '/dev/rcstemplate-2024-08-06/',
    component: ComponentCreator('/dev/rcstemplate-2024-08-06/', 'bdf'),
    routes: [
      {
        path: '/dev/rcstemplate-2024-08-06/',
        component: ComponentCreator('/dev/rcstemplate-2024-08-06/', '05e'),
        routes: [
          {
            path: '/dev/rcstemplate-2024-08-06/',
            component: ComponentCreator('/dev/rcstemplate-2024-08-06/', '20a'),
            routes: [
              {
                path: '/dev/rcstemplate-2024-08-06/appendices/',
                component: ComponentCreator('/dev/rcstemplate-2024-08-06/appendices/', '672'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/dev/rcstemplate-2024-08-06/assessments/',
                component: ComponentCreator('/dev/rcstemplate-2024-08-06/assessments/', '441'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/dev/rcstemplate-2024-08-06/handbook/',
                component: ComponentCreator('/dev/rcstemplate-2024-08-06/handbook/', '68e'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/dev/rcstemplate-2024-08-06/handbook/assessment',
                component: ComponentCreator('/dev/rcstemplate-2024-08-06/handbook/assessment', '807'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/dev/rcstemplate-2024-08-06/handbook/attendance',
                component: ComponentCreator('/dev/rcstemplate-2024-08-06/handbook/attendance', 'd27'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/dev/rcstemplate-2024-08-06/handbook/learning_and_teaching',
                component: ComponentCreator('/dev/rcstemplate-2024-08-06/handbook/learning_and_teaching', '9d7'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/dev/rcstemplate-2024-08-06/handbook/learning_environment',
                component: ComponentCreator('/dev/rcstemplate-2024-08-06/handbook/learning_environment', '33a'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/dev/rcstemplate-2024-08-06/handbook/programme_specification',
                component: ComponentCreator('/dev/rcstemplate-2024-08-06/handbook/programme_specification', '2c9'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/dev/rcstemplate-2024-08-06/modules/',
                component: ComponentCreator('/dev/rcstemplate-2024-08-06/modules/', 'ff5'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/dev/rcstemplate-2024-08-06/modules/module_template',
                component: ComponentCreator('/dev/rcstemplate-2024-08-06/modules/module_template', '350'),
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
