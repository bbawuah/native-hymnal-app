import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type HomeStackParamList = {
    Home: undefined
    Song: {
        title: string
    }
    Menu: undefined
}

export type HomeNavProps<T extends keyof HomeStackParamList> = {
    navigation?: StackNavigationProp<HomeStackParamList, T>
    route: RouteProp<HomeStackParamList, T>
}
