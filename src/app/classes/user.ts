interface Name {
    first: string,
    last: string
}

export interface JSON {
  id: string,
  name: Name,
  birthday: Date,
  following: User[],
  followers: User[]
}

export class User {
  public following: User[] = []
  public followers: User[] = []
  public id: string

  constructor (
    public name: Name,
    public birthday: Date,
    id?: string
  ) {
    // if id exists, set id, else generate random string id
    this.id = id ? id : Math.random().toString(36).substr(3, 16)
  }

  get age () {
    let day = 24 * 60 * 60 * 1000 // 24 hrs * 60 min * 60 sec * 1000 ms
    let diff = new Date().getTime() - this.birthday.getTime()
    return Math.floor(diff / (365 * day))
  }

  static fromJSON (json: JSON) {
    let user: User = new User(json.name, json.birthday, json.id)
    for (let follower of json.followers)
      user.followers.push(follower)
    for (let following of json.following)
      user.following.push(following)

    return user
  }

  static getUsers () {

  }

  toJSON () : JSON {
    return {
      id: this.id,
      name: this.name,
      birthday: this.birthday,
      followers: this.followers,
      following: this.following,
    }
  }
}
