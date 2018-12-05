import { MovieResult } from "../tmdb-data/searchMovie";

export interface List {
    name: string; // default "Ma super liste #ListNumber"
    movies?: MovieResult[];
    users_list?: string [];
    owner?: string;
}