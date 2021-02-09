import { StyleSheet, Dimensions } from 'react-native'

const DeviceHeight = Dimensions.get('screen').height; 
const DeviceWidth = Dimensions.get('screen').width; 

export default StyleSheet.create({
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    flex3: {
        flex: 3
    },
    flex4: {
        flex: 4
    },
    flex5: {
        flex: 5
    },
    flex6: {
        flex: 6
    },
    flexJustifyCentr: {
        flex: 1, 
        justifyContent: 'center'
    },
    flexDirectionRow: {
        flexDirection: 'row'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    justifyContentEnd: {
        justifyContent: 'flex-end'
    },
    justifyContentBetween: {
        justifyContent: 'space-between'
    },
    justifyContentAround: {
        justifyContent: 'space-around'
    },
    alignItemCenter: {
        alignItems: 'center'
    },
    alignItemEnd: {
        alignItems: 'flex-end'
    },
    flexWrap: {
        flexWrap: 'wrap'
    },

    // Border Styles
    brbWidth1: {
        borderWidth: 1,
    },
    brbWidth2: {
        borderWidth: 2,
    },
    brbTop1: {
        borderTopWidth: 1,
    },
    brbTop3: {
        borderTopWidth: 3,
    },
    brbBottom1: {
        borderBottomWidth: 1,
    },
    brbBottom3: {
        borderBottomWidth: 3,
    },
    brbRightWidth1: {
        borderRightWidth: 1,
    },
    brbLeftWidth1: {
        borderLeftWidth: 1,
    },
    brbLeftWidth2: {
        borderLeftWidth: 2,
    },
    brbLeftWidth3: {
        borderLeftWidth: 3,
    },
    brbColorWhite: {
        borderColor: 'white'
    },
    brbColorWhiteOpacity_5: {
        borderColor: 'rgba(255, 255, 255, 0.5)'
    },
    brbColorWhiteV2: {
        borderColor: '#F3F3F3'
    },
    brbColorOrange: {
        borderColor: '#FF8066'
    },
    brbColorGrayV1: {
        borderColor: '#D2D2D2'
    },
    brbColorRed: {
        borderColor: '#e74c3c'
    },
    brbRadius3: {
        borderRadius: 3
    },
    brbRadius5: {
        borderRadius: 5
    },
    brbRadius10: {
        borderRadius: 10
    },
    brbRadiusTop3: {
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    brbRadiusBottom3: {
        borderBottomLeftRadius: 5, 
        borderBottomRightRadius: 5
    },
    brbRightRadius3: {
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3
    },
    brbRightRadius5: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    brbLeftRadius3: {
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    brbBottomRadius3: {
        borderBottomEndRadius: 3, 
        borderBottomStartRadius: 3
    },
    brbBottomLeftRadius3: {
        borderBottomLeftRadius: 3, 
    },
    brbBottomRightRadius3: {
        borderBottomRightRadius: 3, 
    },
    
    
    // Font Size
    fontSize09: {
        fontSize: 9
    },
    fontSize10: {
        fontSize: 10
    },
    fontSize12: {
        fontSize: 12
    },
    fontSize13: {
        fontSize: 13
    },
    fontSize14: {
        fontSize: 14
    },
    fontSize15: {
        fontSize: 15
    },
    fontSize16: {
        fontSize: 16
    },
    fontSize18: {
        fontSize: 18
    },
    fontSize20: {
        fontSize: 20
    },
    fontSize22: {
        fontSize: 22
    },
    fontSize26: {
        fontSize: 26
    },
    fontSize30: {
        fontSize: 30
    },
    fontSize35: {
        fontSize: 35
    },

    // Font Styles
    fontRoboto: {
        fontFamily: 'Roboto'
    },
    fontPoppins: {
        fontFamily: 'Poppins'
    },
    fontPoppinsMedium: {
        fontFamily: 'Poppins-Medium'
    },
    fontWeightBold: {
        fontWeight: 'bold'
    },

    // Text Align
    textRight: {
        textAlign: 'right'
    },
    textLeft: {
        textAlign: 'left'
    },
    textCenter: {
        textAlign: 'center'
    },

    // Colors
    btnThemeOrange: {
        color: '#E6A044'
    },
    colorOrnageV1: {
        color: '#FF8066'
    },
    colorWhite: {
        color: 'white'
    },
    colorWhiteOpacity_5: {
        color: 'rgba(255, 255, 255, 0.5)'
    },
    colorGrayV1: {
        color: '#8A8A8A'
    },
    colorGrayV2: {
        color: '#9F9F9F'
    },
    colorGrayV3: {
        color: '#8A8A8A'
    },
    colorGrayV4: {
        color: '#DCDCDC'
    },
    colorGreenV1: {
        color: '#24B056'
    },
    bgTransparent: {
        backgroundColor: 'transparent'
    },
    bgWhite: {
        backgroundColor: '#fff'
    },
    bgWhite_opacity_0: {
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    bgWhite_opacity_3: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    bgWhite_opacity_5: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    bgSoftOrange_opacity_6: {
        backgroundColor: 'rgba(251, 188, 175, 0.60)'
    },
    bgWhite_opacity_25: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)'
    },
    bgWhite_opacity_15: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)'
    },
    bgOrange: {
        backgroundColor: '#FF8066'
    },
    bgGrayV1: {
        backgroundColor: '#F3F3F3'
    },
    bgGreen: {
        backgroundColor: "#24B056"
    },
    bgGreenV2: {
        backgroundColor: "#55AB5A"
    },
    bgSoftGreen: {
        backgroundColor: "#7DBF82"
    },
    bgSoftOrange: {
        backgroundColor: "#FF947E"
    },
    bgCityLights: {
        backgroundColor: "#dfe6e9"
    },
    bgDark_opacity_20: {
        backgroundColor: 'rgba(000, 000, 000, 0.20)'
    },
    bgEfEfEf: {
        backgroundColor: '#EFEFEF'
    },
    bgRedRgba250177160: { backgroundColor: 'rgba(250, 177, 160, 0.64)' },
    
    // Margin & Padding
    p5: {
        padding: 5
    },
    p10: {
        padding: 10
    },
    p15: {
        padding: 15
    },
    p20: {
        padding: 20
    },
    pt2: {
        paddingTop: 2
    },
    pt3: {
        paddingTop: 3
    },
    pt5: {
        paddingTop: 5
    },
    pt10: {
        paddingTop: 10
    },
    pt15: {
        paddingTop: 15
    },
    pt20: {
        paddingTop: 20
    },
    pt30: {
        paddingTop: 30
    },
    pb5: {
        paddingBottom: 5
    },
    pb10: {
        paddingBottom: 10
    },
    pb15: {
        paddingBottom: 15
    },
    pb20: {
        paddingBottom: 20
    },
    pb25: {
        paddingBottom: 25
    },
    pb40: {
        paddingBottom: 40
    },
    pb60: {
        paddingBottom: 60
    },
    pl3: {
        paddingLeft: 3
    },
    pl5: {
        paddingLeft: 5
    },
    pl10: {
        paddingLeft: 10
    },
    pl15: {
        paddingLeft: 15
    },
    pl17: {
        paddingLeft: 17
    },
    pl20: {
        paddingLeft: 20
    },
    pr3: {
        paddingRight:3
    },
    pr5: {
        paddingRight:5
    },
    pr10: {
        paddingRight:10
    },
    pr100: {
        paddingRight:100
    },
    px2: {
        paddingHorizontal: 2
    },
    px5: {
        paddingHorizontal: 5
    },
    px7: {
        paddingHorizontal: 7
    },
    px10: {
        paddingHorizontal: 10
    },
    px15: {
        paddingHorizontal: 15
    },
    px20: {
        paddingHorizontal: 20
    },
    px25: {
        paddingHorizontal: 25
    },
    py3: {
        paddingVertical: 3
    },
    py5: {
        paddingVertical: 5
    },
    py10: {
        paddingVertical: 10
    },
    py15: {
        paddingVertical: 15
    },
    py25: {
        paddingVertical: 25
    },
    pt_5_percent: {
        paddingTop: '5%'
    },
    pt_10_percent: {
        paddingTop: '10%'
    },
    pt_15_percent: {
        paddingTop: '15%'
    },
    m_0: {
        margin: 0
    },
    mx5: {
        marginHorizontal: 5
    },
    mx10: {
        marginHorizontal: 10
    },
    mx15: {
        marginHorizontal: 15
    },
    my1: {
        marginVertical: 1
    },
    my4: {
        marginVertical: 4
    },
    my5: {
        marginVertical: 5
    },
    mgt5: {
        marginTop: 5
    },
    mgt10: {
        marginTop: 10
    },
    mgt15: {
        marginTop: 15
    },
    mgt25:{
        marginTop: 25
    },
    mgt35:{
        marginTop: 35
    },
    mgt65:{
        marginTop: 65
    },
    ml:{
        marginLeft: 5
    },
    mr5:{
        marginRight: 5
    },
    mr10:{
        marginRight: 10
    },
    mb2: {
        marginBottom: 2
    },
    mb3: {
        marginBottom: 3
    },
    mb5: {
        marginBottom: 5
    },
    mb10: {
        marginBottom: 10
    },
    mb15: {
        marginBottom: 15
    },
    mgtMinus2: {
        marginTop: -2
    },
    mgtMinus5: {
        marginTop: -5
    },
    mgtMinus10: {
        marginTop: -10
    },
    mbMinus2: {
        marginBottom: -2
    },
    mbMinus4: {
        marginBottom: -4
    },
    mbMinus6: {
        marginBottom: -6
    },
    mbMinus8: {
        marginBottom: -8
    },
    mbMinus10: {
        marginBottom: -10
    },

    // Widht & Heights
    flexBasis300: { flexBasis: 300 },
    
    width13: { width: 13 },

    width23: { width: 23 },

    width24: { width: 24 },

    width25: { width: 25 },

    width30: { width: 30 },
    
    width34: { width: 34 },

    width50: { width: 50 },

    width53: { width: 53 },

    width55: { width: 55 },

    width60: { width: 60 },
    
    width65: { width: 65 },

    width70: { width: 70 },

    width75: { width: 75 },

    width80: { width: 80 },

    width100: { width: 100 },

    width140: { width: 140 },

    width145: { width: 145 },
    
    width155: { width: 155 },
    
    width190: { width: 190 },

    width200: { width: 200 },
    
    width400: { width: 400 },

    width_20_percent: { width: '20%' },

    width_25_percent: { width: '25%' },
    
    width_30_percent: { width: '30%' },

    width_35_percent: { width: '35%' },

    width_40_percent: { width: '40%' },
    
    width_45_percent: { width: '45%' },

    width_50_percent: { width: '50%' },

    width_60_percent: { width: '60%' },
    
    width_70_percent: { width: '70%' },

    width_75_percent: { width: '75%' },

    width_80_percent: { width: '80%' },

    width_85_percent: { width: '85%' },

    width_100_percent: { width: '100%' },
    
    height13: { height: 13 },

    height20: { height: 20 },

    height24: { height: 24 },

    height25: { height: 25 },

    height28: { height: 28 },

    height30: { height: 30 },

    height34: { height: 34 },

    height35: { height: 35 },

    height40: { height: 40 },
    
    height45:{ height: 45 },
    
    height50:{ height: 50 },

    height55:{ height: 55 },

    height60:{ height: 60 },
    
    height70:{ height: 70 },

    height240:{ height: 240 },

    width_DeviceWidth: { width: DeviceWidth },

    width_DeviceWidth_80: { width: DeviceWidth * 0.80 },

    height_100_percent:{ height: '100%' },

    height_DeviceHeight:{ height: DeviceHeight },

    height_DeviceHeight_45:{ height: DeviceHeight * 0.45 },
    
    height_DeviceHeight_60:{ height: DeviceHeight * 0.60 },
    
    height_DeviceHeight_75:{ height: DeviceHeight * 0.75 },
    
    height_DeviceHeight_Minus_150:{ height: DeviceHeight - 150 },
    
    maxHeight_DeviceHeight_45:{ maxHeight: DeviceHeight * 0.45 },

    // Position Styles
    top2: {    
        top: 2
    },
    top3: {    
        top: 3
    },
    top4: {    
        top: 4
    },
    top5: {    
        top: 5
    },
    top10: {    
        top: 10
    },
    top20: {    
        top: 20
    },
    top22: {    
        top: 22
    },
    top25: {    
        top: 25
    },
    topMinus5: {
        top: -5
    },
    topMinus10: {
        top: -10
    },
    topMinus15: {
        top: -15
    },
    topMinus20: {
        top: -20
    },
    bottom0: {
        bottom: 0
    },
    bottomMinus_25: {
        bottom: -25
    },
    bottomMinus_45: {
        bottom: -45
    },
    bottomMinus_65: {
        bottom: -65
    },
    left0: {
        left: 0
    },
    left5: {
        left: 5
    },
    leftMinus8: {
        left: -8
    },
    leftMinus10: {
        left: -10
    },
    leftMinus15: {
        left: -15
    },
    leftMinus50: {
        left: -50
    },
    leftMinus80: {
        left: -80
    },
    leftMinus_50_percent: {
        left: '-50%'
    },
    leftMinus_100_percent: {
        left: '-100%'
    },
    right0: {
        right: 0
    },
    rightMinus8: {
        right: -8
    },
    rightMinus10: {
        right: -10
    },
    rightMinus15: {
        right: -15
    },
    rightMinus20: {
        right: -20
    },
    rightMinus25: {
        right: -25
    },
    rightMinus55: {
        right: -55
    },
    psabsolute: {
        position: 'absolute'
    },
    mTopAuto: {
        marginTop: 'auto'
    },

    // Opacity Styles
    opacity_5: { opacity: 0.5 },

    // Avater Img
    avaterSize24Rounded:{
        width: 24,
        height: 24,
        borderRadius: 24 / 2
    },
    avaterSize54Rounded:{
        width: 54,
        height: 54,
        borderRadius: 54 / 2
    },
    resizeModeContain: {
        resizeMode: 'contain'
    },


    // Random Styles
    index999: { zIndex: 999999 },
    overFlowHidden: { overflow: 'hidden' },
    shapeTopLeft: {
        position: 'absolute', 
        top: 0,
        left: -65, 
    },
    shapeBottomRight: {
        position: 'absolute', 
        right: 15, bottom: -45
    },
    customerImgContainer: {
        width: 30,
        height: 30,
        overflow: 'hidden',
        borderColor: '#FF8066',
        borderWidth: 2,
        borderRadius: 30 / 2, 
    },
    customerImg: {
        width: 30, 
        height: 30, 
        resizeMode: 'contain', 
    },
    dividerHeadr: {
        width:2, 
        height:30, 
        backgroundColor: '#DCDCDC'
    },
    dividerHeight100: {
        width: 1, 
        height: '100%', 
        backgroundColor: '#DCDCDC'
    },
    dividerHorizontal: { 
        height:1, 
        backgroundColor: '#DCDCDC'
    },
    dividerHorizontalWidth80: { 
        height: 1,
        width: '80%', 
        backgroundColor: '#DCDCDC'
    },
    leftAction: {
        backgroundColor: '#000'
    },
    nativeShadowElivation6: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    nativeShadowElivation10: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
});