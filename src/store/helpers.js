import axios from 'axios';

// export const useFetch = (url, defaultData) =>  {
//     console.trace("Use Fetch:", url, defaultData)
//     const [data, updateData] = useState(defaultData)
//     const { dispatch } = useStore();
//     const throwError = useCallback((e) => dispatch({ type: "throwError", data: e }), [dispatch]);

//     useEffect(async () => {
//       try {
//          if (!url) {
//             updateData(defaultData)
//             return
//         }
//         const resp = await axios(url)
//         updateData(resp)

//       } catch (error) {
//         throwError(error)
//       }
//    }, [url])

//     return data
// }
const AUTH_API = 'http://localhost:8000/admin';

export const authenticate = body => axios.post(AUTH_API, body)
