import { CreatePublicationDto } from '../publication/dto/create-publication.dto';

export const PUBLICATION_SEED: CreatePublicationDto[] = [
    {
        "title": "Ecuador ganador",
        "desc": "Ecuador se impone en un 2 contra 0 ante Catar",
        "publicationType": "carousel",
        "tags": [
          "catar",
          "ecuador"
        ],
        "createdAt": new Date(),
        "images": [
          {
            "title": "Ecuador ganador",
            "image": "https://www.elcolombiano.com/binrepository/855x565/53c1/780d565/none/11101/QCFD/ecuador-vs-qatar_41095338_20221120123352.jpg"
          },
          {
            "title": "Ecuador ganador",
            "image": "https://cnnespanol.cnn.com/wp-content/uploads/2022/11/15399ec7-2685-4bb6-9819-45dccb890bd6.jpg?quality=100&strip=info"
          }
        ]
    },
    {
        "title": "Mundial de Catar",
        "desc": "Empezo, el mundial de Catar ya esta en marcha",
        "publicationType": "normal",
        "tags": [
          "mundial",
          "catar",
          "futbol"
        ],
        "createdAt": new Date(),
        "images": [
          {
            "title": "",
            "image": "https://ca-times.brightspotcdn.com/dims4/default/d88a8f4/2147483647/strip/true/crop/8276x5517+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7e%2Fc7%2Fc498f71f4cb78d09e0846c8318a4%2Fsoccer-wcup-qatar-tickets-48888.jpg"
          }
        ],
    }
];