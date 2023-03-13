import {templateCustomDataCall, templateDataCall} from './template';
// types: can be moved to other file if needed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiData = Promise<Record<string, any> | void>;

export const tryCatch = (apiRequest: ApiData) => {
    try {
        const request = apiRequest;

        return request;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};

// Getting data methodes

// Get from fixed api
export const getApiTemplateData = async (): ApiData => {
    const apiData = await tryCatch(templateDataCall());
    if (!apiData) return;

    return apiData.data;
};
// Get from set api
export const getApiTemplateDataCustomUrl = async (url: string): ApiData => {
    const apiData = await tryCatch(templateCustomDataCall(url));
    if (!apiData) return;

    return apiData.data;
};
