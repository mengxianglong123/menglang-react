import React from 'react'
import Table from './children/Table'
import Header from './children/Header'
import Form from './children/Form'

export default function Poem() {
    return (
        <div>
            <Header/>
            <Table/>
            <Form/>
        </div>
    )
}
