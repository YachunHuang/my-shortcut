import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isInternalIp = false;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get<any>('https://api.ipify.org?format=json').subscribe(res => {
      this.isInternalIp = res.ip.startsWith('172.16.');
    });
  }
}
