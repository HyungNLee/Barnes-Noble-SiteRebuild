import { Injectable } from '@angular/core';
import { SERVICES_LINKS } from './mock-slick-data';
import { SHIPPING_LINKS } from './mock-slick-data';
import { NOOK_ARRAY_LINKS } from './mock-slick-data';
import { ABOUT_US_LINKS } from './mock-slick-data';
import { QUICK_HELP_LINKS } from './mock-slick-data';

@Injectable()
export class LinksService {

  constructor() { }

  getServiceLinks() {
    return SERVICES_LINKS;
  }

  getShippingLinks() {
    return SHIPPING_LINKS;
  }

  getNookArrayLinks() {
    return NOOK_ARRAY_LINKS;
  }

  getAboutUsLinks() {
    return ABOUT_US_LINKS;
  }

  getQuickHelpLinks() {
    return QUICK_HELP_LINKS;
  }

}
