import { StyleSheet,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  container: {
      flexGrow: 1,
    },
    scrollcontainer:{
       padding: 16,
      paddingBottom: 80,
      borderBottomWidth:1,
      borderBottomColor:'#ccc',
    },
    carouselContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%', 
    },
    cicularsec:{
      justifyContent: 'space-around',
      marginTop: 20,
      flexWrap: 'nowrap',
    },
    productImage: {
      width: '100%',
      height: undefined, // Set height to undefined
      aspectRatio: 1,  
    },

    reviewcontformargin: {
      marginVertical: 10,
    },
   
    mostHelpfulTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000',
      marginBottom: 12,
    },
   
  
    barfy: {
      flexDirection:'row'
    },
    
    ratingHeaderText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    overallRatingContainer: {
      flexDirection: 'column',
      alignItems: 'left',
      marginVertical: 10,
      borderRightWidth:1,
      borderRightColor:'#ccc',
      padding:3,
      justifyContent:'center'

    },
    text:{
        color:'black'
    },
    textreview:{
      fontSize:15,
      fontWeight:'500',
      color:'black',
    
      
    },
    overallRatingText: {
      fontSize: 18,
      fontWeight: '500',
      marginBottom:4,
     color:'black'
      
    },
    viewMoreButton:{
      justifyContent:'space-between',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#ccc',
      padding:10,
      flexDirection:'row',
      borderRadius:10
    },

    rating:{
        alignSelf:'flex-start',
        marginBottom:4,
    },
    ratingCount: {
      color: 'gray',
      marginTop:5,
      fontSize:12
    },
    baring:{
      padding:10
    },
  
    starRatingBreakdown: {
      marginTop: 10,
    },
  
    starRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
      
    },
    bar: {
      width: 100,
      height: 10,
      backgroundColor: '#e0e0e0',
      marginHorizontal: 5,
    
    },
    filledBar: {
      height: 10,
      backgroundColor: 'green',
    },
    categoryRatingContainer: {
      marginTop: 20,
      flexDirection:'column',
      alignSelf:'flex-start'
    },
    ratingSection:{
      flexDirection:'row'
    },
    categoryRating: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
      width:'70%',
      alignSelf:'flex-start',
      // borderWidth:1
},
verifieduser:{
  width:'60%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom:4
},
Roundedbuttontext:{
color:'white'
},
borderRating:{
  borderBottomWidth:1,
  borderBottomColor:'#ccc',
  paddingBottom:5
},
textfy:{
color:'black'
},
user:{
  fontSize:16,
  fontWeight:'600',
  marginTop:10

},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: 10,
},
    ratingsection:{
      flexDirection: 'row',
    },
    cat:{
    marginLeft:10
    },
    reviewContainer: {
      borderBottomWidth: 1,
      borderColor: '#e0e0e0',
      padding: 15,
    },
    userName: {
      fontWeight: 'bold',
    },
    reviewImage: {
      width: 80,
      height: 80,
      margin: 5,
    },
    addToCartContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
    },
     
    productTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 8,
      color: 'black',
    },
    productPrice: {
      fontSize: 20,
      color: 'green'
    },
    
    iconigy:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%'
    },
  
    originalPrice: {
      textDecorationLine: 'line-through',
      color: 'grey',
      
     
    },
    deliverySection: {
      // flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'space-between',
      
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    deliveryText: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'black',
      marginBottom:10
    },
    deliveryAddress: {
      color: 'grey',
      fontSize: 14,
    },
    deliveryOptions: {
      marginTop: 20,
      marginBottom:40
  
    },
    border:{
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      borderTopColor:'#e0e0e0',
      borderTopWidth:1
    },
    optionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      // borderBottomWidth: 1,
      // borderBottomColor: '#e0e0e0',
    },
    optionText: {
      flex: 1,
      marginLeft: 10,
      color: 'black',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 18,
      color: 'black',
    
    },
    expandableItem: {
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      
     
    
    },
    expandableTitle: {
      fontSize: 14,
      color: 'black',
    },
    expandableContent: {
      marginTop: 8,
      color: 'grey',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    closeButton: {
      alignSelf: 'flex-end',
    },
    modalText: {
      fontSize: 18,
      marginTop: 10,
      color: 'black',
    },
    delivery:{
    flexDirection:'row',
    paddingVertical:20,
    justifyContent:'space-between',
    marginVertical: 10,
    paddingVertical: 10,
  
    },
    similarProductContainer: {
      width: 150,
      marginRight: 16,
     
     
    },
    similarProductImage: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      borderRadius:8
    },
    reviewImage: {
      width: '40%',
      height: 120,
      resizeMode: 'cover',
    },
    similarProductTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: '#666',
      marginVertical: 4,
    },
    similarProductPrice: {
      fontSize: 14,
      color: 'green',
    },
    bottomNavBar: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      width: '100%',
      padding: 16,
      backgroundColor: 'white',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
    },
    addToCartButton: {
      flex: 1,
      backgroundColor: 'black',
      padding: 16,
      alignItems: 'center',
      marginRight: 8,
      borderRadius: 8,
    },
    checkoutButton: {
      flex: 1,
      backgroundColor: '#000',
      padding: 16,
      alignItems: 'center',
      borderRadius: 8,
    },
  
    sizeContainer: {
      flexDirection: 'row',
      marginVertical: 8,
    },
    sizeButton: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginRight: 8,
      borderRadius: 2,
    },
    sizeButtonSelected: {
      backgroundColor: 'grey',
      borderColor: 'black',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    },
    sizeText: {
      color: '#000',
    },
    sizeTextSelected: {
      color: 'white',
    },
    bottomNavBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      paddingHorizontal: 16,
      borderColor: '#ccc',
    },
    changebutton:{
      flexDirection:'row',
      // borderWidth:1,
      // borderColor:'#ccc',
      width:'27%',
      height:34,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:8,
    },
    changeText:{
      color:'#f25ea8',
      fontWeight:'600'
    },
    carasoule:{
      position:'absolute',
      right:0,
      width:20,
      height:20,
      // marginBottom:'50%'
      // bottom:0
    },
    icon:{
     marginBottom:50
    },
    similarproduct:{
      marginVertical:25,
     
    },
   
   
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'flex-end',
    },
    halfModalContainer: {
      backgroundColor: 'white',
      height: '40%',  // Adjust for a half modal
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    closeButton: {
      alignSelf: 'flex-end',
    },
    modalText: {
      fontSize: 16,
      textAlign: 'center',
    },

    addressSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  addressLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  changeButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  changeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color:'black'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  cancelButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  delivery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
 
 
  changeButton: {
    alignSelf: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  modalCloseButton: {
    alignSelf: 'flex-end',
  },
  modalCloseText: {
    fontSize: 18,
    color:'black'
  },
  
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  checkButton: {
   backgroundColor:'#f25ea8',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  checkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    color:'#666'
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  addressTextContainer: {
    flex: 1,
  },
  addressName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  addressDetails: {
    color: '#888',
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#f25ea8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor:'#f25ea8'
  },
  roundedButton: {
    backgroundColor: 'transparent', // Default button background
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    borderColor:'#666',
    borderWidth:1
  },
  helpfulButtonSelected: {
    backgroundColor: '#ccc', // Background when helpful is selected
  },
  unhelpfulButtonSelected: {
    backgroundColor: '#ccc', // Background when unhelpful is selected
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 14,
    color:'black'
  },
  reviewcontformargin:{
    paddingVertical:20
  },

  });
  

  