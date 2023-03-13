import {templateCustomDataCall, templateDataCall} from './template';
// types: can be moved to other file if needed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiData = Record<string, any>;

export const tryCatch = async (apiRequest: ApiData | void) => {
    try {
        const request = await apiRequest;

        return request;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};

// Getting data methodes
export const getApiTemplateData = (): Promise<ApiData | void> => {
    const apiData: ApiData = tryCatch(templateDataCall());

    return apiData.data;
};

export const getApiTemplateDataCustomUrl = (url: string): Promise<ApiData | void> => {
    const apiData: ApiData = tryCatch(templateCustomDataCall(url));

    return apiData.data;
};
