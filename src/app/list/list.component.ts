import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  list: any[] = [
    {
      title: 'software developer',
      subtitle: 'day-shift',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'senior software developer',
      subtitle: 'day-shift',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'junior software developer',
      subtitle: 'night-shift',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'software tester',
      subtitle: 'day-shift',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
}
