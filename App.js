import DrawerNavigation from './src/navigation'
import { Provider } from 'react-redux'
import initializeStore from './src/store'
import { useState } from 'react'
import Welcome from './src/navigation/screens/Welcome'

const store = initializeStore()

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <Provider store={store}>
      {showWelcome ? (
        <Welcome
          onStart={() => {
            setShowWelcome(false)
          }}
        />
      ) : (
        <DrawerNavigation />
      )}
    </Provider>
  )
}
