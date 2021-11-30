import React from 'react';
import ReactLoading, { LoadingProps} from 'react-loading';


const Loading: React.FC<LoadingProps> = (props) => {
    return (
        <div className="loading">
            <ReactLoading {...props} />
        </div>
    )
}

export default Loading;