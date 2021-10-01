import { DefineComponent, Component } from 'vue'

export interface NavLinkType {
  path: string;
  component: DefineComponent | Component;
  name?: string;
  redirect?: string;
  hidden?: boolean;
  meta?: { [key: string]: string };
  children?: NavLinkType[]
}