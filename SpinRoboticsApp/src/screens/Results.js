import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class ResultsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Time', 'Program Name', 'Evaluation', 'Final Torque', 'Final Insertion Depth', 'Final Angle'],
      tableData: [
        ['10:04:00 \n 22/02/2024', 'Den Her', 'OK', '1.20 Nm', '10.80 mm'],
        ['10:03:59 \n 22/02/2024', 'Den Her', 'OK', '1.20 Nm', '11.50 mm'],
        ['10:03:59 \n 22/02/2024', 'Den Her', 'OK', '1.20 Nm', '10.26 mm'],
        ['10:03:59 \n 22/02/2024', 'Den Her', 'OK', '1.20 Nm', '10.25 mm'],
        ['10:03:59 \n 22/02/2024', 'Den Her', 'OK', '1.20 Nm', '10.37 mm'],
        ['10:03:59 \n 22/02/2024', 'Den Her', 'OK', '1.20 Nm', '10.42 mm'],
        ['10:03:59 \n 22/02/2024', 'Den Her', 'OK', '1.20 Nm', '10.43 mm']
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
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
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 5 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6, color: '#000'},
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});