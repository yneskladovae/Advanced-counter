import React from 'react';

type SuperButtonType = {
    callBack: () => void
    children: React.ReactNode
    disabled?: boolean
}

export const SuperButton: React.FC<SuperButtonType> = ({callBack, disabled, children}) => {
    const onClickHandler = () => {
        callBack();
    }
    return (
        <div>
            <button disabled={disabled} onClick={onClickHandler}>{children}</button>
        </div>
    );
};