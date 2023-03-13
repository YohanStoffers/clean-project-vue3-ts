import {templateCustomDataCall, templateDataCall} from './template';
// types: can be moved to other file if needed
interface TemplateData {
    body?: string;
    id?: number;
    title?: string;
    userId?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tryCatch = async (request: any | void) => {
    try {
        await request;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};

// Getting data methodes
export const getApiTemplateData = (): Promise<TemplateData | void> => {
    const apiData = tryCatch(templateDataCall());
    if (!apiData) return;

    return apiData.data;
};

export const getApiTemplateDataCustomUrlAndKey = async (url: string, key: string): Promise<TemplateData> => {
    const {data} = await templateCustomDataCall(url);

    return data[key];
};
