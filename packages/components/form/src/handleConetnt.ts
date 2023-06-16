import { IFormat, IFormItem } from "./type";

const handleContent = (content: IFormItem[]) => {
  // 存储输入输出函数
  const formatObj: Record<string, IFormat> = {};
  // 存入默认值
  const defaulValue: Record<string, any> = {};

  // 处理content
  const getFormatAndDefault = (list: IFormItem[]) => {
    list.forEach((item) => {
      if (item.items && item.items.length > 0) {
        getFormatAndDefault(item.items);
      }

      // 如果有输出值格式化的转存一下
      if (item.id) {
        if (item.inputFormat) {
          !formatObj[item.id] && (formatObj[item.id] = {});
          formatObj[item.id].inputFormat = item.inputFormat;
        }

        if (item.outputFormat) {
          !formatObj[item.id] && (formatObj[item.id] = {});
          formatObj[item.id].outputFormat = item.outputFormat;
        }

        item.default && (defaulValue[item.id] = item.default);
      }
    });
  };

  getFormatAndDefault(content);
  return {
    formatObj,
    defaulValue,
  };
};

export default handleContent;
