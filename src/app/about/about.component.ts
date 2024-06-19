import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor() { }

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const messages = [
      "I have been working with Back-end development since 2020.",
      "Experienced in projects and support, migrating legacy code.",
      "Most of my career, I have worked with Java development (8, 11, and 17) and relational databases.",
      "I hold a technologist degree in Systems Analysis and",
      "Development and a bachelor's degree in Information Systems."
    ];

    let index = 0;
    let textIndex = 0;
    const speed = 20; // Speed of typing
    const aboutMessageElement = document.getElementById('about-message');

    function type() {
      if (index < messages.length) {
        if (textIndex < messages[index].length) {
          if(aboutMessageElement != null){
            aboutMessageElement.innerHTML += messages[index].charAt(textIndex);
            textIndex++;
            setTimeout(type, speed);
          }
        } else {
          if(aboutMessageElement != null){
            aboutMessageElement.innerHTML += '\n\n'; // Add two new lines between messages
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
