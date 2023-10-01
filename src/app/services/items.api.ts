import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, tap } from "rxjs";
import { Item } from "../models/item";
import { Post } from "../models/post";

@Injectable({ providedIn: 'root' })
export class ItemsApi {
    constructor(private http: HttpClient) { }

    getItem(): Observable<Item> {
        return this.http.get<Item>('/assets/qwerty.json')
            .pipe(
                delay(1000),
            );
    }

    getItemsFromRemoteHost(): Observable<Post[]> {
        return this.http.get<Post[]>('https://jsonplaceholder.org/posts');
    }
}


// under the hood
// map = {
// ItemsApi: new ItemsApi(),   
// }