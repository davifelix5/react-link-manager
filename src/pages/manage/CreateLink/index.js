import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../../layouts/ManageLayout'
import { getFormData } from '../../../helpers/form'
import { createLink } from '../../../actions/linkActions'
import { connect } from 'react-redux'

const CreateLink = ({ link, createLink }) => {
	const handleSubmit = e => {
		const data = getFormData(e)
		console.log('CreateLink.formData: ', data)
		createLink(data)
	}

	console.log('CreateLink.link: ', link)

	if (link) {
		return <Redirect to="manage/links" />
	}

	return (
		<Layout>
			<h1>Adicionar link</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="nome">Nome</label>
						<input className="form-control" type="text" name="label" id="name" />
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

const mapStateToProps = state => {
	return {
		link: state.link.link
	}
}

export default connect(mapStateToProps, { createLink })(CreateLink)
