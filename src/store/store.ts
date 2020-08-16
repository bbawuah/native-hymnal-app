import { observable, action } from 'mobx'
import { Song } from '../models/Song'

export class FavoriteState {
    @observable private list: Song[] = []

    @action public favoriteList(): Song[] {
        return this.list
    }

    @action public addSong(song: Song): void {
        this.list.push(song)
    }

    @action public removeSong(song: Song): void {
        const index = this.list.indexOf(song)

        if (index > -1) {
            this.list.splice(index, 1)
        }
    }
}
