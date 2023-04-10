

import DashboardBox from '@/components/DashboardBox';
import React from 'react';

type Row3Props = {

};

const Row3 = (props: Row3Props) => {

    return <>
        <DashboardBox gridArea='g'></DashboardBox>
        <DashboardBox gridArea='h'></DashboardBox>
        <DashboardBox gridArea='i'></DashboardBox>
        <DashboardBox gridArea='j'></DashboardBox>
    </>
}
export default Row3;