import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Tabs} from './components/tabs/tabs';
import {Tab} from './components/tab/tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    Tabs,
    Tab
  ],
  styleUrl: './app.scss'
})
export class App {
}
