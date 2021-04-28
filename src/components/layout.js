import * as React from 'react'
import '../scss/main.scss'
export default function Layout({children}) {
    return (
        <div className='page_wrapper'>{children}</div>
    )
}