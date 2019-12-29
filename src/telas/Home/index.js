import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { styles } from './style'


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			tipo: 'null'
		}
	}
	renderButtons = () => {
		if (this.state.tipo === '1') {
			return (
				<View style={{ ...styles.viewCards, padding: 40 }}>
					<TouchableOpacity style={styles.cards}>
						<Text style={styles.text}>Criar um monitoramento a partir de modelos pré-definidos </Text>
					</TouchableOpacity>
					<View style={styles.cards}>
						<TouchableOpacity>
							<Text style={styles.text}>Criar um monitoramento a partir da seleção de verificadores </Text>
						</TouchableOpacity>
					</View>
					<View style={styles.cards}>
						<TouchableOpacity>
							<Text style={styles.text}>Abrir Monitoramento salvo </Text>
						</TouchableOpacity>
					</View>
				</View>
			)
		} else if (this.state.tipo === '2') {
			return (
				<View>
				</View>
			)
		} else {
			return (
				<View>
				</View>
			)
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.viewCards}>
					<TouchableOpacity style={styles.cards} onPress={() => this.setState({ tipo: '1' })} >
						<Text style={styles.text}>Criar um monitoramento para manejo Florestal </Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cards} onPress={() => this.setState({ tipo: '2' })}>
						<Text style={styles.text}>Digitar fichas de campo do Monitoramento </Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cards} onPress={() => this.setState({ tipo: '3' })}>
						<Text style={styles.text}>Analisar resultados de Monitoramento </Text>
					</TouchableOpacity>
				</View>
				<View>
				{this.renderButtons()}
				</View>
			</View>
		)
	}
}


export default Home