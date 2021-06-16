import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public section: 'Albums' | 'Artists' | 'Songs' | 'Playlists' = 'Albums'
  readonly sections: string[] = ['Albums' , 'Artists' , 'Songs' , 'Playlists']

  constructor() { }

  ngOnInit(): void {
  }
  
  cover() {
    let color: string
    switch (this.section) {
      case 'Albums':
       color = '#FF2532'
       break
      case 'Artists':
        color = '#7525ff'
        break
      case 'Songs':
        color = '#64ed32'
       break
      case'Playlists':
        color = '#ffc925'
        break
    }
    return color
  }

}
