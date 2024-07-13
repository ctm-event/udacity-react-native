import { useMemo } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { CustomerItem } from '../../../components/CustomerItem'
import GlobalStyle from '../../../styles'
import { useNavigation } from '@react-navigation/native'

const ListCustomer = ({ route: { params } }) => {
  const { list: allCustomers } = useSelector((state) => state.customer)
  const { navigate } = useNavigation()

  const customersInRegion = useMemo(() => {
    return allCustomers.filter((customer) => customer.region === params.region)
  }, [params.region, allCustomers])

  return (
    <SafeAreaView>
      <View style={GlobalStyle.screenWrapper}>
        {customersInRegion.length > 0 ? (
          <FlatList
            data={customersInRegion}
            renderItem={({ item }) => (
              <CustomerItem
                customer={item}
                onPress={() => {
                  navigate('Edit Customer', { id: item.id })
                }}
              />
            )}
          />
        ) : (
          <Text>There is no customer in this region</Text>
        )}
      </View>
    </SafeAreaView>
  )
}

export default ListCustomer
