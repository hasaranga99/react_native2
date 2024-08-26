import React from 'react'
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Platform
} from 'react-native'

const LayoutContainerComponent = props => {
  const {scrollEnabled, children} = props

  if (scrollEnabled) {
    return (
      <ScrollView
        bounces={false}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps={'handled'}>
        <View style={{flex: 1}}>{children}</View>
      </ScrollView>
    )
  } else {
    return <View style={{flex: 1}}>{children}</View>
  }
}

const Layout = props => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
        <KeyboardAvoidingView
          style={{
            flexGrow: 1,
          }}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          enabled={true}>
          <LayoutContainerComponent {...props} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}

export default Layout