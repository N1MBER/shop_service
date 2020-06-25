import React, { Component } from 'react';
import {
    Content,
    Item,
    Label,
    Input,
    Form,
    Button,
    Root,
    ActionSheet,
} from 'native-base';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {connect} from 'react-redux';
import LoginButton from './LoginButton';
import {CITIES} from '../store/values/settings_values';
import {set_default_city} from '../actions/settings_manager';
import {AppStyle} from '../store/values/app_style';
class RegistrationForm extends Component {
    render() {
        const {page} = this.props;
        return (
                <View style={styles.container}>
                    <Form>
                        <View>
                            <Item floatingLabel style={styles.input_container} >
                                <Label style={styles.text}>Email or username</Label>
                                <TextInput  autoCorrect={true}/>
                            </Item>
                        </View>
                        <View>
                            <Item floatingLabel style={styles.input_container}>
                                <Label style={styles.text}>Password</Label>
                                <TextInput
                                    secureTextEntry={true}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                        <View>
                            <Item floatingLabel style={styles.input_container}>
                                <Label style={styles.text}>Repeat password</Label>
                                <TextInput
                                    secureTextEntry={true}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                        <View>
                            <Item floatingLabel style={styles.input_container}>
                                <Label style={styles.text}>Your phone</Label>
                                <TextInput
                                    keyboardType={'phone-pad'}/>
                            </Item>
                        </View>
                        <Root>
                            <Button  style={styles.button_city} onPress={()=>
                                ActionSheet.show({
                                        options: CITIES,
                                        title: 'Cafeteria',
                                        cancelButtonIndex: CITIES.length - 1
                                    },
                                    buttonIndex => {
                                        if(buttonIndex !== CITIES.length - 1)
                                            this.props.set_default_city( CITIES[buttonIndex] );
                                    }
                                )}>
                                <Text style={styles.city_text}>DEFAULT CITY</Text>
                            </Button>
                        </Root>
                        <View >
                            <Button style={styles.button_register}>
                                <Text style={styles.text_button}>REGISTRATION</Text>
                            </Button>
                        </View>
                    </Form>
                </View>
        );
    }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: 0.9*windowWidth
    },
    button_register:{
        padding:10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: AppStyle.colors.red,
        borderRadius: 40,
        width: 0.9*windowWidth
    },
    button_city:{
        marginTop: 20,
        padding:10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: AppStyle.colors.yellow,
        borderRadius: 40,
        width: 0.9*windowWidth
    },
    city_text:{
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text_button:{
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input_container:{
        alignContent: 'center',
        color: 'white',
        marginLeft: 0,
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

const mapDispatchToProps = dispatch => {
    return{
        set_default_city: city => dispatch(set_default_city(city)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);