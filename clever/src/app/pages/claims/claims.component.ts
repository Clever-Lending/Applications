import { Component } from '@angular/core';
import {ApiService} from "../../api/api";
import {AuthClientConfig} from "@auth0/auth0-angular";

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent {
  constructor(
    private api: ApiService,
    private configFactory: AuthClientConfig
  ) {
    api.claims().subscribe((data) => {
      setTimeout(() => {
        console.log(data);
      }, 1000)
    })
  }

}
