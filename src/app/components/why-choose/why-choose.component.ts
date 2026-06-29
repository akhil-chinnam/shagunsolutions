import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose.component.html',
  styleUrls: ['./why-choose.component.css']
})
export class WhyChooseComponent {
  reasons = [
    { text: 'Innovation Driven Solutions', detail: 'We bring cutting-edge tech to every engagement.' },
    { text: 'Domain Expertise in Government & Enterprise', detail: 'Deep experience in regulated and complex environments.' },
    { text: 'Scalable, Secure & Future-Ready Architecture', detail: 'Built to grow with your organization.' },
    { text: 'Data-Driven Insights for Better Decisions', detail: 'Analytics embedded into every solution.' },
    { text: 'On-Time Delivery with Quality Assurance', detail: 'We ship on schedule without compromising quality.' },
    { text: 'Strong Focus on User Experience', detail: 'Intuitive interfaces that users actually love.' }
  ];
}
