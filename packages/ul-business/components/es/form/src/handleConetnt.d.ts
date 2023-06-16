import { IFormat, IFormItem } from "./type";
declare const handleContent: (content: IFormItem[]) => {
    formatObj: Record<string, IFormat>;
    defaulValue: Record<string, any>;
};
export default handleContent;
