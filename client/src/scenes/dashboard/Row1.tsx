

import DashboardBox from '@/components/DashboardBox';
import React from 'react';

type Row1Props = {

};

const Row1 = (props: Row1Props) => {

    return <>
        <DashboardBox gridArea='a'></DashboardBox>
        <DashboardBox gridArea='b'></DashboardBox>
        <DashboardBox gridArea='c'></DashboardBox>
    </>
}
export default Row1;