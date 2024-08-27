export default interface Services {
    "id": number,
    "title":string,
    "price_max":number,
    "duration": number,
    "image_group": {
        "images":images
    },
    "comment": string
}

interface images {
    basic: basic
}

interface basic {
    path: string
}