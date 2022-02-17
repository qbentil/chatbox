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

}