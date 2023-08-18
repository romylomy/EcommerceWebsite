export type ProductType = {
    id: string,
    name: string,
    description: string,
    image: string,
    quantity?: number | 1, 
    unit_amount: number | null,
    metadat : MetadataType
}

type MetadataType = {
    features: string 
}