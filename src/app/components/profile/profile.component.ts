import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user!: User

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.user = this.api.getUser()
    console.log(this.user)
  }

}
