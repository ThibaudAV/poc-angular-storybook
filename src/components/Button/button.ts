import { Component, Input, Output, EventEmitter } from '@angular/core'

type DefaultProps = {
  /**
   * Clear button styles leaving just a text
   */
  clear?: boolean
  round?: boolean
  /**
   * Is the button large?
   */
  large?: boolean
  /**
   * Does the button have an icon?
   */
  icon?: string
  /**
   * Size of the icon
   */
  iconSize?: number
  /**
   * Is the button disabled?
   */
  disabled?: boolean
  /**
   * Does the button have an icon?
   */
  children?: React.ReactNode | string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const DefaultPropsObj: DefaultProps = {
  clear: undefined,
  round: undefined,
  large: undefined,
  icon: undefined,
  iconSize: undefined,
  disabled: undefined,
  children: undefined,
  onClick: undefined,
}

@Component({
  selector: 'storybook-button',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class Button {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium'

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button'

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>()

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary'

    return ['storybook-button', `storybook-button--${this.size}`, mode]
  }
}
