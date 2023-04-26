import React from 'react';
import { Modal } from "react-bootstrap";
import '../../../../assets/scss/coming-soon.scss';
import InfoIcon from '../../../../assets/images/icon-info.svg'

class Solid extends React.Component {
    state = {  } 
    render() { 
        const { show, hide } = this.props;

        return (
            <>
                <Modal
                    size="sm"
                    show={show}
                    dialogClassName=""
                    onHide={() => hide('providers', 'solid')}
                >
                    <Modal.Body className="text-center coming-soon">
                        <img
                            src={InfoIcon}
                            alt="icon"
                        />
                        <h2>Coming Soon.</h2>
                        <p>This module is coming soon...</p>
                        <button onClick={() => hide('providers', 'solid')}>OK</button>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
 
export default Solid;