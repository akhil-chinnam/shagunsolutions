import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {
  solutions = [
    {
      title: 'Governance & Public Services',
      desc: 'Digital solutions for e-governance, citizen services, and public administration transparency.',
      emoji: '🏛️',
      tags: ['e-Gov', 'Citizen Portal', 'Compliance']
    },
    {
      title: 'Supply Chain & Logistics',
      desc: 'End-to-end visibility platforms for tracking, fleet management, and supply chain optimization.',
      emoji: '🚚',
      tags: ['Tracking', 'Fleet Mgmt', 'Analytics']
    },
    {
      title: 'Agriculture & Rural Development',
      desc: 'Smart farming solutions, crop management, and rural development digitization platforms.',
      emoji: '🌾',
      tags: ['Smart Farm', 'IoT', 'Rural Dev']
    },
    {
      title: 'Enterprise Solutions',
      desc: 'ERP, CRM, HRMS and custom enterprise applications tailored to your workflows.',
      emoji: '🏢',
      tags: ['ERP', 'CRM', 'HRMS']
    },
    {
      title: 'Monitoring & Analytics Platforms',
      desc: 'Real-time dashboards, BI tools, and AI-powered monitoring for data-driven decisions.',
      emoji: '📊',
      tags: ['BI', 'Real-time', 'AI Insights']
    }
  ];
}
