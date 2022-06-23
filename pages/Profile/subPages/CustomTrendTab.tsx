import { ScrollView } from "react-native";
import React from "react";
import LangsData from "../../../langs.json";
import { CheckBox } from "@rneui/themed";
import useStorage from "../../../utils/storage";

type LangItemType = {
  path: string;
  name: string;
  short_name?: string;
};

const CustomTrendTab = () => {
  const { getAsyncItem, setAsyncItem } = useStorage<string[]>("trending");
  const [checkedTabs, setCheckedTabs] = React.useState<string[]>([]);

  React.useEffect(() => {
    (async () => {
      const arr = await getAsyncItem();
      console.log(arr);

      setCheckedTabs(arr!);
    })();
  }, []);

  const pressCheck = async (val: string) => {
    const idx = checkedTabs.indexOf(val);
    if (idx !== -1) {
      // 已经选中的情况下，需要取消选中
      const arr = [...checkedTabs];
      arr.splice(idx, 1);
      setCheckedTabs(arr);
      await setAsyncItem(arr);
    } else {
      // 需要选中某一项
      const arr = [...new Set([...checkedTabs, val])].sort();
      setCheckedTabs(arr);
      await setAsyncItem(arr);
    }
  };

  return (
    <ScrollView>
      {LangsData.map((item: LangItemType) => (
        <CheckBox
          key={item.path}
          center
          title={item.name}
          checked={checkedTabs.indexOf(item.name) !== -1}
          onPress={() => pressCheck(item.name)}
        />
      ))}
    </ScrollView>
  );
};

export default CustomTrendTab;
