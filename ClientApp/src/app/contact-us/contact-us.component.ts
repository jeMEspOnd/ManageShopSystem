import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  onSubmit() {
    // Handle form submission logic here
    // For example, you can send the data to your backend or display a message
    alert('Your message has been sent! We will get back to you shortly.');
  }
}
