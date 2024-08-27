export default interface ServiceZus {
    arrayServices: Array<ServicesInfo>,
    setArrayServices: (newServices: ServicesInfo[]) => void
}

export interface ServicesInfo {
    nameHaircut: string,
    id: string,
    price: string
}