<script setup lang="ts">
import { inject, Ref } from 'vue'
import { SetSidebarVisibleFun } from '../app/interface'
import NavLinks from './Navlinks.vue'

const sidebarVisible = inject<Ref<boolean>>('sidebarVisible')
const setSidebarVisible = inject<SetSidebarVisibleFun>('setSidebarVisible')
const toggleSidebar = (): void => {
  setSidebarVisible?.(Boolean(!(sidebarVisible?.value)))
}
</script>

<template>
  <header class="navbar" @click.stop>
    <div class="navbar-left">
      <button
        class="sidebar-button"
        @click="toggleSidebar"
      >{{ sidebarVisible ? '关闭' : '开启' }}</button>
      <router-link
        class="logo-link"
        to="/home"
      >Tulp</router-link>
    </div>
    <NavLinks />
  </header>
</template>

<style lang="stylus">
.navbar {
  padding: 12px 24px;
  height: 60px;
  line-height: 2.2;
  display: flex;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  background-color: #fff;
  .navbar-left {
    box-sizing: border-box;
    width: calc(320px - 24px);
    padding-right: 10px;
    display: flex;
    align-items: center;
    transition: width 2s;
  }
  .logo-link {
    color: #262626;
    font-size: 24px;
    text-decoration: none;
    // text-shadow: 1px 1px 1px #ff0000;
    text-shadow: -.025em -.025em 0 #444, .025em -.025em 0 #444, -.025em .025em 0 #444, .025em .025em 0 #444;
    color: #fff;
    &:active {
      color: #262626;
      // text-shadow: 1px 1px 1px #ff0000;
    }
  }

  .sidebar-button {
    display: none;
    margin-right: 10px;
  }

  @media (max-width: 719px) {
    .sidebar-button {
      display: inline-block;
    }
    .nav-links {
      display: none;
    }
    .navbar-left {
      width: auto;
    }
  }
}
</style>
