import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type SearchParamList = {
    Search: undefined
    Song: {
        title: string
    }
    Menu: undefined
}

export type SearchNavProps<T extends keyof SearchParamList> = {
    navigation?: StackNavigationProp<SearchParamList, T>
    route: RouteProp<SearchParamList, T>
}
