import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Item } from 'native-base'
import { Svg } from 'expo';

const { Circle, Rect, G } = Svg;

const Trapezoid = () => (
  <Item style={styles.margin}>
    <View style={styles.trapezoid} />
  </Item>
)

const Cone = () => (
  <Item style={styles.margin}>
    <View style={styles.cone} />
  </Item>
)

const TriangleUp = ({styleUp}) => (
  <View style={[styles.triangle, styleUp]} />
)

const TriangleDown = ({styleDown}) => (
  <View style={[styles.triangle, styles.triangleDown, styleDown]} />
)

const Pentagon = () => (
  <Item style={[styles.margin,{width: 200, height: 200, }]}>
    <View style={styles.pentagon}>
      <View style={styles.pentagonInner} />
      <View style={styles.pentagonBefore} />
    </View>
  </Item>
)

const StarSix = () => (
  <Item style={styles.margin}>
    <View style={styles.starsix}>
      <TriangleUp styleUp={styles.starSixUp} />
      <TriangleDown styleDown={styles.starSixDown} />
    </View>
  </Item>
)

const Hexagon = () => (
  <Item style={styles.margin}>
    <View style={styles.hexagon}>
      <View style={styles.hexagonInner} />
      <View style={styles.hexagonBefore} />
      <View style={styles.hexagonAfter} />
    </View>
  </Item>
)

const Pacman1 = () => (
  <Item style={styles.margin}>
    {/* <View style={styles.pacman}/> */}
    <View style={ { 
          width: 0,
          height: 0,
          backgroundColor: "transparent",
          borderTopWidth: 60,
          borderTopColor: 'red',
          borderLeftColor: 'green',
          borderLeftWidth: 60,
          borderRightColor: 'transparent',
          borderRightWidth: 60,
          borderBottomColor: 'red',
          borderBottomWidth: 60, 
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          borderBottomRightRadius: 60,
          borderBottomLeftRadius: 60}}/>
  </Item>
)

const Pacman2 = () => (

<Item style={{
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: 'yellow',
    position:'relative'}}>
    <View style={{
          width: 0,
          height: 0,
          left: 100,
          borderTopWidth: 100,
          borderTopColor:'transparent',
          borderRightWidth: 100,
          borderRightColor: 'green',
          borderBottomWidth: 100,
          borderBottomColor:'transparent' }} />
</Item>

)

const Ribbon = ({
  icon,
  ribbonText,
  iconStyle,
  ribbonStyle,
  textStyle,
  leftStyle,
  tailStyle,
}) => (
    <Item style={[styles.ribbon, styles.margin, ribbonStyle]}>
      <View style={[styles.ribbonLeft, leftStyle]}>
      { icon && <Image source={icon} style={[styles.iconStyle, iconStyle]} />}
        <Text style={[styles.ribbonText, textStyle]}>{ribbonText}</Text>
      </View>
      <View style={[styles.ribbonRight, tailStyle]} />
    </Item>
  )

const SvgCircle = () => (
  <Item style={[{ alignItems: 'center', justifyContent: 'center' },]}>
    <Svg height={100} width={100}>
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="blue"
        strokeWidth="2.5"
        fill="green"
      />
    </Svg>
  </Item>
)

const SvgRect = () => (
  <Item style={[{ alignItems: 'center', justifyContent: 'center' },]}>
    <Svg height={100} width={100} viewBox="0 0 100 100">
    <G>
      
        <Rect
          x="15"
          y="15"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        />
        <Text
          x="50"
          y="50"
          textAnchor="middle"
          fontWeight="bold"
          fontSize="16"
          fill="blue"
        >
          Square
        </Text>
    </G>
    </Svg>
  </Item>
)


export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>          
          <View style={styles.margin}>
            <View style={styles.square}/>
          </View>         
          <View style={styles.margin}>
            <View style={styles.circle}/>
          </View>
          <Trapezoid/>
          <Cone/>
          <StarSix/>
          {/* <Pentagon/> */}
          <Hexagon/>
          <Pacman1/>
          <Pacman2/>
          <Ribbon/>
          <SvgCircle/>
          <SvgRect/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  margin:{
    borderColor: 'transparent',
    marginVertical: 10,
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "red"
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  cone: {
    width: 0,
    height: 0,
    borderLeftWidth: 55,
    borderLeftColor: 'transparent',
    borderRightWidth: 55,
    borderRightColor: 'transparent',
    borderTopWidth: 100,
    borderTopColor: 'red',
    borderRadius: -55
  },
  trapezoid: {
    width: 200,
    height: 0,
    borderBottomWidth: 50,
    borderBottomColor: 'red',
    borderLeftWidth: 25,
    borderLeftColor: 'green',
    borderRightWidth: 25,
    borderRightColor: 'green',
    borderTopWidth: 50,
    borderTopColor: 'blue',
    borderTopLeftRadius: -10,
    borderStyle: 'solid'
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'blue'
  },
  triangleDown: {
    transform: [
      {rotate: '180deg'}
    ]
  },
  starsix: {
    width: 100,
    height: 100
  },
  starSixUp: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  starSixDown: {
    position: 'absolute',
    top: 25,
    left: 0
  },
  pentagon: {
    backgroundColor: 'transparent'
  },
  pentagonInner: {
    width: 90,
    borderBottomColor: 'red',
    borderBottomWidth: 0,
    borderLeftColor: 'transparent',
    borderLeftWidth: 18,
    borderRightColor: 'transparent',
    borderRightWidth: 18,
    borderTopColor: 'red',
    borderTopWidth: 50
  },
  pentagonBefore: {
    position: 'absolute',
    height: 0,
    width: 0,
    top: -10,
    left: 0,
    borderStyle: 'solid',
    borderBottomColor: 'blue',
    borderBottomWidth: 35,
    borderLeftColor: 'transparent',
    borderLeftWidth: 45,
    borderRightColor: 'transparent',
    borderRightWidth: 45,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
  },
  hexagon: {
    width: 100,
    height: 55
  },
  hexagonInner: {
    width: 100,
    height: 55,
    backgroundColor: 'red'
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'red'
  },
  hexagonBefore: {
    position: 'absolute',
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 25,
    borderBottomColor: 'blue'

  },
  pacman: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderTopWidth: 60,
    borderTopColor: 'red',
    borderLeftColor: 'green',
    borderLeftWidth: 60,
    borderRightColor: 'transparent',
    borderRightWidth: 60,
    borderBottomColor: 'transparent',
    borderBottomWidth: 60, 
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60
  },
  ribbon: {
    flex: 1,
    flexDirection: 'row',
  },
  ribbonLeft: {
    flexDirection: 'row',
    height: 100,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingLeft: 10,
  },
  ribbonRight: {
    height: 100,
    backgroundColor: 'transparent',
    borderRightWidth: 40,
    borderRightColor: 'transparent',
    borderTopWidth: 50,
    borderTopColor: 'red',
    borderBottomWidth: 50,
    borderBottomColor: 'red'
  },
  ribbonText: {
    fontSize: 14,
    color: 'white',
    marginRight: 20,
  },
  iconStyle: {
    marginRight: 5,
  }
});
