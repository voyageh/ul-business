import { IFormItem } from "./type";

const handleContent = (content: IFormItem[]) => {
  // 默认值
  const defaulValue: Record<string, any> = {};

  const getFormatAndDefault = (list: IFormItem[]) => {
    list.forEach((item) => {
      if (item.items && item.items.length > 0) {
        getFormatAndDefault(item.items);
      }

      if (item.id) {
        item.default && (defaulValue[item.id] = item.default);
      }
    });
  };

  getFormatAndDefault(content);

  return defaulValue;
};

export default handleContent;
