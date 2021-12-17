import React from "react"
import "./details.css"

export default function Details({ details }) {
  return (
    <div>
      <table className="details-table">
        {details.map(detail => (
          <tr>
            <td>{detail.label}: </td>
            <td>{detail.value}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
