import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {List} from './list-data/List';
import {TmdbService} from './tmdb.service';
import {LISTS_DATA} from './list-data/List-mockup';
import {MovieResult} from './tmdb-data/searchMovie';

@Injectable()
export class ListsManagerService {

  constructor(private _tmdb: TmdbService) {
  }

  getData(): Observable<List[]> {
    return of<List[]>(LISTS_DATA);
  }

  /** Adding a specific movie to a list*/
  pushMovieToList(listName: string, movie: MovieResult) {
    LISTS_DATA.find(list => list.name === listName).movies.push(movie);
    console.log('Ajouté avec succès à la liste: ', movie, listName);
  }

  pushMoviesToList(listName: string, movies: MovieResult[]) {
    movies.map(m => this.pushMovieToList(listName, m));
    console.log('Films ajoutés avec succès à la liste: ', movies, listName);
  }


  /** Preparing the list to push in the containing array. */
  pushNewList(listName: string) {
    listName === '' ?
      listName = 'Ma superliste ' + (LISTS_DATA.length + 1) :
      listName = listName;
    this.addList({name: listName, movies: []});
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
      console.log('New list : ', LISTS_DATA);
    }
  }

  /** Updating the  name of the list. */
  updateList(listName: string) {
    const index = LISTS_DATA.map(l => l.name).indexOf(listName);
    LISTS_DATA[index].name = listName;
  }

  /** Getting rid of a specific list */
  deleteList(index) {
    LISTS_DATA.splice(index, 1);
    console.log('New spliced list : ', LISTS_DATA);
  }

  /** Helpful for the default list name and others*/
  dataLength() {
    return LISTS_DATA.length;
  }

  /** Checking if the list already exists */
  listExist(listToCheck: List): boolean {
    return (LISTS_DATA.find(list => list.name === listToCheck.name) ? true : false);
  }
}
