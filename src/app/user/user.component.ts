import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })
  // select = output<string>();

  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  @Input({ required:true }) user!: User;
  @Output() select = new EventEmitter();
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
