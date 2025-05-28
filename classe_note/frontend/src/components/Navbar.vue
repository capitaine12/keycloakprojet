<template>
  <nav class="navbar">
    <!-- Logo à gauche -->
    <div class="navbar-section navbar-left">
      <img :src="logo" alt="Logo" class="logo" />
    </div>

    <!-- Nom de l'université au centre -->
    <div class="navbar-section navbar-center">
      <div class="school-name">UNIVERSITÉ IBA DER THIAM DE THIÈS</div>
    </div>

    <!-- Profil utilisateur à droite -->
    <div class="navbar-section navbar-right" @click="toggleDropdown">
      <img :src="defaultAvatar" alt="Avatar" class="avatar" />
      <span class="username">{{ username }}</span>
      <svg class="chevron" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
        <path d="M7 10l5 5 5-5z" />
      </svg>

      <div v-if="dropdownOpen" class="dropdown-menu">
        <a href="#" @click.prevent="goToProfile">Mon Profil</a>
        <a href="#" @click.prevent="logout">Se Déconnecter</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/logo.png'
import defaultAvatar from '@/assets/default-avatar.png'

// Simuler un utilisateur connecté
const username = ref('M. Ndiaye')
const dropdownOpen = ref(false)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const goToProfile = () => {
  alert('Redirection vers le profil utilisateur')
}

const logout = () => {
  alert('Déconnexion...')
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.navbar-section {
  flex: 1;
  display: flex;
  align-items: center;
}

.navbar-left {
  justify-content: flex-start;
}

.navbar-center {
  justify-content: center;
  text-align: center;
}

.navbar-right {
  justify-content: flex-end;
  position: relative;
  cursor: pointer;
}

.logo {
  height: 40px;
}

.school-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  text-transform: uppercase;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
}

.username {
  font-weight: 500;
  color: #333;
  margin-right: 6px;
}

.chevron {
  fill: #333;
}

.dropdown-menu {
  position: absolute;
  top: 110%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0;
  border-radius: 6px;
  width: 160px;
  z-index: 1000;
}

.dropdown-menu a {
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background-color: #f5f5f5;
}
</style>
