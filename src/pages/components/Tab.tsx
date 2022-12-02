import { Tab } from 'components';

const TabLayout = () => {
  return (
    <div className="py-3">
      <Tab.Wrapper>
        <Tab.Panel index={0}>탭1</Tab.Panel>
        <Tab.Panel index={1}>탭2</Tab.Panel>
        <Tab.Context index={0}> 탭1 내용 </Tab.Context>
        <Tab.Context index={1}> 탭2 내용 </Tab.Context>
      </Tab.Wrapper>
    </div>
  );
};

export default TabLayout;
