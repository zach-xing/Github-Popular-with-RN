import { View, ScrollView } from "react-native";
import React from "react";
import { CheckBox } from "@rneui/themed";
import useStorage from "../../../utils/storage";

const hotTabs = ["All", "React", "React Native", "IOS", "Vue"];

const CustomHotTab = () => {
  const [checkedTabs, setCheckedTabs] = React.useState<string[]>([]);
  const { getAsyncItem, setAsyncItem } = useStorage<string[]>("hot-tab");

  React.useEffect(() => {
    (async () => {
      const val = await getAsyncItem();
      setCheckedTabs(val!);
    })();
  }, []);

  const pressCheck = async (val: string) => {
    const idx = checkedTabs.indexOf(val);
    if (idx !== -1) {
      // 已经选中了，所以就要取消
      const arr = [...checkedTabs];
      arr.splice(idx, 1);
      await setAsyncItem(arr);
      setCheckedTabs(arr);
    } else {
      // 反之就是要选中
      const arr = [...checkedTabs, val].sort();
      setCheckedTabs(arr);
      await setAsyncItem(arr);
    }
  };

  return (
    <ScrollView>
      {hotTabs.map((item) => (
        <CheckBox
          key={item}
          center
          title={item}
          checked={checkedTabs.indexOf(item) !== -1}
          onPress={() => pressCheck(item)}
        />
      ))}
    </ScrollView>
  );
};

export default CustomHotTab;
