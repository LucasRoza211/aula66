import useGitHubUsers from "./UseGitHubUsers";

export default function FetchGitHubUsers(){
    const {setQuery, results} = useGitHubUsers()

    return (
        <div>
            <input type="text" onChange={
                event => setQuery(event.target.value)
            } />
            <div style={{border: '1px solid black' }}>
                {
                    results && results.map(
                        (item, index) => <div key={index}>{item.login}</div>
                    )
                }
            </div>
        </div>
    )
}