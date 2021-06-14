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
  public edit: boolean = false

  section: 'followers' | 'following' = 'following'

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.user = this.api.getUser()
    console.log(this.user)
  }

  editProfile(): boolean {
    return this.edit = true
  }

  saveProfile(input_1: HTMLInputElement, input_2: HTMLInputElement): boolean {
    let name = input_1.value
    let bday = input_2.value
    this.user.birthday = new Date(bday)
    this.user.fullname = name
    return this.edit = false
  }

  unfollow(value: string): void {
    this.user.unfollow(value)
  }

  follow(value: string): void {
    this.user.follow(value)
  }

  ifFollow(username: string): boolean {
    return (this.user.following.findIndex((value: User) => value.username == username) > -1) ? true : false
  }

  get date () {
    return `${this.user.birthday.getFullYear()}-${this.user.birthday.getMonth()+1}-${this.user.birthday.getDate()}`
  }
}
