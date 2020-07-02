import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../layouts/ManageLayout'

import { connect } from 'react-redux'
import { getLink } from '../../../actions/linkActions'

import FormGroup from '../../../components/FormGroup'
import FormCheck from '../../../components/FormCheck'

const EditLink = ({ link, getLink }) => {

    const { id } = useParams()

    useEffect(() => {
        getLink(id)
    }, [getLink, id])

    return (
        <Layout>
            <h1>Editar link</h1>
            <div>
                {link ? (
                    <form>
                        <FormGroup label="Nome" name="label" data={link} type="text" />
                        <FormGroup label="URL" name="url" data={link} type="text" />
                        <FormCheck label="É uma rede social" name="isSocial" data={link} />

                        <div>
                            <button type="submit" className="btn btn-primary btn-round">Confirmar</button>
                        </div>
                    </form>
                ) : <div>Esse link não existe</div>}

            </div>
        </Layout>

    )
}

const mapStateToProps = state => {
    return {
        link: state.link.link
    }
}

export default connect(mapStateToProps, { getLink })(EditLink)
