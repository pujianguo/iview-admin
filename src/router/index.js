import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/pages/Login'
import Logout from '@/views/pages/Logout'
import NotFound from '@/views/pages/NotFound'

import Full from '@/views/framework/Full'
import Home from '@/components/home/Home'

import Form from '@/components/form/Form'
import BaseForm from '@/components/form/BaseForm'
import Edit from '@/components/form/Edit'
import MarkDown from '@/components/form/MarkDown'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/',
      component: Full,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },

        // form
        {
          path: 'form',
          component: Form,
          children: [
            {
              path: 'baseform',
              name: 'baseform',
              component: BaseForm
            },
            {
              path: 'eidt',
              name: 'edit',
              component: Edit
            },
            {
              path: 'markdown',
              name: 'markdown',
              component: MarkDown
            }
          ]
        },

        // // audit
        // {
        //   path: 'audit',
        //   component: Audit,
        //   children: [
        //     {
        //       path: '',
        //       name: 'audit_list',
        //       component: AuditList
        //     }, {
        //       path: 'add',
        //       name: 'audit_add',
        //       component: AuditEdit
        //     }, {
        //       path: 'edit/:id',
        //       name: 'audit_edit',
        //       component: AuditEdit
        //     }, {
        //       path: ':id',
        //       name: 'audit_detail',
        //       component: AuditDetail
        //     }
        //   ]
        // },

        // not find
        {
          path: '*',
          component: NotFound
        }
      ]
    }
  ]
})