import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import GlobalStyles from '../../../styles'
import { useNavigation } from '@react-navigation/native'
import { ListRegion } from '../../../constants/region'

const SelectRegion = () => {
  const { list } = useSelector((state) => state.customer)
  const { navigate } = useNavigation()

  const component =
    ListRegion.length > 0 ? (
      <View style={styles.regionWrapper}>
        {ListRegion.map((region) => (
          <View key={region} style={styles.regionItem}>
            <Text
              style={styles.regionText}
              onClick={() => {
                navigate(region)
              }}
            >
              {region}
            </Text>
          </View>
        ))}
      </View>
    ) : (
      <View style={GlobalStyles.screenWrapper}>
        <Text style={styles.regionText}>There is no regions</Text>
      </View>
    )

  return component
}

export default SelectRegion

const styles = StyleSheet.create({
  regionWrapper: {
    margin: '1rem',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'space-between'
  },
  regionItem: {
    flexBasis: '48%',
    backgroundColor: 'lightyellow',
    border: '1px solid darkgoldenrod',
    padding: '0.5rem',
    borderRadius: '4px',
    justifyContent: 'center'
  },
  regionText: {
    fontWeight: 400,
    color: 'dimgrey'
  }
})
