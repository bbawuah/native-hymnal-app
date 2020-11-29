import { observable, action, computed, reaction } from 'mobx'
import { createContext } from 'react'
import Sound from 'react-native-sound'

export type Audio = Sound | null

Sound.setCategory('Playback')
class AppState {
    @observable private list: string[] = []
    @observable private fontSize: number = 18
    @observable private sound: Audio = null

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

    @computed public get getSong(): Audio {
        return this.sound
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

    @action public setSong(audio: Audio): void {
        this.sound = audio
    }
}

export default createContext(new AppState())
