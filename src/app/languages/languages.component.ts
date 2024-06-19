import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {

  constructor() { }

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const messages = [
      "Portuguese: C2",
      "English: B2",
      "Spanish: B1"
    ];

    let index = 0;
    let textIndex = 0;
    const speed = 20; // Speed of typing
    const languagesMessageElement = document.getElementById('languages-message');

    function type() {
      if (index < messages.length) {
        if (textIndex < messages[index].length) {
          if(languagesMessageElement != null){
            languagesMessageElement.innerHTML += messages[index].charAt(textIndex);
            textIndex++;
            setTimeout(type, speed);
          }
        } else {
          if(languagesMessageElement != null){
            languagesMessageElement.innerHTML += '\n\n'; // Add two new lines between messages
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