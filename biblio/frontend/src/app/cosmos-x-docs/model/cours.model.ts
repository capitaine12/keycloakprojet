// src/app/cosmos-x-docs/model/cours.model.ts

export interface Cours {
  id?: number; // optionnel, si présent dans le backend
  titre: String;
  description: String;
  url: String;
  image: String;
}

