import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent {
  stacks = [
    {
      category: 'Frontend',
      icon: '⚡',
      techs: ['Angular', 'React', 'Flutter', 'HTML5', 'CSS3'],
      color: '#D4870A'
    },
    {
      category: 'Backend',
      icon: '⚙️',
      techs: ['Java', '.NET', 'Node.js', 'Python'],
      color: '#B06000'
    },
    {
      category: 'Database',
      icon: '🗄️',
      techs: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
      color: '#C07010'
    },
    {
      category: 'Cloud',
      icon: '☁️',
      techs: ['AWS', 'Microsoft Azure', 'Google Cloud'],
      color: '#D4870A'
    },
    {
      category: 'Analytics & AI',
      icon: '🧠',
      techs: ['Power BI', 'Machine Learning', 'Data Warehousing'],
      color: '#B06000'
    }
  ];
}
