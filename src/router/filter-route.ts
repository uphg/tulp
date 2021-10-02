import { SidebarType, SidebarItemType, NavBarType } from './interface'

export const filterSidebar = (sidebars: SidebarType[]) => {
  const newRoutes: unknown = []
  const getRouters = (sidebars: SidebarType[]) => {
    for(const route of sidebars) {
      if (route.text) {
        route.items.length > 0 && getRouters(route.items as unknown as SidebarType[])
      } else {
        (newRoutes as SidebarItemType[]).push(route as unknown as SidebarItemType)
      }
    }
  }
  getRouters(sidebars)
  return newRoutes as SidebarItemType[]
}

export const filterNavbar = (navbars: NavBarType[]) => {
  const newNavbar: SidebarItemType[] = []
  navbars.forEach((item: NavBarType) => {
    const { path, name, component, redirect, meta, items } = item
    newNavbar.push({
      path,
      ...(redirect ? { redirect } : {}),
      name,
      component,
      meta,
      children: filterSidebar(items) as SidebarItemType[],
    })
  });

  return newNavbar
}
