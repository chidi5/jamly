import React from 'react'

function HomePage({subDomain}) {
    const users = [
        {
            username: 'josh',
            age: 24,
            hobbies: ["Football, Coding"],
        },
        {
            username: 'sammy',
            age: 24,
            hobbies: ["Eating, Coding"],
        },
    ];
    const requestedUser = users.find((user) => user.username === subDomain);

    return (
        <div>
            <div>
                {requestedUser ? (
                    <div>
                        <h1 className='text-2xl font-bold'>Username</h1>
                        <h3 className='text-xl font-medium'>{requestedUser.username}</h3>
                        <h1 className='text-2xl font-bold'>Age</h1>
                        <h3 className='text-xl font-medium'>{requestedUser.age}</h3>
                        <h1 className='text-2xl font-bold'>Hobbies</h1>
                        <ul>
                            {requestedUser.hobbies.map((hobby) => 
                                <li key={hobby}>{hobby}</li>
                            )}
                        </ul>
                    </div>
                ): (
                    <h1 className='text-2xl font-bold'>Not Found</h1>
                )}
            </div>
        </div>
    )
}

export default HomePage
