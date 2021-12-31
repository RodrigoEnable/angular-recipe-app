import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() url?: string;
  @Input() title?: string;
  @Input() color?: string;

  constructor() {}

  ngOnInit(): void {}
}
