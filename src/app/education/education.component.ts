import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  constructor() { }

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const messages = [
      "                    Technologist in ADS",
      "                    Faculdade Impacta - (02/2020 - 11/2022)",
      "",
      "",
      "                    Bachelor's in Information Systems",
      "                    Faculdade Impacta - (02/2020 - 01/2024)"
    ];

    let index = 0;
    let textIndex = 0;
    const speed = 20; // Speed of typing
    const educationMessageElement = document.getElementById('education-message');

    function type() {
      if (index < messages.length) {
        if (textIndex < messages[index].length) {
          if(educationMessageElement != null){
            educationMessageElement.innerHTML += messages[index].charAt(textIndex);
            textIndex++;
            setTimeout(type, speed);
          }
        } else {
          if(educationMessageElement != null){
            educationMessageElement.innerHTML += '\n\n'; // Add two new lines between messages
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




// <p></p>
// <p></p>