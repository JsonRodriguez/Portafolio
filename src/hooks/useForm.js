import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    const [userOnChange, setUserOnChange] = useState(false);
    const [emailOnChange, setEmailOnChange] = useState(false);
    const [bodyOnChange, setBodyOnChange] = useState(false);

    useEffect(() => {
        createValidators();
    }, [formState]);

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])
    

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [formValidation]);
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        if(name === 'user_name') setUserOnChange(true);
        if(name === 'user_email') setEmailOnChange(true);
        if(name === 'message') setBodyOnChange(true);

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[ formField ];

            formCheckedValues [ `${ formField }Valid` ] = fn( formState[formField] ) ? null : errorMessage
        }

        setFormValidation( formCheckedValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid,
        userOnChange,
        emailOnChange,
        bodyOnChange
    }
}