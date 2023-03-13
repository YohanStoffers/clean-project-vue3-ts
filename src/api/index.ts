import {templateCustomDataCall, templateDataCall} from './template';
// types: can be moved to other file if needed
interface TemplateData {
    body?: string;
    id?: number;
    title?: string;
    userId?: number;
}

// Getting data methodes
export const getApiTemplateData = async (): Promise<TemplateData> => {
    const {data} = await templateDataCall();

    return data;
};

export const getApiTemplateDataCustomUrlAndKey = async (url: string, key: string): Promise<TemplateData> => {
    const {data} = await templateCustomDataCall(url);

    return data[key];
};
