import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/container/footer/footer.component';
import { HeaderComponent } from '../../components/container/header/header.component';
import { TeamComponent } from '../../components/container/team/team.component';
import { SmoothScrollService } from '../../smooth-scroll.service';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [FooterComponent, HeaderComponent, TeamComponent],
})

export class HomePageComponent implements OnInit {
  members = [
    {
      name: 'Jimy Dolores',
      role: 'Senior Frontend Architect',
      imgSrc: '../icons/headshot_JimyDolores.jpeg',
      linkedinUrl: 'https://pe.linkedin.com/in/jimyhuachodolores',
    },
    {
      name: 'Kevin Dávila',
      role: 'Senior Frontend Developer',
      imgSrc: '../icons/headshot_KevinDavila.jpg',
      linkedinUrl: 'https://linkedin.com/in/kevin-davila-dev',
    },
    {
      name: 'Luis Eduardo Pérez',
      role: 'Senior Frontend Developer',
      imgSrc: '../icons/headshot_LuisEduardo.JPEG',
      linkedinUrl: 'https://linkedin.com/in/luiseduardoperezpacherrez',
    },
    {
      name: 'Shirley Ramos',
      role: 'Senior Frontend Developer & UI designer',
      imgSrc: '../icons/headshot_ShirleyRamos.jpeg',
      linkedinUrl: 'https://linkedin.com/in/shirleyramos',
    },
  ];

  constructor(private smoothScrollService: SmoothScrollService) {}

  ngOnInit(): void {
    this.smoothScrollService.initSmoothScroll();
  }
}
