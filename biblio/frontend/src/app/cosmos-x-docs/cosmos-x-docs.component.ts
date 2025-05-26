import { Component } from '@angular/core';
import { CoursService } from './cours.service';

@Component({
  selector: 'app-cosmos-x-docs',
  standalone: true,
  templateUrl: './cosmos-x-docs.component.html',
  styleUrls: ['./cosmos-x-docs.component.css'],
  imports: []
})
export class CosmosXDocsComponent {
  cours: any[] = [];

  constructor(private coursService: CoursService) {}

  ngOnInit() {
    this.coursService.getCours().subscribe({
      next: (data: any[]) => this.cours = data,
      error: (err: any) => console.error('Erreur de chargement des cours', err)
    });
  }
}