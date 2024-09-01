export default interface Notes {
    client: {
        phone: string
    }, 
    deleted: boolean,
    date: string,
    services: [{
        title: string
    }],
    staff: {
        avatar: string,
        name: string,
        specialization: string
    }
}