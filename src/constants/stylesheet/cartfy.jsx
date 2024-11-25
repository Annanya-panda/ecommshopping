import { StyleSheet,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 10,
      },
      carttext:{
       color:'black'
      },
      cartItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
      },
    
      imageSection: {
        flex: 1,
      },
      discountText:{
       color:'green'
      },
      cartImage: {
        width: 80,
        height: 170,
        borderRadius: 8,
        resizeMode: 'cover',
      },
      detailsSection: {
        flex: 2,
        marginLeft: 10,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
      detailText: {
        fontSize: 14,
        color: '#555',
        marginVertical: 2,
      },
      price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#008000',
      },
      deliveryText: {
        fontSize: 12,
        color: '#777',
      },
      removeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        // backgroundColor: '#000',
        borderRadius: 40,
        // paddingVertical: 5,
        // paddingHorizontal: 10,
      },
      removeButtonText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
      },
      totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
      },
      checkoutButton: {
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },
      checkoutButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
      },
      button:{
        flexDirection:'row',
        borderWidth:1,
        width:'40%',
        justifyContent:'space-around',
        borderColor:'#ccc'
      },
      couponSection: {
        backgroundColor: '#e7f3ff',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        // paddingHorizontal:20
      },
      couponText: {
        flex: 1,
        fontSize: 14,
        color: '#333',
        lineHeight: 24,
        paddingHorizontal: 10,
      },
      couponButton: {
        backgroundColor: '#007bff',
        paddingVertical: 4,
        marginRight: 15,
        borderRadius: 20,
        width:30,
        alignItems:'center'
      },
      couponButtonText: {
        color: '#fff',
        fontSize: 14,
      },
      
      quickPicksSection: {
        marginVertical: 10,
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'black'
      },
      quickPickItem: {
        marginRight: 10,
        alignItems: 'center',
      },
      quickPickImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
      },
      quickPickTitle: {
        fontSize: 14,
        color: '#333',
        marginVertical: 5,
      },
      quickPickPrice: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      addToBagButton: {
        // backgroundColor: '#007bff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth:1,
        borderColor:'#ccc'
      },
      addToBagButtonText: {
        color: '#000',
        fontSize: 12,
        fontWeight:'600'
      },
      
      priceDetailsSection: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
      },
      priceRow: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
        color:'white'
      },
      priceTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
      },
})