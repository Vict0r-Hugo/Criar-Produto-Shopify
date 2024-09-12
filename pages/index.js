
import {Button} from '@mui/material'

export default function Home () {

	async function criarProdutosShopify() {
		try{
			const resposta = await fetch('/api/hendler',{
				method: 'POST',
				headers:{
					'Content-type': 'application/json'
				}
			})
			if (resposta.ok) {
				console.log('Produto criado')
			}	
		}
		catch(e){
			console.log(e)
		}
	}
	return(
		<>
			<h1>Olá</h1>
			<Button onClick={criarProdutosShopify}>
				Criar
			</Button>
		</>

	)
}
