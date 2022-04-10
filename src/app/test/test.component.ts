import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <button (click)="OnClick($event)">Click Me Now</button>{{msg}}
  <input [(ngModel)]="name" type="text" >{{name}}
  <h2>Hello</h2>
  <h2 [style.color]="clsGreen?'green':'red'">Hello All this is style binding</h2>
  <h2 [class]="classGreen" class="txt" >Akhil Banagiri</h2>
  <h2 [style.color]="mark">This is angular style binding</h2>
  <h2 [ngStyle]="allStyle">This line is styled by NgStyles</h2>
  <h2 [class.red]="classRed">This is demo line</h2>
  <h1 [ngClass]="textStyle">Welcome to multiple styles</h1>
  <p> 
    This is template from test.component.html
  </p>
  <input bind-disabled="isDisabled" id="{{idVar}}" [value]="testVar" type="text" value="Akhil">`,
  styles : [`
    p{
      color:red
    }
    .green{
      color:green;
    }
    .red{
      color:orange;
    }
    .txt{
      font-style:italic;
    }`
  ]
})
export class TestComponent implements OnInit {
  public name = "";
  public testVar = "test";
  public idVar = "demo123";
  public isDisabled = false;
  public classGreen = "green";
  public classRed = true;
  public clsGreen = false;

  public textStyle = {
    "green" : true,
    "red" : false,
    "txt" : true,
  }
  public greenText = false;
  public redText = false;
  public italicText = false;

  public mark = "orange";

  public allStyle = {
    color:"yellow",
    fontStyle:"italic"
  }
  public msg = "";
  OnClick(event:MouseEvent){
    console.log("Hello everyone, user clicked on the button");
    this.msg="Button was clicked";
    console.log(this.msg);
    console.log(event.type);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
