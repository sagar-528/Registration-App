import { StyleSheet, Dimensions } from 'react-native'


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const GlobalCss = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'grey'
      },
    homeHeader: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
      },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    homeFooter: {
          flex: 1,
          backgroundColor: '#616161',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 50,
          paddingHorizontal: 30
      },
    text_footer: {
        color: '#009387',
        fontSize: 25
    },
    footer: {
        flex: 3,
        backgroundColor: '#e0e0e0',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    title: {
          color: '#fff',
          fontSize: 25,
          fontWeight: 'bold'
      },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    text: {
          color: '#fff',
          fontSize: 15,
          marginTop:5
      },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    homeButton: {
          alignItems: 'flex-end',
          marginTop: 30
      }, 
    button: {
        alignItems: 'center',
        marginTop: 45
    },
    homeSignIn: {
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          flexDirection: 'row'
      },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    homeTextSign: {
          color: 'white',
          fontWeight: 'bold'
      },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        padding: 10,
      }
})

export default GlobalCss