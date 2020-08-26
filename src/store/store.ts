import { observable, action, computed, reaction } from 'mobx'
import { createContext } from 'react'

class FavoriteState {
    @observable private list: string[] = []

    public constructor() {
        reaction(
            () => this.list,
            _ => null
        )
    }

    @computed public get favoriteList(): string[] {
        return this.list
    }

    @action public addSong(song: string): void {
        this.list.push(song)
    }

    @action public replaceList(songs: any[]): void {
        this.list = songs
    }

    @action public removeSong(song: string): void {
        const index = this.list.indexOf(song)
        console.log(this.list)
        if (index > -1) {
            this.list.splice(index, 1)
        }
    }
}

export default createContext(new FavoriteState())
