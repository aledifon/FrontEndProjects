import { Component, ChangeDetectorRef  } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-http',
  imports: [CommonModule, FormsModule],
  templateUrl: './users-http.component.html',
  styleUrl: './users-http.component.scss',
})
export class UsersHTTPComponent {
  
  public userList: any[] = [];
  public userIndividual: any = null;
  public userId = 2;

  constructor(
    private _userService: UserService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef){
       console.log("Users component loaded!");

      //  this.loadData();
  }

  // loadData(){
  //   this.searchUser();

  //   // this.userList = this._userService.getUsers();    

  //   this._userService.getUsers().subscribe({
  //     next: (data: any) => {
  //       this.userList = data;
  //       this.cdr.detectChanges();
  //       console.log(this.userList);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //     complete: () => {
  //       console.log("User list request completed");
  //     }
  //   });   
  // }

  ngOnInit(){

    this.route.paramMap.subscribe(params => {
        let id = Number(params.get("id"));        
        this.userId = (Number.isNaN(id) || id <= 0 || id > 10) 
                    ? 8 
                    : id;
        console.log(this.userId);
    });

    this.searchUser();

    // this.userList = this._userService.getUsers();    

    this._userService.getUsers().subscribe({
      next: (data: any) => {
        this.userList = data;
        this.cdr.detectChanges();
        console.log(this.userList);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("User list request completed");
      }
    });       
  }

  searchUser(){
    this._userService.getUser(this.userId).subscribe({
      next: (result) => {
        this.userIndividual = result;
        this.cdr.detectChanges();
        console.log(this.userIndividual);
      },
      error: (error) => console.log(error),      
      complete: () => console.log("User specific request completed")      
    });
  }

  savePost(){
    // Create a user template to create
    let newPost = {
      title: 'Pepillo',
      body: 'barPepe',
      userId: 69,
    };

    this._userService.createPost(newPost).subscribe(
      (result) => {        
        // this.cdr.detectChanges();
        console.log(`User created properly`, result);
    });    
  }
}
