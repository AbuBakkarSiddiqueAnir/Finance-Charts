

import DashboardBox from '@/components/DashboardBox';
import React from 'react';

type Row1Props = {

};

const Row1 = (props: Row1Props) => {

    return <>
        <DashboardBox gridArea='d'></DashboardBox>
        <DashboardBox gridArea='e'></DashboardBox>
        <DashboardBox gridArea='f'></DashboardBox>
    </>
}
export default Row1;