import { ShopStack } from './shopStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CartStack } from './cartStack'
import { Cart } from '../icons/cart'
import {Varita} from '../icons/icono'
import { OrdersStack } from './ordersStack'
import { MyProfileStack } from './myProfileStack'
import { Orders } from '../icons/orders'
import { Person } from '../icons/person'

const { Screen, Navigator } = createBottomTabNavigator()

export const TabNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#00BFFF',
      tabBarInactiveTintColor: '#20B2AA',
    }}
  >
    <Screen
      name='ShopTab'
      component={ShopStack}
      options={{
        title: 'e-comerce',
        tabBarIcon: Varita,
      }}
    />
    <Screen
      name='CartTab'
      component={CartStack}
      options={{
        title: 'Carro',
        tabBarIcon: ({ color }) => <Cart color={color} />,
      }}
    />
    <Screen
      name='OrdersTab'
      component={OrdersStack}
      options={{
        title: 'Ordenes',
        tabBarIcon: ({ color }) => <Orders color={color} />,
      }}
    />
    <Screen
      name='ProfileTab'
      component={MyProfileStack}
      options={{
        title: 'Perfil',
        tabBarIcon: ({ color }) => <Person color={color} />,
      }}
    />
  </Navigator>
)