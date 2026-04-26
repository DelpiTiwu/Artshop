<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const alert = ref({ show: false, color: 'success', text: '' })

const handleAppAlert = (e) => {
  const { color, text } = e.detail || {}
  alert.value = { show: true, color: color || 'info', text: text || '' }
  window.clearTimeout(window.__alertTimer)
  window.__alertTimer = window.setTimeout(() => {
    alert.value.show = false
  }, 3500)
}

onMounted(() => {
  window.addEventListener('app-alert', handleAppAlert)
})

onUnmounted(() => {
  window.removeEventListener('app-alert', handleAppAlert)
  window.clearTimeout(window.__alertTimer)
})
</script>

<template>
  <div id="app">
    <div v-if="alert.show" class="app-alert-container" :class="'app-alert--' + alert.color">
      <span class="app-alert-text">{{ alert.text }}</span>
      <button class="app-alert-close" @click="alert.show = false">&times;</button>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.app-alert-container {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 3000;
  max-width: 360px;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #fff;
  font-size: 0.95rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.app-alert--info {
  background: linear-gradient(135deg, #3498db, #2980b9);
}

.app-alert--success {
  background: linear-gradient(135deg, #2ecc71, #27ae60);
}

.app-alert--primary {
  background: linear-gradient(135deg, #c77d46, #b8960c);
}

.app-alert--warning {
  background: linear-gradient(135deg, #f39c12, #e67e22);
}

.app-alert--danger {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
}

.app-alert-text {
  flex: 1;
}

.app-alert-close {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  opacity: 0.8;
  line-height: 1;
  padding: 0;
}

.app-alert-close:hover {
  opacity: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
