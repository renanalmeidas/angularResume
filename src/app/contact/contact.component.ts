import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor() { }

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const messages = [
      "Email: renan_almeidasv@outlook.com",
      "LinkedIn: https://www.linkedin.com/in/renanalmeidadasilva",
      "GitHub: https://github.com/renanalmeidas"
    ];

    let index = 0;
    let textIndex = 0;
    const speed = 20; // Speed of typing
    const contactMessageElement = document.getElementById('contact-message');

    function type() {
      if (index < messages.length) {
        if (textIndex < messages[index].length) {
          if(contactMessageElement != null){
            contactMessageElement.innerHTML += messages[index].charAt(textIndex);
            textIndex++;
            setTimeout(type, speed);
          }
        } else {
          if(contactMessageElement != null){
            contactMessageElement.innerHTML += '\n\n'; // Add two new lines between messages
            textIndex = 0;
            index++;
            setTimeout(type, speed);
          }
        }
      }
    }

    type();
  }
}