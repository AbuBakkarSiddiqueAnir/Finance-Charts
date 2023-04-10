

import DashboardBox from '@/components/DashboardBox';
import React from 'react';

type Row1Props = {

};

const Row1 = (props: Row1Props) => {

    return <>
        <DashboardBox gridArea='g'></DashboardBox>
        <DashboardBox gridArea='h'></DashboardBox>
        <DashboardBox gridArea='i'></DashboardBox>
        <DashboardBox gridArea='j'></DashboardBox>
    </>
}
export default Row1;