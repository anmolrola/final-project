import {gql, useQuery} from '@apollo/client';
import {useState, useEffect} from 'react';

const getData = gql`
{
    GET_DATA{
        name
        message
    }
}
`;

export const sendMessage = gql`
mutation SEND_MESSAGE(
    $name: String!
    $email: String!
    $message: String!
){
    SEND_MESSAGE(name: $name, email: $email, message: $message){
        name
    }
}
`;

const QueryGetData = () => {

    const {loading, error, data} = useQuery(getData);
    const [displayText, setDisplayText] = useState(["Default Heading", "Default Text"])

    useEffect(()=>{
        if(loading){
           setDisplayText(["Loading!!", "Loading!!"]);
        } 
        else if (error){
            setDisplayText(["There is some error :/", "There is some error :/"]);
        } 
        else {
            const last = data.GET_DATA.length-1;
            setDisplayText([data.GET_DATA[last].name, data.GET_DATA[last].message])
            
        }
    }, [loading, error, data]);

    return displayText;
}

export default QueryGetData;
