import {templateDataCall} from './template';

const getApiTemplateData = async (): Promise<any> => {
    const {data} = await templateDataCall();

    return data;
};

//
export const getTemplateData = await getApiTemplateData();
