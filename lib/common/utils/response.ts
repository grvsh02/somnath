const validResponseCodes = [200, 201]

export const isResponseValid = (response: any) => {
    return (
        !!response &&
        !!response.status && validResponseCodes.includes(response.status) &&
        !!response.data && !!response.data.status && validResponseCodes.includes(response.data.status)
        && !!response.data.data);
};
