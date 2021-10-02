import { DefineComponent, Component } from 'vue'

export interface SidebarItemType {
  path: string;
  component: DefineComponent | Component;
  name?: string;
  redirect?: string;
  hidden?: boolean;
  meta?: { [key: string]: string };
  children?: SidebarItemType[]
}

export interface SidebarType {
  text: string,
  items: SidebarItemType[]
}

export interface NavBarType {
  path: string,
  component: DefineComponent | Component,
  name?: string;
  redirect?: string;
  meta?: { [key: string]: string };
  items: SidebarType[]
}
