import { useState, useEffect, useCallback } from "react"
import axios from 'axios';
import { useStore } from "./useStore"

export const useFetch = (url, defaultData) =>  {
    const [data, updateData] = useState(defaultData)
    const { dispatch } = useStore();
    const throwError = useCallback((e) => dispatch({ type: "throwError", data: e }), [dispatch]);

    useEffect(async () => {
      try {
         if (!url) {
            updateData(defaultData)
            return
        }
        const resp = await axios(url)
        updateData(resp)

      } catch (error) {
        throwError(error)
      }
   }, [url])

    return data
}
