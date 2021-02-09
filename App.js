import React, { Component } from 'react';
import { View, TextInput, Button, Label, Toast, Text } from 'react-native';
import styles from './src/css/commonStyles';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'to',
      phoneNumber: '',
      verifyNumber: '',
      changedValue: '',
      changedValue2: ''
    }
  }
  onTextChanged(value) {
    // code to remove non-numeric characters from text
    this.setState({ phoneNumber: value.replace(/[-+:% #*;,.<>{}(/)=[/]/g, '') });
  }

  onSubmit() {
    console.log(typeof(this.state.changedValue));

    if (this.state.changedValue.length < 11 ) {
      alert('please Enter valid Number')
    } else {
      alert('it works');
    }
  }

  onVerify(){
    if (this.state.changedValue2.length < 4){
      alert('invalid verify number')
    } else{
      alert("lets go")
    }
  }

  getNewValues = (value) => {
    this.setState({ changedValue: value })
    console.log(value)
  }

  getNewValues2 = (value) => {
    this.setState({ changedValue2: value })
    console.log(value)
  }
  render() {

    return (

      <View style={[styles.container]}>
        <View style={[styles.mx10_percent]}>
          <View style={[styles.width_100_percent, styles.pb_20_percent, styles.alignItemCenter]}>
            <View style={[styles.py25]}>
              <View>
                <Text style={[styles.pb5]}>Phone Number</Text>
                <View style={[styles.flexDirectionRow, styles.justifyContentBetween, styles.alignItemCenter]}>
                  
                  <TextInputComponent maxLimit={11} placeholder="hello" onValueChange={this.getNewValues} />

                  <Button title='submit' style={[styles.height40, styles.bgBtnGreen, styles.brdRadius5]}
                    onPress={() => this.onSubmit()}>

                  </Button>

                </View>
              </View>

              <View style={[styles.pt20]}>
                <Text style={[styles.pb5]}>Verification Number</Text>
                <TextInputComponent maxLimit={4} placeholder="New Hello" onValueChange={this.getNewValues2} />
              </View>
            </View>

            <View>
              <Button title='verifyNumber' style={[styles.bgBtnGreen, styles.px15]} onPress={() => this.onVerify()}>
              </Button>
            </View>
          </View>
        </View>
      </View>


    );
  }
}

class TextInputComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: 'to',
      phoneNumber: '',
      verifyNumber: '',
    }
  }

  onTextChanged(value) {
    // code to remove non-numeric characters from text
    this.setState({ phoneNumber: value.replace(/[-+:% #*;,.<>{}(/)=[/]/g, '') })  
  }

  render() {
    return (
      <TextInput keyboardType='numeric' numeric maxLength={this.props.maxLimit !== undefined ? this.props.maxLimit : null } placeholder={this.props.placeholder !== undefined ? this.props.placeholder : null } style={[styles.brdWidth1, styles.bgGreenV2, styles.width_80_percent, styles.colorWhite,
        styles.brdRadius5, styles.brdColorGreen, styles.height40, styles.alignItemCenter]}
        onChangeText={(value) => { this.onTextChanged(value), this.props.onValueChange(value) }}
        value={this.state.phoneNumber}
      />
    )
  }
}

