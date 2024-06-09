import { Button, StyleSheet } from 'react-native';

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
      color: '#0D2D42', 
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

      ciljeviText:{
        fontSize: 22,
        fontWeight: '600',
        color: '#0D2D42',
        textAlign: 'left',
      },

      
      ciljeviView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        paddingTop: 40,
        paddingBottom:10,

      },

      aktivnostiView:{
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        paddingTop: 40,
        paddingBottom:10,

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
      EventiPopisTextDatum:{
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        fontWeight: '400',
        color: '#0D2D42',
        textAlign: 'left',
      },
      EventiLokacija:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
      },
      EventiLokacijaIkona:{
        width: 25,
        height: 33,
      },
      EvenitPopisTextLokacija:{
        paddingLeft: 15,
        paddingRight: 20,
        fontSize: 16,
        fontWeight: '400',
        color: '#0D2D42',
        textAlign: 'left',
      },
      EventiButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:30,
      },
      Button:{
        borderRadius: 30,
        backgroundColor: '#0D2D42',
        color: 'white',
        textAlignVertical: 'center',
        padding: 15,
        elevation: 5,
      },
      ButtonKarte:{
        borderRadius: 30,
        backgroundColor: '#BAEBE8',
        color: '#0D2D42',
        textAlignVertical: 'center',
        padding: 15,
        elevation: 5,
      },
      headerProfile:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 30,
        
      },
      settingsIcon:{
        width: 30,
        height: 33,
        position: 'absolute',
        right: 30,
        top:-60,
      },
      textProfil:{
        fontSize: 24,
        fontWeight: '800',
        color: '#0D2D42',
        textAlign: 'left',
      },
      profileImageContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
      },
      profileImage:{
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#0D2D42',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
      },
      ImePrezime:{
        fontSize: 24,
        fontWeight: '800',
        color: '#0D2D42',
        textAlign: 'center',
      },
      LoginBox1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      LoginBoxFlex: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      LoginBox: {
        width: '80%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 70,
        padding: 10,
      },
      Underline: {
        borderBottomWidth: 2,
        borderColor: 'gray',
        width: '70%',
        textAlign: 'center',
        paddingBottom:0
      },
      RegistrirajSe:{
        marginTop:-50
      },
      container : {
        alignItems : "center",
        paddingTop: 70,
      },
      image : {
        height : 160,
        width : 170
      },
      title : {
        fontSize : 30,
        fontWeight : "bold",
        textTransform : "uppercase",
        textAlign: "center",
        paddingVertical : 40,
        color : "#0D2D42"
      },
      inputView : {
        gap : 15,
        width : "100%",
        paddingHorizontal : 40,
        marginBottom  :5
      },
      input : {
        height : 50,
        paddingHorizontal : 20,
        borderColor : "#0D2D42",
        borderWidth : 1,
        borderRadius: 7
      },
      rememberView : {
        width : "100%",
        paddingHorizontal : 50,
        justifyContent: "space-between",
        alignItems : "center",
        flexDirection : "row",
        marginBottom : 8
      },
      switch :{
        flexDirection : "row",
        gap : 1,
        justifyContent : "center",
        alignItems : "center"
        
      },
      rememberText : {
        fontSize: 13
      },
      forgetText : {
        fontSize : 11,
        color : "#0D2D42"
      },
      button : {
        backgroundColor : "#0D2D42",
        height : 45,
        borderColor : "gray",
        borderWidth  : 1,
        borderRadius : 5,
        alignItems : "center",
        justifyContent : "center"
      },
      buttonText : {
        color : "white"  ,
        fontSize: 18,
        fontWeight : "bold"
      }, 
      buttonView :{
        width :"100%",
        paddingHorizontal : 50
      },
      optionsText : {
        textAlign : "center",
        paddingVertical : 10,
        color : "gray",
        fontSize : 13,
        marginBottom : 6
      },
      mediaIcons : {
        flexDirection : "row",
        gap : 15,
        alignItems: "center",
        justifyContent : "center",
        marginBottom : 23
      },
      icons : {
        width : 40,
        height: 40,
      },
      footerText : {
        textAlign: "center",
        color : "gray",
      },
      signup : {
        color : "#0D2D42",
        fontSize : 13
      },
      errorText: {
        color: 'red',
        marginTop: 5,
        textAlign: 'center',
      },
      scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      innerContainer: {
        width: '100%',
        alignItems: 'center',
      },
      errorText: {
        color: 'red',
        marginTop: 5,
        textAlign: 'center',
      },

      boxContainerStatistika: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
      boxStatistika: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        margin: 10,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: 'center', 
        alignItems: 'center',
        
      },
      boxHeaderStatistika: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      boxIconStatistika: {
        width:32,
        height: 32,
      },
      boxTitleStatistika: {
        fontSize: 20,
        fontWeight: '600',
        color: '#178E82',
        marginLeft: 10,
        
      },
      boxTextStatistika: {
        fontSize: 18,
        fontWeight: '400',
        color: '#0D2D42',
        

        
        
      },

      statistikaGraf: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      statistikaGrafimage: {
        width: 380, 
        height: 380, 
        marginTop: -100,
      },

      ciljButton: {
        width: 30, 
        height: 30,
        borderRadius: 10, 
        backgroundColor: '#BBECE9', 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
      },

      plusImage:{
      width:18,
      height:18,

      },
      

      userProfileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        paddingBottom:10,
        position: 'relative', 
      },
      profileImagechat: {
        width: 55,
        height: 55,
        borderRadius: 20,
        marginRight: 12,
      },
      userInfo: {
        flex: 1,
        marginTop:-10,
      },
      userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#0D2D42',
      },
      userName2: {
        fontSize: 20,
        color: '#0D2D42',
      },
      messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      messageIcon: {
        width: 14,
        height: 14,
        marginRight: 8,
      },
      message: {
        fontSize: 16,
        color: '#0D2D42',
      },
      messageTime: {
        position: 'absolute',
        top:30, 
        right: 30, 
        fontSize: 13,
        color: '#8C8C8C',},


        containerProfil: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 30,
          paddingTop:50,
        },
        imageContainerProfil: {
          alignItems: 'center',
        },
       
        imageTextProfil: {
          fontSize: 18,
          color: '#0D2D42',
          marginTop:8,
        },
      imageProfil:{
        color: '#0D2D42',
      
      },
      starIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
        marginTop:5,
      },


      containerStar: {
        flexDirection: 'row',
        alignItems: 'center',
      },
     


      containerProfil2: {
        padding:30,
        paddingTop:10,
      },
      redProfil: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding:6,
      },
      tekstProfil: {
        fontSize: 20,
        color: '#0D2D42',
        fontWeight:'400',
      },
      strelicaProfil: {
        width: 12,
        height: 22,
      },



      containerVoznje: {
        
        padding:30,
      },
      rowVoznje: {
        flexDirection: 'row',
        paddingTop:10,
      },
      imageVoznje: {
        width: 50,
        height: 50,
        marginRight: 10,
      },
      glavniTekstVoznje: {
        fontSize: 20,
        fontWeight: '500',
        color: '#0D2D42',
        marginTop:7,
        marginLeft:5,
      },
      redoviVoznje: {
        marginTop: 10,
      },
      TekstVoznje: {
        fontSize: 16,
        color: '#0D2D42',
        marginBottom: 5,
        marginLeft:65,
      },
});


  