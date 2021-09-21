import React, { useState } from 'react';
import "tailwindcss/tailwind.css"
import { hoursOfWork } from '../data'
import useResource from '../hooks/useResource';

function Main(props) {
    const [location, Location] = useState("");
    const [min, Minimum] = useState("");
    const [max, Maximum] = useState("");
    const [avg, Average] = useState("");
    const [report, Report] = useState("");
    const [total, Total] = useState("")

    const { resources, loading, createResource, deleteResource } = useResource();

    function locationHandler(event) { Location(event.target.value); }

    function minimumHandler(event) { Minimum(event.target.value); }

    function maximumHandler(event) { Maximum(event.target.value); }

    function averageHandler(event) { Average(event.target.value); }

    function create(event) {
        event.preventDefault();
        const result = []
        const data = {
            ID: report.length + 1,
            location: location,
            stands: []
        }

        for (let i = 0; i < 14; i++) {

            const total = Math.floor(Math.random() * ((parseInt(max) - parseInt(min) + 1)) + parseInt(min))
            data.stands.push(total)

            for (let j = 0; j < report.length + 1; j++) {

                total += report[j] ? report[j].stands[i] : 1
            }
            result.push(total)

        }

        Report([...report, data])

        Total(result)

        props.Stores(report.length + 1)
    }

    return (
        <main className="grid w-full px-.25 text-center bg-green-100 p-11 justify-items-stretch">
            <form className="py-4 bg-green-300 rounded mx-11 px-9 w-4/5justify-self-center" onSubmit={create}>
                <fieldset>

                    <div className="flex flex-col ...">
                        <div className="p-4 text-2xl">
                            <h2 >Create Cookie Stand</h2>
                        </div>

                        <div>
                            <div className="container mx-auto w-12/12 my-1.30" >
                                <label className="mr-7.5 ..." > Location </label>
                                <input onChange={locationHandler} className="w-4/5" type="text" name="location" />
                            </div>
                        </div>

                        <div className="container mx-auto w-10/12 my-1.5" >
                            <div className="flex space-x-7 ...">
                                <div className="flex flex-col ... w-1/5 text-xs text-center bg-green-100 p-1.5 rounded-lg">
                                    <label > Minimum Customers per Hour </label>
                                    <input onChange={minimumHandler} type="number" name="min" />
                                </div>

                                <div className="flex flex-col ... w-1/5 text-xs text-center bg-green-100 p-1.5 rounded-lg">
                                    <label > Maximum Customers per Hour </label>
                                    <input onChange={maximumHandler} type="number" name="max" />
                                </div>

                                <div className="flex flex-col ... w-1/5 text-xs text-center bg-green-100 p-1.5 rounded-lg">
                                    <label > Average stands per Sale </label>
                                    <input onChange={averageHandler} type="number" step="0.01" name="avg" />
                                </div>

                                <button className="w-1/3 bg-green-500 rounded-lg"> Create </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>

            <div className="flex flex-col ... text-center ... mb-9 ... mt-9 ... container mx-auto w-4/5">
                {(report.length == 0) ?
                    <h2> No Cookie Stands Available </h2> :
                    <table className="border border-collapse border-gray-900 rounded-lg">
                        <thead className="bg-green-500">
                            <tr key="0">
                                <th>
                                    Location
                                </th>
                                {hoursOfWork.map(hour => (<th>{hour}</th>))}
                                <th>
                                    Totals
                                </th>
                            </tr>
                        </thead>

                        <tbody className="border border-collapse border-gray-900">
                            {report.map(data => (
                                <tr className="border border-collapse border-gray-900" key={data.ID}>
                                    <td className="border border-collapse border-gray-900"> {data.location} </td>
                                    {data.stands.map(cookie => (<td className="border border-collapse border-gray-900"> {cookie} </td>))}
                                    <td className="border border-collapse border-gray-900">{data.stands.reduce((account, current) => { account = account + current; return account }, 0)}</td>
                                </tr>
                            ))}
                        </tbody>

                        <tfoot className="bg-green-500 border border-collapse border-gray-900">
                            <tr className="border border-collapse border-gray-900" key={report.length + 1}>
                                <th className="border border-collapse border-gray-900"> Totals </th>
                                {total.map(total => (<th className="border border-collapse border-gray-900"> {total} </th>))}
                                <th className="border border-collapse border-gray-900"> {total.reduce((account, current) => { account = account + current; return account }, 0)} </th>
                            </tr>
                        </tfoot>
                    </table>
                }
            </div>
        </main>
    )
}

export default Main;