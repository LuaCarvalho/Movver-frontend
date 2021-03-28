
/* https://api.tomtom.com/search/2/search/
    * {consulta}
    * .json?
    * limit=5&
    * lat=37.337&
    * lon=-121.89&
    * language=pt-br&
    * entityTypeSet=&
    * key=*****
    */

interface Address {
  municipalitySubdivision?: string,
  streetName?: string,
  municipality?: string,
  countrySubdivision?: string,
  postalCode?: string,
  extendedPostalCode?: string,
  countryCode?: string,
  country?: string,
  countryCodeISO3?: string,
  freeformAddress?: string,
  localName?: string
}
export interface Result {
  type: string,
  id: string,
  score: number,
  dist: number,
  info: string,
  address: Address,
  poi?: {
    name: string,
    categorySet: [
      {
        id: number
      }
    ],
    categories: string[],
    classifications: [
      {
        code: string,
        names: [
          {
            nameLocale: string,
            name: string
          }
        ]
      }
    ]
  },
  position: {
    lat: number,
    lon: number
  },
  viewport: {
    topLeftPoint: {
      lat: number,
      lon: number
    },
    btmRightPoint: {
      lat: number,
      lon: number
    }
  },
  entryPoints: [
    {
      type: string,
      position: {
        lat: number,
        lon: number
      }
    }
  ]
}

export default interface TomTomSearch {
  summary: {
    query: string,
    queryType: string,
    queryTime: number,
    numResults: number,
    offset: number,
    totalResults: number,
    fuzzyLevel: number,
    geoBias: {
      lat: number,
      lon: number
    }
  },
  results: Result[]
}

const test: TomTomSearch = {
  "summary": {
    "query": "prefeitura de goiânia",
    "queryType": "NON_NEAR",
    "queryTime": 13,
    "numResults": 1,
    "offset": 0,
    "totalResults": 9,
    "fuzzyLevel": 1,
    "geoBias": {
      "lat": 37.337,
      "lon": -121.89
    }
  },
  "results": [
    {
      "type": "POI",
      "id": "g6JpZK8wNzYwMDkwMjgyODA3MDihY6NCUkGhdqdVbmlmaWVk",
      "score": 6.5495066643,
      "dist": 9668662.2761563,
      "info": "search:ta:076009028280708-BR",
      "poi": {
        "name": "Prefeitura de Goiânia",
        "categorySet": [
          {
            "id": 7367
          }
        ],
        "categories": [
          "government office"
        ],
        "classifications": [
          {
            "code": "GOVERNMENT_OFFICE",
            "names": [
              {
                "nameLocale": "en-US",
                "name": "government office"
              }
            ]
          }
        ]
      },
      "address": {
        "municipalitySubdivision": "Setor Sul",
        "municipality": "Goiânia",
        "countrySubdivision": "Goiás",
        "postalCode": "74083",
        "countryCode": "BR",
        "country": "Brasil",
        "countryCodeISO3": "BRA",
        "freeformAddress": "74083, Goiânia",
        "localName": "Goiânia"
      },
      "position": {
        "lat": -16.68,
        "lon": -49.25
      },
      "viewport": {
        "topLeftPoint": {
          "lat": -16.6791,
          "lon": -49.25094
        },
        "btmRightPoint": {
          "lat": -16.6809,
          "lon": -49.24906
        }
      },
      "entryPoints": [
        {
          "type": "main",
          "position": {
            "lat": -16.67999,
            "lon": -49.24998
          }
        }
      ]
    }
  ]
}