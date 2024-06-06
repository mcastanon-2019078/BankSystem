import React from 'react'

export const TableClient = ({name, username, DPI, adress, phone, email, work, salary, role}) => {
    return (
        <>
        <td>{name}</td>
        <td>{username}</td>
        <td>{DPI}</td>
        <td>{adress}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{work}</td>
        <td>{salary}</td>
        <td>{role}</td>
        </>
    )
}
