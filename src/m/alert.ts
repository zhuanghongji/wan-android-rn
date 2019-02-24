import {
  Alert,
  AlertButton,
} from 'react-native'

interface Button {
  index: string,
  text: string,
}

export function alert(message: string, onPress?: () => void) {
  Alert.alert('温馨提示', message, [{ text: '确定', onPress }], { cancelable: false })
}

export function alertWithButton(title: string, message: string, buttonText = '确定', onPress?: () => void) {
  Alert.alert(title, message, [{ text: buttonText, onPress }], { cancelable: false })
}

export function alertWithButtons(title: string, message: string, 
    onButtonPress: (index: Button) => void, ...buttonTexts: string[]) {
  const buttons = Array<AlertButton>()
  for(const index in buttonTexts) {
    const text = buttonTexts[index]
    buttons.push({ text, onPress: () => onButtonPress({ index, text })})
  }
  Alert.alert(title, message, buttons, { cancelable: false })
}

