import React, {useState} from 'react';
import Modal from './componentes/Modal';
import styled from 'styled-components';

const App = () => {
	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [estadoModal2, cambiarEstadoModal2] = useState(false);
	const [estadoModal3, cambiarEstadoModal3] = useState(false);
	const [estadoModal4, cambiarEstadoModal4] = useState(false);

	return (
		<div>
			<ContenedorBotones>
				<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Modal 1</Boton>
				<Boton onClick={() => cambiarEstadoModal2(!estadoModal2)}>Modal 2</Boton>
				<Boton onClick={() => cambiarEstadoModal3(!estadoModal3)}>Modal 3</Boton>
				<Boton onClick={() => cambiarEstadoModal4(!estadoModal4)}>Modal 4</Boton>
			</ContenedorBotones>

			{/* Modal #1 */}
			<Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo="Hola!"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<Contenido>
					<h1>Ventana Modal</h1>
					<p>Reutilizable y con opciones de personalización.</p>
					<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</Boton>
				</Contenido>
			</Modal>

			{/* Modal #2 */}
			<Modal
				estado={estadoModal2}
				cambiarEstado={cambiarEstadoModal2}
				titulo="Ventana 2!"
				mostrarHeader={false}
				mostrarOverlay={false}
				posicionModal={'end'}
				padding={'20px'}
			>
				<Contenido>
					<h1>Ventana Modal 2</h1>
					<p>Reutilizable y con opciones de personalización.</p>
					<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</Boton>
				</Contenido>
			</Modal>

			{/* Modal #3 */}
			<Modal
				estado={estadoModal3}
				cambiarEstado={cambiarEstadoModal3}
				titulo="Ventana 3!"
				mostrarHeader={true}
				mostrarOverlay={false}
				posicionModal={'start'}
				padding={'20px'}
			>
				<Contenido>
					<img src="https://images.unsplash.com/photo-1598978510474-09d06dc6a5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80" alt="" />
				</Contenido>
			</Modal>

			{/* Modal #4 */}
			<Modal
				estado={estadoModal4}
				cambiarEstado={cambiarEstadoModal4}
				titulo="Ventana 4!"
				mostrarHeader={false}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'0px'}
			>
				<Contenido>
					<img src="https://images.unsplash.com/photo-1598978510474-09d06dc6a5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80" alt="" />
				</Contenido>
			</Modal>
		</div>
	);
}
 
export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;