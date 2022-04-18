const baseUrl = process.env.REACT_APP_API_URL;

export const fetchEndPoint = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
   console.log(endpoint, data, method);
    if(method === 'GET') {
        return fetch(url);

    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    };
};