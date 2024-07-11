import { useEffect } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import GlobalStyle from '../../../styles'

const ListCustomer = () => {
  const customers = useSelector((state) => state)

  useEffect(() => {
    console.log(customers)
  }, [customers])

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={GlobalStyle.screenWrapper}>
          <Text>Customers are grouped by Region. Please select</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ListCustomer
