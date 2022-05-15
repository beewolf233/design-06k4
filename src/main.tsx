/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 01:12:09
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2022-03-08 14:14:10
 * @Version: 1.0
 * @FilePath: \design-06k4\src\main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
// import ButtonDemo from './packages/button/__example__/example'
// import BasicTitle from './packages/typography/__example__/basicTitle'
// import BasicText from './packages/typography/__example__/basicText'
// import BasicAffix from './packages/affix/__example__/basic'
// import BasicBreadcrumb from './packages/breadcrunmb/__example__/basic'
// import WithRouter from './packages/breadcrunmb/__example__/WithRouter'
// import BasicDropDown from './packages/dorpdown/__example__/baisc'

// import HoriMenu from './packages/menu/__example__/horizontal-base'
// import VerticalBaseMenu from './packages/menu/__example__/vertical-base'
// import VerticalCollapesdMenu from './packages/menu/__example__/vertical-collapesd'
// import BasicPageHeader from './packages/page-header/__example__/base-page-header'
// import BgcolorPageHeaderPage from './packages/page-header/__example__/Bgcolor-page-header-page'
// import RoutsBreadcrumb from './packages/breadcrunmb/__example__/routsBreadcrumb'
// import BreadcrumbPageHeader from './packages/page-header/__example__/Breadcrumb-page-header'
// import AbilityPageHeader from './packages/page-header/__example__/Ability-page-header'

import BasicPagination from './packages/pagination/__example__/Basic-pagination'


import './style/index.scss'
ReactDOM.render(
  <>
    <BasicPagination />
  </>,
  document.getElementById('root')
)
