import React, { Component } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

export default class QRCodeScannerScreen extends Component {
    onSuccess = async e => {
        try {
            //this.props.navigation.navigate('HomeMain');
            console.log(this.props.navigation.canGoBack());
            console.log("QR코드 스캔 완료");
            console.log("버스 번호", e.data);
        }catch (e) {
            console.log(e);
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    showMarker={true}
                    checkAndroid6Permissions={true}
                    ref={elem => {
                        this.scanner = elem;
                    }}
                    cameraStyle={{ height: Dimensions.get("window").height }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    }
});