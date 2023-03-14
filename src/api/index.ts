import {templateCustomDataCall, templateDataCall} from './template';
// types: can be moved to other file if needed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiData = Record<string, any>;

// catch any api errors
export const tryCatch = async <T>(apiRequest: Promise<T>): Promise<T | undefined> => {
    try {
        const request = await apiRequest;

        return request;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};

// Getting data methodes

// Get from fixed api
export const getApiTemplateData = (): Promise<ApiData | undefined> => tryCatch(templateDataCall());

// Get from set api
export const getApiTemplateDataCustomUrl = (url: string): Promise<ApiData | undefined> =>
    tryCatch(templateCustomDataCall(url));
