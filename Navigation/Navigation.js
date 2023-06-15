import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const AppNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Recherche'
        }
    },
    FilmDetail: {
        screen: FilmDetail,
        navigationOptions: {
            title: 'Film'
        }
    }
})

export default createAppContainer(AppNavigator)