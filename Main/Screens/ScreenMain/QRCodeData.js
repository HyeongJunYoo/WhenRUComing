import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class QRCodeData extends Component {
	constructor(props) {
		super(props);

		this.state = { qrCodeData: " ", scanner: undefined };
	}
	
	componentDidMount() {
		
		//아래 코드는 QRCodeScannerScreen을 통해 전달받은 정보를 수신

		const qrCodeData = this.props.navigation.getParam("data", "No data read");
		const scanner = this.props.navigation.getParam("scanner", () => false);

		this.setState({ qrCodeData: qrCodeData, scanner: scanner });
	}
	
	scanQRCodeAgain() {
		this.state.scanner.reactivate();
		this.props.navigation.goBack();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{this.state.qrCodeData}</Text>
				<Button
					title={"QR코드 다시 스캔하기"}
					onPress={() => this.scanQRCodeAgain()}
				/>
				<Button
					title={"뒤로 가기"}
					onPress={() => this.props.navigation.popToTop()}
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