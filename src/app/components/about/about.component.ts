import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  pillars = [
    {
      icon: '🎯',
      title: 'Our Vision',
      text: 'To be a leading technology innovation company delivering impactful digital solutions that empower a better future.'
    },
    {
      icon: '🚀',
      title: 'Our Mission',
      text: 'To build innovative, reliable and user-centric solutions that solve real-world challenges and drive digital transformation.'
    },
    {
      icon: '💎',
      title: 'Our Values',
      items: ['Innovation', 'Integrity', 'Excellence', 'Customer Success', 'Teamwork']
    }
  ];
}
