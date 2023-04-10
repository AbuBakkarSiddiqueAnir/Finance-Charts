

import DashboardBox from '@/components/DashboardBox';
import { useGetKpisQuery } from '@/state/api';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    ResponsiveContainer,
    CartesianGrid,
    AreaChart,
    BarChart,
    Bar,
    LineChart,
    XAxis,
    YAxis,
    Legend,
    Line,
    Tooltip,
    Area,
} from "recharts";

type Row1Props = {

};

const Row1 = (props: Row1Props) => {
    const { data } = useGetKpisQuery()
    const { palette } = useTheme()
    const revenueExpenses = React.useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue,
                    expenses
                }
            })
        )
    }, [data])


    return <>
        <DashboardBox gridArea='a'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={300}
                    data={revenueExpenses}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type='monotone'
                        dataKey={'revenue'}
                        stroke={palette.primary.main}
                        fillOpacity={1}
                        fill='url(#colorRevenue'
                    />
                </AreaChart>
            </ResponsiveContainer>

        </DashboardBox>
        <DashboardBox gridArea='b'></DashboardBox>
        <DashboardBox gridArea='c'></DashboardBox>
    </>
}
export default Row1;