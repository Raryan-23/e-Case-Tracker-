import React from 'react'

export default function () {
    return (
        <>
            <div className="bg-blue-800 border h-[300px] border-black p-4">
                <h2 className="text-6xl font-bold text-center text-green-500">India's Current Stats of Cases</h2><br />
                <p className="text-xl text-center text-white"></p>
                <div className="flex min-w-full justify-around text-white text-3xl mt-10 text-center">
                    <div className="font-bold ">
                        22M+ <br />Active Cases
                    </div>

                    <div className="font-bold">
                        10M+ <br />Recent Cases
                    </div>
                    <div className="font-bold">
                        50M+ <br />Pending Cases
                    </div>
                </div>
            </div>
        </>
    )
}
