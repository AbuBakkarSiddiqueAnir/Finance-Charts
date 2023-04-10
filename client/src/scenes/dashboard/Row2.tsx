

import DashboardBox from '@/components/DashboardBox';
import React from 'react';

type Row2Props = {

};

const Row2 = (props: Row2Props) => {

    return <>
        <DashboardBox gridArea='d'></DashboardBox>
        <DashboardBox gridArea='e'></DashboardBox>
        <DashboardBox gridArea='f'></DashboardBox>
    </>
}
export default Row2;