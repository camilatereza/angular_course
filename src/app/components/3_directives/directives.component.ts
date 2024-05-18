import { Component } from '@angular/core'

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  size: number = 25
  font: string = 'Arial'
  color: string = 'purple'

  //são configuradas na parte de css
  classes = ['green-title', 'small-title']

  underline = 'underline-title'
}
