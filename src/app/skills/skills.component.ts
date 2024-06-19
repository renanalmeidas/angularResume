import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  constructor() { }

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const messages = [
      "                          Java                  JavaScript",
      "                          Git                   TypeScript",
      "                          Docker                SpringBoot",
      "                          CI                    JUnit",
      "                          OOP                   Linux",
      "                          Windows               MacOS",
      "                          Microservices         Distributed",
      "                          Back                  Front",
      "                          Quarkus               Spring",
      "                          Angular               Jenkins",
      "                          Maven                 Ionic"
    ];

    let index = 0;
    let textIndex = 0;
    const speed = 10; // Speed of typing
    const skillsMessageElement = document.getElementById('skills-message');

    function type() {
      if (index < messages.length) {
        if (textIndex < messages[index].length) {
          if(skillsMessageElement != null){
            skillsMessageElement.innerHTML += messages[index].charAt(textIndex);
            textIndex++;
            setTimeout(type, speed);
          }
        } else {
          if(skillsMessageElement != null){
            skillsMessageElement.innerHTML += '\n\n'; // Add two new lines between messages
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
