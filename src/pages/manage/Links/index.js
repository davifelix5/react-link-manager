import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchLinks } from '../../../actions/linkActions'

import Layout from '../../layouts/ManageLayout'

import { connect } from 'react-redux'
import { resetLinks, setLinkToRemove } from '../../../actions/linkActions'

const Links = ({ links, fetchLinks, resetLinks, setLinkToRemove, linkToRemove }) => {

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    useEffect(() => {
        resetLinks()
    }, [resetLinks])

    console.log('Links.linkToRemove: ', linkToRemove)

    return (
        <Layout>
            <div className="row">
                <div className="col">
                    <h1>Links</h1>
                </div>

                <div className="col text-right align-self-bottom pt-2">
                    <Link to="/manage/links/create-link" className="btn btn-primary">
                        Add
                    </Link>
                </div>
            </div>

            {links && links.length ? links.map(link => {

                const handleDeleteClick = () => setLinkToRemove(link)

                const extraBorder = linkToRemove && linkToRemove.id === link.id ? 'border border-danger rounded' : 'border border-transparent'

                return (
                    <div className={`py-2 px-3 d-flex flex-row justify-content beetween ${extraBorder}`} key={link.id}>
                        <div className="pr-3"><img src={link.image || 'https://via.placeholder.com/100'} alt={link.label} /></div>
                        <div className="align-self-center">
                            <span className="text-primary clearfix">{link.label}</span>
                            <span className="text-primary clearfix">{link.url}</span>
                        </div>
                        <div className="ml-auto p-2 clearfix">
                            <Link to={`/manage/links/edit-link/${link.id}`}>Edit</Link>
                            <button className="btn btn-clear" onClick={handleDeleteClick}>Delete</button>
                        </div>
                    </div>
                )
            }) : <div>Não há links </div>}
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        links: state.link.links,
        linkToRemove: state.link.linkToRemove
    }
}

export default connect(mapStateToProps, { fetchLinks, resetLinks, setLinkToRemove })(Links)