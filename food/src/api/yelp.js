// import axios from "axios";
import axios from 'axios';
import { useEffect, useState } from 'react';

// export default axios.create({
//     baseURL: 'https://api.yelp.com/v3/businesses',
//     headers: {
//         Authorization: 'Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx'
// }

// });
const baseUrl = 'https://serpapi.com';


// const fetchSearchResults = async ( query ) => {
//     console.log(query);

//     try {
//         const response = await axios.get(`${baseUrl}/search`, {
//             params: {
//                 api_key: '950105fb91afb0a41dffa2ffb9a19208d518269457aaf5cf02448beba4b15f5c',
//                 engine: 'google',
//                 q: query,
//                 limit: 1,
//                 google_domain: 'google.com',
//                 gl: 'us',
//                 hl: 'en',
//                 location: 'Austin, Texas, United States'
//             }
//         });

        
//         return response;

//     } catch (error) {
//         return 1;
//         console.log(error);
//     }

// }


// export default fetchSearchResults;


export default () => {
    const [results, setResults] = useState([]);
  const [errorMssage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchSearchResults('coffee');

  }, [])

    const fetchSearchResults = async ( query ) => {
        console.log(query);
    

        try {
            const response = await axios.get(`${baseUrl}/search`, {
                params: {
                    api_key: '950105fb91afb0a41dffa2ffb9a19208d518269457aaf5cf02448beba4b15f5c',
                    engine: 'google',
                    q: query,
                    limit: 1,
                    google_domain: 'google.com',
                    gl: 'us',
                    hl: 'en',
                    location: 'Austin, Texas, United States',
                    // tbm: "isch"
                    tbm: "lcl"
                }
            });

            // console.log(response.data);
            setResults(response.data);
            // console.log(results);
            
            // if (response.data.related_searches[0] && response.data.related_searches[0].block_position ) {
            //     const position = response.data.related_searches[0].block_position;
            //     console.log(position);
            //     setResults(response.data.local_results);
            //     // Now you can use the 'position' variable as needed
            // } else {
            //     console.log("No local results found");
            // }
    
            
            // return response.data;
    
        } catch (error) {
            // return 1;
            setErrorMessage('Something went wrong!')
            console.log(error);
        }
    
    }
    // console.log(results);


    return [fetchSearchResults, errorMssage, results]

}

