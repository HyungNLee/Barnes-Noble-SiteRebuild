import { Component, OnInit } from '@angular/core';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-footer-link-list',
  templateUrl: './footer-link-list.component.html',
  styleUrls: ['./footer-link-list.component.css'],
  providers: [LinksService]
})
export class FooterLinkListComponent implements OnInit {

  servicesArray: any[] = [];

  shippingArray: any[] = [];

  nookArray: any[] = [];

  aboutUsArray: any[] = [];

  quickHelpArray: any[] = [];

  constructor(private linkService: LinksService) { }

  ngOnInit() {
    this.servicesArray = this.linkService.getServiceLinks();
    this.shippingArray = this.linkService.getShippingLinks();
    this.nookArray = this.linkService.getNookArrayLinks();
    this.aboutUsArray = this.linkService.getAboutUsLinks();
    this.quickHelpArray = this.linkService.getQuickHelpLinks();
  }

}
