import React from 'react';
import ReactJson from 'react-json-view';

const data = {
    status: 'PENDING . . .'
};

const jsonTheme = {
    base00: "#2b5239",
    base01: "#9ccc9c",
    base02: "#9ccc9c",
    base03: "#9ccc9c",
    base04: "#9ccc9c",
    base05: "#9ccc9c",
    base06: "#9ccc9c",
    base07: "#9ccc9c",
    base08: "#9ccc9c",
    base09: "#9ccc9c",
    base0A: "#9ccc9c",
    base0B: "#9ccc9c",
    base0C: "#9ccc9c",
    base0D: "#9ccc9c",
    base0E: "#9ccc9c",
    base0F: "#9ccc9c"
}

const customStyle = {
    // fontSize: '20px',
    // fontStyle: 'bolder'
}

function JSONView(){
    return(
        <div className='json-view' >
            <ReactJson src={data} theme={jsonTheme} iconStyle='triangle' indentWidth={10}
            enableClipboard={false} displayDataTypes={false} displayObjectSize={false}
            style={customStyle} />
        </div>
    );
}

export default JSONView;