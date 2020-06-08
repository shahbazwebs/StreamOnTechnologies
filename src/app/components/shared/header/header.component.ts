import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isSticky: boolean = false;

  constructor() { }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    $.getScript('../../../../assets/js/customMenu.js', function(){});    
  }

}
