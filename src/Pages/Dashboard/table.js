import React, { useState } from "react";
import Popup  from "./popup";

let Table = ({ users, deleteHandler }) => {
const [seen, setSeen] = useState(false);
const [userId, setUserId] = useState(0);

    let togglePopUp = () => setSeen(!seen);

    return (
        <div>
            {seen ? <Popup id={userId} visibleHandler={togglePopUp} deleteHandler={deleteHandler} /> : null}
            <div className="text-gray-900 bg-gray-200 p-20">
                <div className="p-4 flex">
                    <h1 className="text-3xl">
                        Users
        </h1>
                </div>
                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <tbody>
                            <tr className="border-b">
                                <th className="text-left p-3 px-5">Name</th>
                                <th className="text-left p-3 px-5">Surname</th>
                                <th className="text-left p-3 px-5">Email</th>
                                <th></th>
                            </tr>
                            {users.map((user) => {
                                return (
                                    <tr key={user.id} className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td className="p-3 px-5"><p>
                                            <input type="text" readOnly defaultValue={user.firstname} className="bg-transparent" /></p>
                                            <div className="text-gray-500 text-sm font-semibold tracking-wide">
                                            <p>Best score:</p>
                                            <p>
                                            {user.points}pts in {user.gameDurationInSeconds} 
                                            </p>
                                        </div>
                                        </td>
                                        <td className="p-3 px-5">
                                        <input type="text" readOnly defaultValue={user.surname} className="bg-transparent" />
                                        </td>
                                        <td className="p-3 px-5"><input type="text" readOnly defaultValue={user.email} className="bg-transparent" /></td>
                                        <td className="p-3 px-5 flex justify-end">
                                            <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Scores</button>
                                            <button type="button" 
                                                onClick={() => {setSeen(!seen); setUserId(user.id)}}
                                                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Table;