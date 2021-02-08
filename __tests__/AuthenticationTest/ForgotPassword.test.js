import React from 'react';
import {shallow} from 'enzyme';
import ForgotPassword from '../../src/Components/Authentication/ForgotPassword'
import UserServices from '../../Service/UserServices'

describe('test Forgot Password', () => {
    
    it('should match to snapshot', () => {
        const component = shallow(<ForgotPassword/>)
        expect(component).toMatchSnapshot();
    })

    it('When email provided in textinput should update email state', async () => {
        const component = shallow(<ForgotPassword />)
        expect(component.instance().state.email).toBe('')
        component.instance().textInputChangeEmail('gupta.sagar528@gmail.com')
        expect(component.instance().state.email).toBe('gupta.sagar528@gmail.com')
    })

    it('When onPress event of reset password button when all textinput empty it will update the stateEmpty state to true ', async () => {
        const onPressEvent = jest.fn();
        const component = shallow(<ForgotPassword onPress = {onPressEvent}/>)
        const instance = component.instance();
        await instance.resetPasswordHandler();
        expect(onPressEvent).toHaveBeenCalled();
        expect(instance.state.emailEmpty).toBe(true)
    })

    it('When onPress event of reset password button when email is invalid then invalidEmail state should be true', async () => {
        const navigation = { navigate : jest.fn() }
        const onPressEvent = jest.fn();
        const component = shallow(<ForgotPassword onPress = {onPressEvent} navigation = {navigation} />)
        const instance = component.instance();
        instance.textInputChangeEmail('gupta.sagar529@gmail.com')
        await instance.resetPasswordHandler();
        expect(onPressEvent).toHaveBeenCalled();
        return UserServices.forgotPassword(instance.state.email).catch(error => expect(instance.state.invalidEmail).toBe(true))
    })

    it('When onDismiss event of dialog button it will set visible state for dialog should be false', () => {
        const onDismissEvent = jest.fn();
        const component = shallow(<ForgotPassword onDismiss = {onDismissEvent}/>)
        const instance = component.instance();
        instance.hideDialog();
        expect(onDismissEvent).toHaveBeenCalled();
        expect(instance.state.visible).toBe(false)
    })

    it('When onPress event of dialog action button it will navigate to Login Screen', () => {
        const navigation = { navigate : jest.fn() }
        const onPressEvent = jest.fn();
        const component = shallow(<ForgotPassword onPress = {onPressEvent} navigation = {navigation} />)
        const instance = component.instance();
        instance.handleDialogButton();
        expect(onPressEvent).toHaveBeenCalled();
        expect(navigation.navigate).toBeCalledWith('SignIn')
    })
    
})