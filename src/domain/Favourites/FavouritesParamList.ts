import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type FavouritesParamList = {
    Favourites: undefined
    Song: {
        title: string
    }
}

export type FavouriteNavProps<T extends keyof FavouritesParamList> = {
    navigation?: StackNavigationProp<FavouritesParamList, T>
    route: RouteProp<FavouritesParamList, T>
}
