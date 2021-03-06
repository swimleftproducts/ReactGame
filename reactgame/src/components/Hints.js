import React, { useState, useEffect } from 'react';
import SmallCardDisplay from './SmallCardDisplay';
import HintDetail from './HintDetail';

const Hints = (props) => {

    const { story, userPage, setUserPage } = props;


    const [detail, setDetail] = useState("");




    const placeholder = "asdfsafaaaaaaaaaaaaaaaaa aaaaa a aaaaaa aaaaaf a sdfadsf asf asdf as dfasdfasddsa asdfsafaaaaaaaaaaaaaaaaa aaaaa a aaaaaa aaaaaf a sdfadsf asf asdf as dfasdfasddsa asdfsafaaaaaaaaaaaaaaaaa aaaaa a aaaaaa aaaaaf a sdfadsf asf asdf as dfasdfasddsa asdfsafaaaaaaaaaaaaaaaaa aaaaa a aaaaaa aaaaaf a sdfadsf asf asdf as dfasdfasddsa";

    return (
        <div className="container-fluid p-4">
            <div onClick={ (e) => {
                e.stopPropagation();
                setDetail("");
            } } className="row" >

                { detail === "" ? "" : <HintDetail title={ detail } content={ placeholder } setDetail={ setDetail } detail={ detail } /> }
                <br></br>
                <br></br>

                <SmallCardDisplay detail={ detail } setDetail={ setDetail } setUserPage={ setUserPage } />

                <div className="text-center order-3">
                    <br></br>
                    <button className="btn btn-primary btn-lg " onClick={ () => { setUserPage("SelectWeapon"); } }>
                        Ready to make your selection?
                    </button>
                </div>

            </div>
        </div>


    );
};

export default Hints;

