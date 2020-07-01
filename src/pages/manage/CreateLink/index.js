import React from 'react'
import Layout from '../../layouts/ManageLayout'

const CreateLink = () => {
	return (
		<Layout>
			<h1>Adicionar link</h1>
			<div>
				<form>
					<div className="form-group">
						<label htmlFor="nome">Nome</label>
						<input className="form-control" type="text" name="nome" id="nome" />
					</div>
					<div className="form-group">
						<label htmlFor="url">URL</label>
						<input className="form-control" type="text" name="url" id="url" />
					</div>
					<div className="form-group form-check">
						<label className="form-check-label">
							<input type="checkbox" name="isSocial" />
							<span className="form-check-sign"> É uma rede social </span>
						</label>
					</div>
					<div>
						<button type="submit" className="btn btn-primary btn-round">Criar</button>
					</div>
				</form>
			</div>
		</Layout>

	)
}

export default CreateLink
