import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { List } from './list-data/List';
import { LISTS_DATA } from './list-data/List-mockup';
import { MovieResult } from './tmdb-data/searchMovie';
import { UserServiceService } from './user-service.service';

@Injectable()
export class ListsManagerService {

  constructor(private userService: UserServiceService) {
  }

  getData(): Observable<List[]> {
    return of<List[]>(LISTS_DATA);
  }

  /** Adding a specific movie to a list*/
  pushMovieToList(listName: string, movie: MovieResult) {
    LISTS_DATA.find(list => list.name === listName).movies.push(movie);
  }

  pushMoviesToList(listName: string, movies: MovieResult[]) {
    movies.map(m => this.pushMovieToList(listName, m));
  }

  /** Deleting a movie from a list */
  removeMovie(list: List, movie: MovieResult) : List {
    list.movies.forEach( (m, index) => {
      if(m === movie){
       list.movies.splice(index,1);
       return;
      }
    });
    return list;
  }

  deleteMovie(list) {
    const list_index = LISTS_DATA.findIndex(l => l.name == list.name);
    LISTS_DATA[list_index] = list;
  }


  /** Preparing the list to push in the containing array. */
  pushNewList(list: List) {
    list.name === '' ?
      list.name = 'Ma superliste ' + (LISTS_DATA.length + 1) :
      list.name = list.name;
    this.addList(list);
  }

  /** Adding the list in the corresponding array*/
  addList(list: List) {

    /** Avoiding to have multiple lists with the same name */
    if (this.listExist(list)) {
      alert('Oups! Liste déjà existante');
    } else {
      LISTS_DATA.push(list);

      // Sorting the list for display's sake
      LISTS_DATA.sort((l1, l2) => (l1.name > l2.name ? 1 : -1));
    }
  }

  /** Updating the  name of the list. */
  updateList(list: List, listName: string) {
    const index = LISTS_DATA.findIndex(l => l.name == list.name);
    LISTS_DATA[index].name = listName;
  }

  /** Getting rid of a specific list */
  deleteList(listname: string) {
    const index = LISTS_DATA.findIndex( l => l.name == listname)
    LISTS_DATA.splice(index, 1);
  }

  /** Helpful for the default list name and others*/
  dataLength() {
    return LISTS_DATA.length;
  }

  /** Checking if the list already exists */
  listExist(listToCheck: List): boolean {
    return (LISTS_DATA.find(list => list.name === listToCheck.name) ? true : false);
  }

  /** Checking the accessibility of a list for a member */
  isMember(lists: List[]): List[] {
    const current_user = this.userService.getCredentials();
    const validList: List[] =[] ;
    lists.map((list:List) => {
      if (list.users_list.includes(current_user) || list.owner == current_user )
      validList.push(list);
    });
    console.log("List valid:", validList);
    return validList;
  }

  /** Adding a member to a list */
  addMember(list: List, member: string) {
    LISTS_DATA.find(l => l == list).users_list.push(member);
  }

  /** Taking members out of the squad ;) */
  removeAccess(list: List, members: string[]): List {
    const validList: string[] = list.users_list.filter((user) => {
      return !members.includes(user);
    });
    list.users_list = validList;
    return list;
  }

  /** Deleting a member from a list */
  deleMember(list: List) {
    const list_index = LISTS_DATA.findIndex(l => l.name == list.name);
    LISTS_DATA[list_index] = list;
  }
}
