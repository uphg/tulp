
export const filterSidebar = (sidebars: any[]) => {
  const newRoutes: any[] = []
  const getRouters = (sidebars: any[]) => {
    for(const route of sidebars) {
      if (route?.text) {
        route?.items?.length > 0 && getRouters(route.items)
      } else {
        newRoutes.push(route)
      }
    }
  }
  getRouters(sidebars)
  return newRoutes
}

export const filterNavbar = (navbars: any) => {
  const newNavbar: any = []
  navbars.forEach(({
    path,
    name,
    component,
    redirect,
    meta,
    items
  }: any) => {
    newNavbar.push({
      path,
      ...(redirect ? { redirect } : {}),
      name,
      component,
      meta,
      children: filterSidebar(items),
    })
  });

  return newNavbar
}
