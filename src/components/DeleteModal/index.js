import React from 'react'

const DeleteModal = ({ confirmOperation, cancelOperation }) => {
    return (
        <div className="alert alert-danger rounded float-center shadow-bold">
            <h4 className="alert-heading">Confimação</h4>
            <p>Tem certeza que deseja deletar? Essa ação NÃO pode ser desfeita</p>
            <hr />
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-light mr-3" onClick={cancelOperation}>Cancel</button>
                <button className="btn btn-danger" onClick={confirmOperation}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteModal
