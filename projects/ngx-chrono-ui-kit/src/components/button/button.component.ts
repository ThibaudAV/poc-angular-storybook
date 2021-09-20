import { Component, ElementRef, OnInit } from '@angular/core'
import { FocusMonitor } from '@angular/cdk/a11y'

import { MatButton } from '@angular/material/button'

@Component({
  selector: 'cuk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent extends MatButton implements OnInit {
  constructor(elementRef: ElementRef, _focusMonitor: FocusMonitor) {
    super(elementRef, _focusMonitor, '')
  }

  ngOnInit(): void {}
}
