import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
 <button 
  style="width: 100%; height: 100%; font-size: 2rem"
  
  [ngClass]="{ 'player-x': value === 'X', 'player-o': value === 'O', 'winning-square': isWinningSquare }"
>
  {{ value }}
</button>
`,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined;
  @Input() isWinningSquare: boolean = false;
}

