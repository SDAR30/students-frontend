import React from 'react';
import './EmptyView.scss'

const styles = {
    "center": {
        "display": "table",
        "margin": "200px auto 0px"
    }
}

function EmptyView(props) {
    const {text = "NO results", center} = props;

    return (
        <div style={center && styles.center} className="emptyView">{text}</div>
    );
}

export default EmptyView;