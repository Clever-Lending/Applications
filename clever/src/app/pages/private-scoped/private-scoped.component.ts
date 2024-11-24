import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {ApiService} from "../../api/api";
import {AuthClientConfig} from "@auth0/auth0-angular";

@Component({
  selector: 'app-private-scoped',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './private-scoped.component.html',
  styleUrl: './private-scoped.component.css'
})
export class PrivateScopedComponent {
  responseJson: string;
  audience: string | undefined;
  hasApiError = false;

  constructor(
    private api: ApiService,
    private configFactory: AuthClientConfig
  ) {
    this.audience = this.configFactory.get()?.authorizationParams.audience;
  }

  pingApi() {
    this.api.privateScoped().subscribe({
      next: (res) => {
        this.hasApiError = false;
        this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: () => this.hasApiError = true,
    });
  }
}
