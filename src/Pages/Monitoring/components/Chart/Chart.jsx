import React from "react";
import {PieChart, Pie, ResponsiveContainer, Label} from "recharts";
import classes from "./Chart.module.scss";

const Chart = ({percent, project}) => {
    let max = 100;

    const data01 = [
        {
            name: "blue",
            value: percent,
            fill: "#3479ff",
        },
        {
            name: "grey",
            value: max - percent,
            fill: "#ecf4ff",
        },
    ];

    return (
        <div className={classes["chart"]}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data01}
                        dataKey="value"
                        outerRadius={48}
                        innerRadius={38}
                        startAngle={-140}
                        endAngle={-400}
                        stroke="none"
                    >
                        <Label
                            value={`${data01[0].value.toFixed(1)}%`}
                            position="center"
                            fill="var(--theme-color-text)"
                            fontWeight={500}
                            dy={-10}
                            style={{fontSize: 16}}
                        />
                        <Label
                            value={project}
                            position="center"
                            fill="var(--theme-color-text)"
                            fontWeight={400}
                            dy={18}
                            style={{fontSize: 14}}
                        />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
