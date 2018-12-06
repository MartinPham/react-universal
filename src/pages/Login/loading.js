import React from 'react';

import { ItemBanner } from "./styles";
import pho from 'images/pho.jpg';

export default (props) => {
    return (
        <div>
            <ItemBanner
                image={pho}
            />
        </div>
    );
}