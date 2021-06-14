import { NgLocaleLocalization } from "@angular/common"

interface Name {
    first: string,
    last: string
}

export interface JSON {
  username: string,
  name: Name,
  birthday: Date,
  following: User[],
  followers: User[]
}

export class User {
  public following: User[] = []
  public followers: User[] = []
  public username: string

  constructor (
    public name: Name,
    public birthday: Date,
    username?: string
  ) {
    // if id exists, set id, else generate random string id
    this.username = username ? username : Math.random().toString(36).substr(3, 16)
  }

  get age () {
    let day = 24 * 60 * 60 * 1000 // 24 hrs * 60 min * 60 sec * 1000 ms
    let diff = new Date().getTime() - this.birthday.getTime()
    return Math.floor(diff / (365 * day))
  }

  static fromJSON (json: JSON) {
    let user: User = new User(json.name, json.birthday, json.username)
    for (let follower of json.followers)
      user.followers.push(follower)
    for (let following of json.following)
      user.following.push(following)

    return user
  }

  get letters () : string {
    let letters: string
    if (this.name.last) {
      letters = this.name.first[0] + this.name.last[0]
    }
    else letters = this.name.first[0]
    return letters
  }

  get fullname (): string {
    return `${this.name.first} ${this.name.last}`
  }

  set fullname (value: string) {
    let name: string[] = value.replace(/\s+/g, ' ').split(" ")
    switch (name.length) {
      case 0:
        return
      case 1:
        this.name.first = name[0]
        this.name.last = ""
        return
      case 2:
      default:
        this.name.first = name[0]
        this.name.last = name[1]
        return
    }
  }

  unfollow(username: string): void {
    let index = this.following.findIndex((value: User) => value.username == username)
    if (index > -1) {
      this.following.splice(index, 1)
    }

  }

  follow(username: string): void {
    let index = this.followers.findIndex((value: User) => value.username == username)
    this.following.push(this.followers[index])
  }

  toJSON () : JSON {
    return {
      username: this.username,
      name: this.name,
      birthday: this.birthday,
      followers: this.followers,
      following: this.following,
    }
  }
}
