type Params = {
    id: string 
}


type SearchParams = {
    id: Params
    name: string
    image: string
    description: string
    unit_amount: string | null
    
}

export type SearchParamTypes = {
    params: Params,
    searchParams: SearchParams
}

