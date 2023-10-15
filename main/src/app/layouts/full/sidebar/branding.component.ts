import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/dark-logo.svg"
          class="align-middle m-2"
          alt="logo_admin_evalia"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
