import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { FC } from 'react'
import { useRouter } from 'expo-router'
import { COLOR } from '@/constants/color'
import { Ionicons } from '@expo/vector-icons'

interface Props {
    btnBack?: boolean
}

const Header:FC<Props> = ({ btnBack = false }) => {
    const router = useRouter()
  return (
    <View style={styles.header}>
        {btnBack && (
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color={COLOR.primary} />
            </TouchableOpacity>
        )}
      <Text style={styles.title}>Recipe-App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',    
        paddingHorizontal: 20,
        padding:16,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: COLOR.primary,
        letterSpacing: 5,
    }
})