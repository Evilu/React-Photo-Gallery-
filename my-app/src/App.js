import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

export default class MyUploader extends Component {
    render() {
        return (
            <ImagesUploader
                url="http://localhost:9090/multiple"
                optimisticPreviews
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err,"No server find, please check server connection");
                    }
                }}
                label="Hi Ori, to upload select multiple pictures from your computer"
            />
        );
    }
}