import React from 'react'
import Layout from '../components/layout'

export default function blog() {
    const style = {
        fontSize: '3rem',
        padding: '20px'
    }
    return (
        
        <Layout title={"Blog"}>
        <div style={style}>
            This is blog
        </div>
        </Layout>
    )
}
