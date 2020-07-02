import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchLinks } from '../../../actions/linkActions'

import Layout from '../../layouts/ManageLayout'

import { connect } from 'react-redux'

const Links = ({ links, fetchLinks }) => {

    useEffect(() => {
        console.log('Use effect executed')
        fetchLinks()
    }, [fetchLinks])

    console.log('Links.links: ', links)

    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <h1>Links</h1>
                </div>

                <div className="col text-right align-self-bottom pt-2">
                    <Link to="manage/links/add-link" className="btn btn-primary">
                        Add
                    </Link>
                </div>
            </div>

            {links && links.length ? links.map(link => (
                <div className="py-2 px-3 d-flex flex-row justify-content beetween" key={link.id}>
                    <div className="pr-3"><img src={link.image || 'https://via.placeholder.com/100'} alt={link.label} /></div>
                    <div className="align-self-center">
                        <span className="text-primary clearfix">{link.label}</span>
                        <span className="text-primary clearfix">{link.url}</span>
                    </div>
                    <div className="ml-auto p-2 clearfix">
                        <Link to={`/manage/links/edit-link/${link.id}`}>Edit</Link>
                        <span>Delete</span>
                    </div>
                </div>
            )) : <div>Não há links </div>}
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        links: state.link.links
    }
}

export default connect(mapStateToProps, { fetchLinks })(Links)