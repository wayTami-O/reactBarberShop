export default interface Services {
    "id": number,
    "title":string,
    "price_max":number,
    "duration": number,
    "image_group": {
        "images": {
            "basic":{
                "path": string
            }
        }
    },
    "comment": string
}