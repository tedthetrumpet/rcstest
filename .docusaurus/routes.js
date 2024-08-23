import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/rcstest/build/',
    component: ComponentCreator('/rcstest/build/', '6b2'),
    exact: true
  },
  {
    path: '/rcstest/build/',
    component: ComponentCreator('/rcstest/build/', '502'),
    routes: [
      {
        path: '/rcstest/build/',
        component: ComponentCreator('/rcstest/build/', '121'),
        routes: [
          {
            path: '/rcstest/build/',
            component: ComponentCreator('/rcstest/build/', 'f22'),
            routes: [
              {
                path: '/rcstest/build/appendices',
                component: ComponentCreator('/rcstest/build/appendices', 'b9a'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/build/assessments',
                component: ComponentCreator('/rcstest/build/assessments', 'f4b'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/build/handbook',
                component: ComponentCreator('/rcstest/build/handbook', 'a8a'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/build/handbook/assessment',
                component: ComponentCreator('/rcstest/build/handbook/assessment', '88b'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/build/handbook/attendance',
                component: ComponentCreator('/rcstest/build/handbook/attendance', '417'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/build/handbook/learning_and_teaching',
                component: ComponentCreator('/rcstest/build/handbook/learning_and_teaching', 'df1'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/build/handbook/learning_environment',
                component: ComponentCreator('/rcstest/build/handbook/learning_environment', '525'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/build/handbook/programme_specification',
                component: ComponentCreator('/rcstest/build/handbook/programme_specification', '2bc'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/build/modules',
                component: ComponentCreator('/rcstest/build/modules', 'ea4'),
                exact: true,
                sidebar: "handbookSidebar"
              },
              {
                path: '/rcstest/build/modules/module_template',
                component: ComponentCreator('/rcstest/build/modules/module_template', '88f'),
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
