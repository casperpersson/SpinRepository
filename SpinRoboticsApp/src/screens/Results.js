import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';


export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Time', 'Program Name', 'Evaluation', 'Final Torque','Final insertion depth', 'Final Angle', 'detail'],
      tableData: [
        ['10:04:08\n22/02/2024', 'Den her', 'OK', '1.20Nm', '10.80mm', '10', '0'],
        ['10:04:08\n22/02/2024', 'Den her', 'OK', '1.20Nm', '10.80mm', '10', '0'],
        ['10:04:08\n22/02/2024', 'Den her', 'OK', '1.20Nm', '10.80mm', '10', '0'],
        ['10:04:08\n22/02/2024', 'Den her', 'OK', '1.20Nm', '10.80mm', '10', '0'],
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`Her er der nogle detaljer eller noget`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'black', borderWidth: 1}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 6 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        <Image
           style={styles.Logo}
           source={require('../assets/spin-roboticsweb.jpg')}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  head: { height: 50, backgroundColor: 'White' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: 'lightgrey'},
  btn: { margin: 5, width: 50, height: 18, backgroundColor: 'lightblue',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
  Logo: { width: 400, height: 200}
    
});