import { List } from "./List";
import { MovieResponse } from "../tmdb-data/Movie";
/**
 * IMPORTANT: We need to point out the fact that there's
 * no database system in the app so we had to issue a mockup!
 */
export const LISTS_DATA: List[] = [
  {
    owner : "john_doe@gmail.com",
    name: 'Ma superliste 1',
    movies: [],
    users_list : ["sidson@gmail.com","ronaldo@gmail.com","alex_ferguson@gmail.com"]
  },
  {
    owner : "john_doe@gmail.com",
    name: 'Ma superliste 2',
    movies: [],
    users_list : ["sidimaidara@gmail.com","ronaldo@gmail.com","alex_ferguson@gmail.com"]
  },
  {
    owner : "john_doe@gmail.com",
    name : 'Ma superliste 3',
    movies: [],
    users_list : ["sidson@gmail.com","ronaldo@gmail.com","alex_ferguson@gmail.com"]
  }
];