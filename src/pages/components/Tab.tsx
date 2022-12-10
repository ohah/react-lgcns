import { Tab } from 'components';

const TabLayout = () => {
  return (
    <div className="py-3">
      <h2>Q. useMemo를 활용하여 ContextChildren값을 index의 값에 따라 변경하세요.</h2>
      <Tab.Wrapper defaultIndex={1}>
        <Tab.Panel index={0}>탭1</Tab.Panel>
        <Tab.Panel index={1}>탭2</Tab.Panel>
        <Tab.Context index={0}> 탭1 내용 </Tab.Context>
        <Tab.Context index={1}> 탭2 내용 </Tab.Context>
      </Tab.Wrapper>
    </div>
  );
};

export default TabLayout;
