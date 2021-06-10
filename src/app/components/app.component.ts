import { Component, OnInit } from '@angular/core'
import { Person, Cat, Cat2, Cat3 } from '../person'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'habitat';

  ngOnInit () {
    let vova = new Person({firstName: 'Vova', lastName: 'Putin'}, 85, 3)
    console.log(vova)
    let vasya = new Cat ('Vasya', 8, false, 5)

    console.log(vasya)
    console.log(Cat.averageLifeSpan)
    console.log(vasya.getAge())
    console.log(vasya.getSex())

    let musya =  new Cat2 ('Musya', 3, true, 6)
    
    console.log(musya.name)
    console.log(Cat.averageLifeSpan)
    console.log(musya.getAge())
    console.log(musya.getSex())

    let pisi = new Cat3 ('Pisi', 5, true)
    console.log(pisi)
    console.log(pisi.isMoreThanAvgFingers())
    pisi.fingerCount += 3
    console.log(pisi.fingerDiff)
    // console.log(Person.getDefaultHandsCount())
  }
}
