import React from 'react';
import FormDemo from './formsWithReact/FormDemo';
import { Divider } from 'semantic-ui-react';
import ReservationForm from './formsWithReact/FormDemoMultiple';
import ProofOfConcept from './liftingState/proofOfConcept/App';
import LiftingState2 from './liftingState/liftingState2/App';

const Day3 = () => {
    return (
        <>
            <a
                target="_blank"
                href="https://docs.google.com/document/d/1rEaU8ObqoxHF3vt_fIsTfEb3yLRnVF8fCWobJJ9c2wo/edit"
            >
                Forms with React
            </a>
            <br />
            <a
                target="_blank"
                href="https://docs.google.com/document/d/1NTzbbMP2gWJoE2lDhD8tqGYNzQB1qSRqxb4PAtajWpI/edit"
            >
                Lifting State
            </a>
            <br />
            <a
                target="_blank"
                href="https://docs.google.com/document/d/1R7o42j_CJesnrCcNNRmIARK14ocDvMqodWDzzw6lDzg/edit"
            >
                Api Interaction with fetch
            </a>
            <Divider />
            <FormDemo />
            <ReservationForm />
            <Divider />
            <ProofOfConcept />
            <Divider />
            <LiftingState2 />
            <Divider />
            <h2>Rest-Crud Exercise</h2>
            <a target="_blank" href="https://crud-rest-exercise.surge.sh">
                Link to surge
            </a>
        </>
    );
};

export default Day3;
