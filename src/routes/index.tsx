import { Routes, Route, Link } from "react-router-dom"

import { Home } from "../components/Home"
import { Vendas } from "../components/Vendas"
import App from "../App"


function MyRoutes() {
	return (
		<>
			<App />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/vendas" element={<Vendas />} />
			</Routes>
		</>
	)
}

export default MyRoutes