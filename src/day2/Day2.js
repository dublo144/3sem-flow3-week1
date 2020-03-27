import React from 'react';
import ListDemoApp from './listsAndKeys/ListDemoApp';
import { Divider } from 'semantic-ui-react';
import Timer from './stateAndEvents/Timer';
import { Count } from './stateAndEvents/Count';
import Jokes from './stateAndEvents/jokes/Jokes';

const Day2 = () => {
    return (
        <>
            <a
                target="_blank"
                href="https://docs.google.com/document/d/1VlfZly4e6ZnCWJrv1LYhSDQMnBZn3NsyH7VQNLxCOME/edit"
            >
                Lists and Keys
            </a>
            <br />
            <a
                target="_blank"
                href="https://docs.google.com/document/d/1rE6hdpT_NPC_Hbxlo0nRYJwde_fQDGOiSjauKGYWcdU/edit"
            >
                State med useState og useEffect
            </a>
            <ListDemoApp />
            <Divider />
            <Count />
            <Divider />
            <Timer />
            <Divider />
            <Jokes />
        </>
    );
};

export default Day2;
