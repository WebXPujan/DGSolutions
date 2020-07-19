import { useMemo, useState } from 'react'

/**
 * Debounce a function by time
 * @param {Function} func
 * @param {Number} delay
 */

const useDebounce = (func, delay) => {
    const [id, setId] = useState(null)

    return useMemo(
        (...args) => {
            if (id) {
                clearTimeout(id)
            } else {
                setId(
                    setTimeout(() => {
                        setId(null)
                        func(...args)
                    }, delay)
                )
            }
        },
        [func]
    )
}

export default useDebounce;