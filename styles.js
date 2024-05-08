import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Text:{
      fontFamily: 'Montserrat',
    }, 
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
    },
    
    kalendar: {
      width: 35,
      height: 40,
    },
    
    text: {
      width: 111,
      height: 22,
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'Montserrat',
      fontWeight: '800',
      color: '#0D2D42',
    },
    
    obavijesti: {
      width: 35,
      height: 40,
    },
    
    vozacputnik: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingTop: 20,
    },
    
    vozacputniktext: {
      fontSize: 16, 
      fontWeight: '500',
      color: '#000', 
      width: 150,
      height: 150,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 23,
      borderColor: '#0D2D42',
      elevation:10,
      backgroundColor:'white',
      shadowColor: '#0D2D42'
    },
    vozacputniktextActive:{
      fontSize: 16, 
      fontWeight: '500',
      color: 'white', 
      width: 150,
      height: 150,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 23,
      borderColor: '#0D2D42',
      elevation:10,
      backgroundColor:'#0D2D42',
      shadowColor: '#0D2D42'
    },
    viewmain:{
        flex:1,
        backgroundColor: 'red',
    },
    KamoKada: {
      borderColor: '#0D2D42',
      borderRadius: 27,
      width: 343,
      height: 57,
      justifyContent: 'space-around',
      alignItems: 'center',
      elevation: 10,
      backgroundColor: 'white',
      shadowColor: '#0D2D42',
      flexDirection: 'row', 
    },
    KamoKadaDiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 60,
    },
    VertikalnaLinija: {
      borderLeftWidth: 1, 
      borderColor: '#000',
      height: '100%', 
    },
    KamoKadaIkone: {
      width: 20,
      height: 20,
      marginRight:5
    },
    KamoKadaText: {
      fontSize: 16,
    },
    KamoKadaL: {
      flexDirection: 'row', // ensures icon and text are side-by-side
      alignItems: 'center', // vertically aligns items in the center
    },
    KamoKadaR: {
      flexDirection: 'row', // ensures icon and text are side-by-side
      alignItems: 'left', // vertically aligns items in the center
      marginLeft: -40,
      marginRight: 40
      },
      Footer: {
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        elevation:10,
        shadowColor:'black'
      },
      
      FooterIkone35x35: {
        width: 42,
        height: 42,
      },
      FooterIkoneEVENT: {
        width: 50.4,
        height: 60,
      },
      FooterIkoneCAR: {
        width: 68.4,
        height: 60,
        marginTop:-50
      },
      FooterIkonePROFIL: {
        width: 42,
        height: 48,
      },
      textKada: {
        width: '100%',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Montserrat',
        fontWeight: '800',
        color: '#0D2D42',
        paddingTop: 30
      },
      HR:{
        borderBottomColor: '#8F9BB3',
        borderBottomWidth: 0.5,
        width: '70%',
        marginVertical: 10
      },
      DatePicker:{
        flexDirection: 'column',
        alignItems:'center',
      },
      Date:{
        borderRadius: 27,
        width: 185,
        height:36,
        fontSize: 16,
        textAlign: 'center',
        elevation:10,
        backgroundColor:'white',
        textAlignVertical:'center',
        marginTop:20,
        marginBottom:10,
      },
      TjedniDan:{
        borderRadius: 27,
        width: '40%',
        height:36,
        fontSize: 16,
        textAlign: 'center',
        elevation:10,
        backgroundColor:'white',
        textAlignVertical:'center',
        marginTop:20,
        marginBottom:10,
        margin:5,
      },
      TjedniSat:{
        borderRadius: 27,
        width: '80%',
        height:36,
        fontSize: 16,
        textAlign: 'center',
        elevation:0,
        backgroundColor:'white',
        textAlignVertical:'center',
        marginBottom:20,
        marginTop:10,
        elevation: 10,
      },
      Time:{
        borderRadius: 27,
        width: 185,
        height:36,
        fontSize: 16,
        textAlign: 'center',
        elevation:10,
        backgroundColor:'white',
        textAlignVertical:'center',
        marginBottom:20,
        marginTop:10,
      },
      switch: {
        width: 50,
        height: 28,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 2,
        marginLeft:10,
        marginTop:'20%'
      },
      switchOn: {
        backgroundColor: '#FFBA42',
      },
      switchOff: {
        backgroundColor: '#8F9BB3',
      },
      circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#0D2D42',
        borderWidth: 1,
      },
      circleOn: {
        transform: [{ translateX: 22 }],
      },
      circleOff: {
        transform: [{ translateX: -1 }],
      },
      TjedniRasporedText:{
        fontSize:19,
        fontWeight:'500',
        width:'60%',
      },
      OnOff:{
        flexDirection:'row'
      },
      TjedniRaspored:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#D9EBF8',
        width:'70%',
        elevation: 5,
        alignContent:'center',
        marginLeft:'15%',
        borderRadius:19,
        padding:20,
        marginTop:70,
        
      },
      URedu:{
        flexDirection: 'column',
        alignItems:'center',
      },
      UReduText:{
        borderRadius: 27,
        width: 185,
        height:36,
        fontSize: 16,
        textAlign: 'center',
        elevation:10,
        backgroundColor:'#0D2D42',
        color:'white',
        textAlignVertical:'center',
        marginTop:20,
        marginBottom:10,
      },
      obavijestiText:{
        fontSize: 28,
        fontWeight: '800',
        color: '#0D2D42',
        textAlign: 'left',
      },
      obavijestiView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        paddingBottom: 0,

      },
      obavijestiPopis:{
        flexDirection: 'coloumn',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
      },
      obavijestiPopisTextSelected:{
        fontSize: 16,
        fontWeight: '500',
        color: '#0D2D42',
        textAlign: 'left',
        backgroundColor: 'white',
        elevation: 10,
        margin: 15,
        width: '100%',
        borderRadius: 19,
        height: '84%'
      },
      obavijestiPopisText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#0D2D42',
        textAlign: 'left',
        backgroundColor: 'white',
        elevation: 10,
        margin: 15,
        width: '100%',
        borderRadius: 19,
      },
      obavijestiPopisTextNaslov:{
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20,
        fontWeight: '700',
        color: '#0D2D42',
        textAlign: 'left',
      },
      obavijestiPopisTextSadrzaj:{
        padding: 10,
        fontSize: 16,
        fontWeight: '500',
        color: '#0D2D42',
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
      },
});

  