import InfoJson from "./info.json";

import petPostMethod from './petPostMethod.json'
import petPutMethod from './petPutMethod.json'
import petGetMethod from './petGetMethod.json'
import petDeletMethod from './petDeleteMethod.json'

import componentJson from "./component.json";

function Swagger() {
    return {
        ...InfoJson,
        paths: {
            "/pet": {
                ...petPostMethod,
                ...petPutMethod,
                ...petGetMethod,
                ...petDeletMethod
            }
        },
        components: {
            ...componentJson
        }
    }
}

export default Swagger;