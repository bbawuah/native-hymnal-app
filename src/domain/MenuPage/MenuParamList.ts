import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type MenuParamList = {
    Menu: undefined
    Settings: undefined
    Privacy: undefined
    Invite: undefined
    About: undefined
}

export type MenuNavProps<T extends keyof MenuParamList> = {
    navigation?: StackNavigationProp<MenuParamList, T>
    route: RouteProp<MenuParamList, T>
}
