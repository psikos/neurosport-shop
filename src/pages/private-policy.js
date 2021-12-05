import React from 'react'
import Layout from '../components/layout'
import PrivatePolicyUtil from '../components/privatePolicy/PrivatePolicy'

export default function PrivatePolicy() {
    return (
        <Layout title={"Polityka Prywatności"} description="Polityka Prywatności serwisu NEUROSPORT">
          <PrivatePolicyUtil />  
        </Layout>
    )
}
