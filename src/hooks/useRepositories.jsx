import React from 'react'


const useRepositories = () => {
    const [repositories, setRepositories] = React.useState(null);

    const fetchRepositories = async () => {
        
        try {
            const response = await globalThis.fetch('http://192.168.0.234:5000/api/repositories')
            const json2 = await response.json()
            setRepositories (json2)

        } catch (error) {
            console.log(error)
        }

    }

    React.useEffect(()=>{
        fetchRepositories()
    }, [])

    const repositoriesNodes = repositories 
        ? repositories.edges.map((edge) => edge.node)
        : []

  return {repositories: repositoriesNodes}
}

export default useRepositories