import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MineComponent } from './mine/mine.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MineComponent, HeaderComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crash2';
}
