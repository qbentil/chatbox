// import { ColorSchemeName } from 'react-native';

import Colors from './Colors';
import useColorScheme from '../hooks/useColorScheme';

// const colorScheme = useColorScheme();
export default {
    headerTitle: {
        color: Colors.light.tint,
        // fontWeight: 'bold', 
        fontSize: 17
    },
    headerIconsContainer: {
        flexDirection: 'row', 
        width: 56, 
        justifyContent: 'space-between', 
        marginRight: 10
    },
    // searchbar
    searchBar: {
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginVertical: 10,
            // opacity: 0.3,
            padding: 5,
            paddingHorizontal: 10,
            // backgroundColor: "#2C3333" //To Managed by Parent Component
        },
        input: {
            flex: 1,
            paddingVertical: 8,
            paddingLeft: 10,
            color: Colors.dark.text,
            fontSize: 17,
            fontWeight: '400',
        },
        
    }
}