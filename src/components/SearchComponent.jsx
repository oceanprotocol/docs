import React, {useState, useEffect} from "react"
import * as JsSearch from "js-search"
import {Link} from "gatsby"

const SearchComponent = ({pageContext}) => {

    const {searchData} = pageContext
    console.log("searchData", searchData)
    const state = useState({isLoading: false, isError: false, searchQuery: ''})
    const searchableData = searchData.map(({node}) => {
        return {title: node.frontmatter.title, description: node.frontmatter.description, slug: node.fields.slug}
    })
    return (
        <>Search feature
            <ClientSearch searchableData={searchableData}/>
        </>
    )
}

const ClientSearch = ({searchableData}) => {
    const [searchState, setSearchState] = useState({
        isLoading: true,
        searchResults: [],
        search: null,
        isError: false,
        termFrequency: true,
        removeStopWords: false,
        searchQuery: "",
        selectedStrategy: "",
        selectedSanitizer: ""
    })

    useEffect(() => {
        rebuildIndex(searchableData)
    }, []);

    const rebuildIndex = (searchableData) => {
        const {removeStopWords, selectedStrategy, selectedSanitizer, termFrequency} = searchState
        const dataToSearch = new JsSearch.Search("title")
        dataToSearch.addIndex('title')

        dataToSearch.addDocuments(searchableData)
        setSearchState({
            ...searchState,
            isLoading: false,
            search: dataToSearch
        })
    }

    const searchData = e => {
        const {search} = searchState
        const queryResult = search.search(e.target.value)
        setSearchState({
            ...searchState,
            searchQuery: e.target.value,
            searchResults: queryResult
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div style={
                {margin: "0 auto"}
            }>
                <form onSubmit={handleSubmit}>
                    <input id="Search"
                        value={
                            searchState.searchQuery
                        }
                        onChange={searchData}
                        placeholder="Enter your search here"
                        style={
                            {
                                margin: "0 auto",
                                width: "400px"
                            }
                        }/>
                </form>
            </div>

            <br/>

            <div><ResultList searchResults={
                    searchState.searchResults
                }/></div>

        </div>
    )
}


const ResultList = ({searchResults}) => {
        return (<div>
            <div>
                Total results found: {
                searchResults.length
            } </div>
            <ul> {
                searchResults.map((element) =>< li > <ResultElement title={
                        element.title
                    }
                    slug={
                        element.slug
                    }/></li>
                )
            } </ul>
        </div>
    )
}

const ResultElement = ({title, slug}) => {
    return (
        <>
            <Link to={slug}>
                {title} </Link>
        </>
    )
}

export default SearchComponent
