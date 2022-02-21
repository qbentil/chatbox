import CallListItem from '../components/callListItem';
import CallsData from '../data/CallsData';
import {FlatList} from 'react-native';

const CallLog = () => {
    const SortedCallsData = CallsData.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
    return (

        <FlatList 
            scrollEnabled = {false}
            data={SortedCallsData}
            style={{width: "100%"}}
            keyExtractor = {(item) => item.id}
            renderItem = {({item}) => (
                <CallListItem call={item} />
            )}
            
        />

    );

}

export default CallLog;