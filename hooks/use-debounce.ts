import { useEffect, useState } from "react";

// GOAL: delay user search, only execute when user stop typing at least ...second
export function useDebounce<T>(value: T, delay?:number): T{
    const [debounceValue, setDebounceValue] = useState<T>(value)

    useEffect(()=> {
        const timer = setTimeout(()=> {
            setDebounceValue(value)
        }, delay || 500);

        return ()=> {
            clearTimeout(timer)
        }
    }, [value, delay]); 

    return debounceValue
}