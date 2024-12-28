export const baseUrl = 'https://appserver-6b0e.onrender.com'
export const LoginU = async (phone) => {
    const url = "/login ";
    return await fetchApi(url,"POST",phone)

}
export const fetchApi = async (route, method, body) => {
    console.log("body is", body);
    
    const url = baseUrl + route;
    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'content-Tybe': 'application/json',
        },
        body: body
    }).then(res => res.json())
        .catch((error) => {
            console.error("fetch Error", error?.message);
        });

}



