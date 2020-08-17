import { observable, action, computed, reaction } from 'mobx'
import { Song } from '../models/Song'
import { createContext } from 'react'

class FavoriteState {
    @observable private list: Song[] = []

    public constructor() {
        reaction(
            () => this.list,
            _ => console.log(this.list.length)
        )
    }

    @computed public get favoriteList(): Song[] {
        return this.list
    }

    @action public addSong(song: Song): void {
        this.list.push(song)
    }

    @action public removeSong(song: Song): void {
        const index = this.list.indexOf(song)
        console.log(this.list)
        if (index > -1) {
            this.list.splice(index, 1)
        }
    }
}

export default createContext(new FavoriteState())
