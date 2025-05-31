import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { CoursService } from './services/cours.service';
import { Cours } from './model/cours.model';

@Component({
  selector: 'app-cosmos-x-docs',
  standalone: true,
  templateUrl: './cosmos-x-docs.component.html',
  styleUrls: ['./cosmos-x-docs.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CosmosXDocsComponent implements OnInit {
  cours: Cours[] = [];
  filteredCours: Cours[] = [];
  searchTerm: string = '';
  useApi: boolean = true;
  showProfileMenu = false;
  showMobileMenu = false;
  activeTab: string = 'accueil';
  username: string = 'Utilisateur';

  constructor(
    //private coursService: CoursService,
    private keycloak: KeycloakService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadUserInfo();
  }

  /* loadCourses() {
    if (this.useApi) {
      this.coursService.getCours().subscribe({
        next: (data) => {
          this.cours = data;
          this.filteredCours = [...data];
        },
        error: (err) => {
          console.error('Erreur de chargement des cours', err);
          this.cours = [];
          this.filteredCours = [];
        }
      });
    } else {
      this.cours = [
        { titre: 'Programmation Web', description: 'HTML, CSS, JS', url: 'https://example.com/web', image: 'assets/imgs/cours1.png' },
        { titre: 'Base de Données', description: 'SQL & Oracle', url: 'https://example.com/sql', image: 'assets/imgs/cours2.png' }
      ];
      this.filteredCours = [...this.cours];
    }
  } */
loadCourses() {
  this.cours = [
    {
      titre: "Programmation Web",
      description: "HTML, CSS, JavaScript",
      url: "https://exemple.com/cours1.pdf",
      image: "assets/imgs/cours.png"
    },
    {
      titre: "Base de Données",
      description: "Introduction à MySQL",
      url: "https://exemple.com/cours2.pdf",
      image: "assets/imgs/cours1.png"
    },
        {
      titre: "Programmation Web",
      description: "HTML, CSS, JavaScript",
      url: "https://exemple.com/cours1.pdf",
      image: "assets/imgs/cours.png"
    },
    {
      titre: "Base de Données",
      description: "Introduction à MySQL",
      url: "https://exemple.com/cours2.pdf",
      image: "assets/imgs/cours1.png"
    },
        {
      titre: "Programmation Web",
      description: "HTML, CSS, JavaScript",
      url: "https://exemple.com/cours1.pdf",
      image: "assets/imgs/cours.png"
    },
    {
      titre: "Base de Données",
      description: "Introduction à MySQL",
      url: "https://exemple.com/cours2.pdf",
      image: "assets/imgs/cours1.png"
    }
  ];
  this.filteredCours = [...this.cours];
}

  loadUserInfo() {
    const token = this.keycloak.getKeycloakInstance().tokenParsed;
    this.username = token?.['name'] || token?.['preferred_username'] || 'Utilisateur';
  }

  logout() {
    this.keycloak.logout(window.location.origin);
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  searchCourses() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCours = this.cours.filter(c =>
      c.titre.toLowerCase().includes(term) || c.description.toLowerCase().includes(term)
    );
  }
}
