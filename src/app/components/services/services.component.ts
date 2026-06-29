import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" stroke-width="2"/>
        <path d="M16 20l-4 4 4 4M32 20l4 4-4 4M22 32l4-16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      title: 'Software Product Development',
      desc: 'Custom software products and enterprise solutions built for scale.',
      color: '#D4870A'
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none">
        <rect x="15" y="4" width="18" height="32" rx="3" stroke="currentColor" stroke-width="2"/>
        <path d="M20 34h8M24 38v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      title: 'Mobile App Development',
      desc: 'Android, iOS and cross-platform apps for businesses and citizens.',
      color: '#C07010'
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none">
        <path d="M8 24 C8 16 16 10 24 10 C32 10 40 16 40 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M14 32 C14 28 18 24 24 24 C30 24 34 28 34 32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <circle cx="24" cy="38" r="4" stroke="currentColor" stroke-width="2"/>
      </svg>`,
      title: 'Cloud & Digital Transformation',
      desc: 'Cloud migration, infrastructure setup, automation and digital modernization.',
      color: '#B06000'
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="2"/>
        <path d="M18 24 C18 18, 24 15, 24 15 C24 15, 30 18, 30 24 C30 30, 24 33, 24 33 C24 33, 18 30, 18 24Z" stroke="currentColor" stroke-width="2" fill="none"/>
        <path d="M8 24h8M32 24h8M24 8v8M24 32v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
      title: 'AI & Data Analytics',
      desc: 'AI-powered analytics, dashboards and intelligent decision support systems.',
      color: '#D4870A'
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2"/>
        <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M18 18l-4-4M34 14l-4 4M14 34l4-4M30 30l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.6"/>
      </svg>`,
      title: 'GIS & Location Intelligence',
      desc: 'Geo-spatial solutions, tracking systems and location-based applications.',
      color: '#C07010'
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8L36 14V26C36 34 24 40 24 40C24 40 12 34 12 26V14L24 8Z" stroke="currentColor" stroke-width="2"/>
        <path d="M19 24l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      title: 'Cyber Security Solutions',
      desc: 'Secure applications, data protection and compliance management.',
      color: '#B06000'
    }
  ];
}
