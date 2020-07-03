import React, { useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'

import Layout from '../../layouts/ManageLayout'

import { connect } from 'react-redux'
import { getLink, updateLink } from '../../../actions/linkActions'

import { getFormData } from '../../../helpers/form'

import FormGroup from '../../../components/FormGroup'
import FormCheck from '../../../components/FormCheck'

const EditLink = ({ link, getLink, updateLink, newLink }) => {

    const { id } = useParams()

    useEffect(() => {
        getLink(id)
    }, [getLink, id])

    const handleSubmit = event => {
        const data = getFormData(event)
        updateLink(id, data)
    }

    if (newLink) {
        return <Redirect to="/" />
    }

    return (
        <Layout>
            <h1>Editar link</h1>
            <div>
                {link ? (
                    <form onSubmit={handleSubmit}>
                        <FormGroup label="Nome" name="label" data={link} type="text" />
                        <FormGroup label="URL" name="url" data={link} type="text" />
                        <FormCheck label="É uma rede social" name="isSocial" data={link} />

                        <div>
                            <button type="submit" className="btn btn-primary btn-round">Confirmar</button>
                        </div>
                    </form>
                ) : <div>Carregando...</div>}

            </div>
        </Layout>

    )
}

const mapStateToProps = state => {
    return {
        link: state.link.link,
        newLink: state.link.newLink
    }
}

export default connect(mapStateToProps, { getLink, updateLink })(EditLink)
