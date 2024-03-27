'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <h2>{error?.message}</h2>
            <button className=" text-blue-500 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 border-blue-500 hover:border-blue-500 p-2 rounded-md"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                >
            
                Try again
            </button>
        </div>
    )
}