import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  constructor() { }

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const messages = [
      "Software Engineer, Grupo Acert (08/2023 - Present)",
      " - Migrating legacy code. ",
      " - Full development of microservices. ",
      " - Rest development and clean code best practices. ",
      " - Focus on development and creation of APIs. ",
      " - Skills – Java 17, Maven, Spring, SQL Server, Oracle, Postgres, Docker, Firebird, GIT, Postman, Trello, Sonar. ",
      "",
      "",
    
      "Software Engineer, Porto Seguro - Seguros (08/2021 - 06/2024)",
      " - Support and maintenance of the application for brokers. ",
      " - Problem solving and system structure maintenance. ",
      " - Development and maintenance of batch processing applications. ",
      " - Skills – Java 8, MySql, Maven, Spring, SQL Server, Oracle, Jenkins, SOA, GIT, Unit Testing, Jira, Swagger (YAML), GitLab. ",
      "",
      "",

      "Software Engineer, Usiminas (08/2020 - 12/2021)",
      " - Legacy code migration. ",
      " - Complete development of microservices. Structuring from Back-end to Front-end. ",
      " - System developed in Quarkus and Ionic, and deliveries are based on sprints. ",
      " - Focus on development and creation/consumption of APIs. ",
      " - Skills – Java 17, Java 11, Java 8, Quarkus, JBoss, Maven, Spring, Angular, Ionic, TS, SQL Server, Oracle, GIT, Unit Testing, Postman, Trello, GitLab. ",
      "",
      "",
    
      "Developer, AutService - Automação (06/2020 - 08/2020)",
      " - First experience in software development. ",
      " - Developed a Python bot for machine error control. ",
      " - Systemic project for control of parts entry/exit, pricing, and machine issue recording. ",
      " - Skills – Python, Java 8, Spring, Oracle, GIT. ",
      "",
      "",
    
      "Analyst, TV Cultura (01/2020 - 06/2020)",
      " - Experience with hardware, networking, component replacement, and formatting. ",
      " - Support for all company machines. ",
      " - Skills – Hardware, Networks, Support. "
    ];

    let index = 0;
    let textIndex = 0;
    const speed = 5; // Speed of typing
    const experienceMessageElement = document.getElementById('experience-message');

    function type() {
      if (index < messages.length) {
        if (textIndex < messages[index].length) {
          if(experienceMessageElement != null){
            experienceMessageElement.innerHTML += messages[index].charAt(textIndex);
            textIndex++;
            setTimeout(type, speed);
          }
        } else {
          if(experienceMessageElement != null){
            experienceMessageElement.innerHTML += '\n\n'; // Add two new lines between messages
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