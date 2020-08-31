import { observable, action, computed, reaction } from 'mobx'
import { createContext } from 'react'

class AppState {
    @observable private list: string[] = []
    @observable private fontSize: number = 18

    public constructor() {
        reaction(
            () => this.list,
            _ => null
        )
    }

    @computed public get favoriteList(): string[] {
        return this.list
    }

    @computed public get getFontSize(): number {
        return this.fontSize
    }

    @action public addSong(song: string): void {
        this.list.push(song)
    }

    @action public replaceList(songs: any[]): void {
        this.list = songs
    }

    @action public removeSong(song: string): void {
        const index = this.list.indexOf(song)
        if (index > -1) {
            this.list.splice(index, 1)
        }
    }

    @action public editFontSize(fontSize: number): void {
        this.fontSize = fontSize
    }
}

export default createContext(new AppState())
