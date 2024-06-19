import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const messages = [
      "Welcome to my resume!",
      "",
      "I am Renan Almeida da Silva.",
      "Back-end Developer since 2020.",
      "Experienced in Java, SpringBoot, AWS, and more.",
      "Feel free to explore my skills and experiences."
    ];

    let index = 0;
    let textIndex = 0;
    const speed = 20; // Speed of typing
    const welcomeMessageElement = document.getElementById('welcome-message');

    function type() {
      if (index < messages.length) {
        if (textIndex < messages[index].length) {
          if(welcomeMessageElement != null){
            welcomeMessageElement.innerHTML += messages[index].charAt(textIndex);
            textIndex++;
            setTimeout(type, speed);
          }
        } else {
          if(welcomeMessageElement != null){
            welcomeMessageElement.innerHTML += '\n\n'; // Add two new lines between messages
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
