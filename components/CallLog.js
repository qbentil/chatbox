import CallListItem from '../components/callListItem';
import CallsData from '../data/CallsData';
import {FlatList} from 'react-native';

const CallLog = () => {

    return (

        <FlatList 
            scrollEnabled = {false}
            data={CallsData}
            style={{width: "100%"}}
            keyExtractor = {(item) => item.id}
            renderItem = {({item}) => (
                <CallListItem call={item} />
            )}
            
        />

    );

}

export default CallLog;