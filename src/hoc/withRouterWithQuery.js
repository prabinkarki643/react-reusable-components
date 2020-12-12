
import React from 'react'
import { useRouterWithQuery } from '../hooks'

export default function withRouterWithQuery(WrappedComponent) {
    return (props)=> {
        const routesWithQuery = useRouterWithQuery()
        return (
            <WrappedComponent {...props} routes={routesWithQuery}/>
        )
    }
    
}
