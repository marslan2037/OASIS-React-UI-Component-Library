import React from 'react';
import { Modal } from "react-bootstrap";
import '../../../../assets/scss/coming-soon.scss';
import InfoIcon from '../../../../assets/images/icon-info.svg'

class PlotRouteOnMap extends React.Component {
    state = {  } 
    render() { 
        const { show, hide } = this.props;

        return (
            <>
                <Modal
                    size="sm"
                    show={show}
                    dialogClassName=""
                    onHide={() => hide('map', 'plotRouteOnMap')}
                >
                    <Modal.Body className="text-center coming-soon">
                        <img
                            src={InfoIcon}
                            alt="icon"
                        />
                        <h2>Coming Soon</h2>
                        <p>This module is coming soon...</p>
                        <button onClick={() => hide('map', 'plotRouteOnMap')}>OK</button>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
 
export default PlotRouteOnMap;