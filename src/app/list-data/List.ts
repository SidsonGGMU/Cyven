import { MovieResult } from "../tmdb-data/searchMovie";

export interface List {
    name: string; // default "Ma super liste #ListNumber"
    movies?: MovieResult[];
    users_list?: string [];
    owner?: string;
}

export interface DataDialog {
    owner : string;
    listname : string;
}

export interface DialogData {
    listes: List[];
    selected: string;
}

export interface DataShare {
    list: List;
    user: string;
}