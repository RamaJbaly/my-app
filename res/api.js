const baseUrl = 'https://appserver-6b0e.onrender.com'


export const LoginU = async (body) => {
    console.log("body is", body);

    const url = "/log-in";
    return fetchApi(url, "POST", body)
}
export const createUser = async (body) => {
    const url = "/createUser"
    return await fetchApi(url, 'POST', body);
};
export const FindUser = async (body) => {
    const url = "/FindUser"
    return fetchApi(url, 'POST', body);

}
export const DeletUser = async (body) => {
    const url = "/createUser"
    return await fetchApi(url, 'POST', body);


};

const fetchApi = async (route, method, body) => {
    const url = baseUrl + route;
    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(res => {
        const x = res.json()
        return x
    })
        .catch((error) => {
            console.error("fetch Error", error?.message);
        });
}