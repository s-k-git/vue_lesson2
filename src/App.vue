<template>
  <div>
    <h3>Vue Router 入門</h3>
    <noscript>
    <router-link to="/">ページ１へ</router-link><a> / </a>
    <router-link to="/page1">ページ１へ</router-link><a> / </a>
    <router-link to="/page2">ページ２へ</router-link><a> / </a>
    <router-link to="/page3">ページ３へ</router-link><a> / </a>
    <router-link to="/page4">ページ４へ</router-link>
    </noscript>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
      <div>
        {{$store.state}}
      </div>
  </div>
</template>