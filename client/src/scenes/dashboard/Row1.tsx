

import DashboardBox from '@/components/DashboardBox';
import { useGetKpisQuery } from '@/state/api';
import React from 'react';

type Row1Props = {

};

const Row1 = (props: Row1Props) => {
    const {data} = useGetKpisQuery()
    console.log(data)


    return <>
        <DashboardBox gridArea='a'></DashboardBox>
        <DashboardBox gridArea='b'></DashboardBox>
        <DashboardBox gridArea='c'></DashboardBox>
    </>
}
export default Row1;