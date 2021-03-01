import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      test works!
    </p>
  `,
  styles: [`p{
    text-align:center
    
    
    `
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
