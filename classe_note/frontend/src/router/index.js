import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/Register.vue'
import Acceuil from '@/views/Acceuil.vue'
import Dashboard from '@/views/Dashboard.vue'
import GestionClasses from '@/views/GestionClasses.vue'
import GestionMatieres from '@/views/GestionMatieres.vue'
import GestionProfesseurs from '@/views/GestionProfesseurs.vue'
import CahierDeTexte from '@/views/CahierDeTexte.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Acceuil },
  { path: '/register', name: 'register', component: Register },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/gestion-classes', name: 'gestion-classes', component: GestionClasses },
  { path: '/gestion-matieres', name: 'gestion-matieres', component: GestionMatieres },
  { path: '/gestion-professeurs', name: 'gestion-professeurs', component: GestionProfesseurs },
  { path: '/cahier-de-texte', name: 'cahier-de-texte', component: CahierDeTexte },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

createRouter({
  history: createWebHistory(),
  routes
});
export default routerKey;