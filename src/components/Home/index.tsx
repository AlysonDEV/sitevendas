import { Link } from 'react-router-dom '

export function Home() {
	return (
		<>
			<h1>Página Home</h1>
      <nav>
        <Link to="/vendas">Vendas</Link>
      </nav>
		</>

	)
}