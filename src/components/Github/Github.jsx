import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    return (
        <>
            <div className='text-center m-3 bg-gray-800 text-white p-4 text-3xl flex items-start gap-10 rounded-[30px]'>

                <img className='rounded-[30px] ml-1' src={data.avatar_url} alt="Git Picture" width={300} />
                <div className='leading-12 font-bold text-left mt-2'>
                    <h1>Name: {data.name}</h1>
                    <h1>Repos: {data.public_repos}</h1>
                    <h1>Followers: {data.followers}</h1>
                    <h1>Bio: {data.bio}</h1>
                </div>
            </div>
        </>
    )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Harish-yadav-07')
    return response.json();
}