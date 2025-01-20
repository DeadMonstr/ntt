

export const API_URL_DOC = `http://192.168.1.11:8000/`
export const API_URL = `${API_URL_DOC}api/`
export const CLASSROOM_API_URL = `http://localhost:3000/`
export const CLASSROOM_API_URL_DOC = `http://192.168.68.116:8000/`


// export const API_URL_DOC = `http://school.gennis.uz/`
// export const API_URL = `${API_URL_DOC}api/`
// export const CLASSROOM_API_URL = `https://classroom.gennis.uz/`
// export const CLASSROOM_API_URL_DOC = `https://classroom.gennis.uz/`



export const headers = () => {
    const token = sessionStorage.getItem("token")
    return {
        // "Authorization" : "JWT " + token,
        'Content-Type': 'application/json'
    }
}

export const headersImg = () => {
    const token = sessionStorage.getItem("token")
    return {
        "Authorization" : "JWT " + token
    }
}


export const branchQuery = () => {
    const branch = localStorage.getItem("selectedBranch")
    return `branch=${branch}`

}



export const useHttp = () => {
    const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method,mode: 'cors', body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            return await response?.json();

        } catch(e) {
            throw e;
        }
    }
    return {request}
}



export const ParamUrl = (params) => {
    const paramsList = Object.keys(params)

    let res = ''


    for (let i = 0; i < paramsList.length; i++) {
        if (params[paramsList[i]]) {


            res += `${paramsList[i]}=${params[paramsList[i]]}&`

        }

    }


    return res

}