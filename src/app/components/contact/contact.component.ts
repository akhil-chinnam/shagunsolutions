import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = { name: '', email: '', subject: '', message: '' };
  submitted = false;

  contactInfo = [
    {
      icon: '🌐',
      label: 'Website',
      value: 'www.shagunsolutions.com',
      link: 'https://www.shagunsolutions.com'
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'shagun.technologies9@gmail.com',
      link: 'mailto:shagun.technologies9@gmail.com'
    },
    {
      icon: '📧',
      label: 'MD Email',
      value: 'md@shagunsolutions.com',
      link: 'mailto:md@shagunsolutions.com'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+91 9676745458',
      link: 'tel:+919676745458'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Vijayawada, Andhra Pradesh, India',
      link: '#'
    }
  ];

  submitForm() {
    this.submitted = true;
    setTimeout(() => { this.submitted = false; }, 4000);
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
