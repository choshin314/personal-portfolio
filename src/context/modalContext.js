import React, {useState} from 'react'

export const ModalContext = React.createContext();

export const ModalContextProvider = (props) => {
    const [currentProject, setCurrentProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={{currentProject, setCurrentProject, modalOpen, setModalOpen}}>
            {props.children}
        </ModalContext.Provider>
    )
}