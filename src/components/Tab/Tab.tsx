import React, { useState } from 'react';
import FilledTab from './FilledTab';
import { TabType } from '../../Types';
import { StyledTab } from './style';

const Tab: React.FC<TabType> = ({ tabs, type }) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<number | null>(null);

    const handleTabSelect = (index: number) => setSelectedTabIndex(index);
    const selectedTab = selectedTabIndex !== null ? tabs[selectedTabIndex] : null;

    return (
        <>
            <StyledTab type={type}>
                {tabs.map((tab, index) => (
                    <FilledTab
                        index={index}
                        type={type}
                        key={index}
                        tab={tab}
                        isSelected={index === selectedTabIndex}
                        onSelect={() => handleTabSelect(index)}
                    />
                ))}
            </StyledTab>
            {selectedTab && selectedTab.children}
        </>
    );
};

export default Tab;
