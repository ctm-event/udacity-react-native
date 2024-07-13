import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { ListRegion } from '../../../constants/region'
import GlobalStyles from '../../../styles'

const SelectRegion = () => {
  const { navigate } = useNavigation()

  const component =
    ListRegion.length > 0 ? (
      <View style={styles.regionWrapper}>
        {ListRegion.map((region) => (
          <View key={region} style={styles.regionItem}>
            <Pressable
              onPress={() => {
                navigate(region)
              }}
            >
              <Text style={styles.regionText}>{region}</Text>
            </Pressable>
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
    margin: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between'
  },
  regionItem: {
    flexBasis: '48%',
    backgroundColor: 'lightyellow',
    border: '1px solid darkgoldenrod',
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center'
  },
  regionText: {
    fontWeight: '400',
    color: 'dimgrey'
  }
})
