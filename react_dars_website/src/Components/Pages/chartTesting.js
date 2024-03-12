import React, { useState } from "react";

// Import the PieChart to display the percentage of courses taken
import { PieChart, Pie, Sector, ResponsiveContainer, Cell} from "recharts";

// import style .css file
import "./chartTesting.css";

// Import the useNavigate to go through pages
import { useNavigate } from "react-router-dom";

function ChartTesting(){
    // Hook to utilize nevigation capability within React components
    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(0);

    // Representing different course statuses for visualization
    const data = [
        { name: 'Taken', value: 500 },
        { name: 'In Prograss', value: 100 },
        { name: 'Not Taken', value: 300 },
        { name: 'Testing', value: 100},
      ];

      // Array of color codes for coloring each pie chart segment
      const colors = ["#84d88f", "#ffcc00", "#ff6666", "#1f456e"];
      
      // Custom shape component to render the active (hovered) pie chart segment
      const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        // Calculations for positioning the label and line connectors
        // (coordinates and angle)
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
      
        // Render the custom active segment shape
        return (
          <g>
            {/* text should be horizontally centered */}
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
              {payload.name}
            </text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />
            {/* Renders a pie chart segment
                Center: (cx, cy) */}
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            /*
              stroke="black" // Outline color
              strokeWidth={0.5} // Outline thickness
            */ 
            />
            {/* starting point (sx, sy) -> middle point (mx, my) -> end point (ex, ey) */}
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            
            {/* Dynamically calculated based on the value of ending point (ex) */}
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
              {/* calculate the data points into percentage */}
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
    };

    // Update the active segment index when the mouse enters
    const onPieEnter = (_, index) => {
      setActiveIndex(index);
    };
    
    // Component layout for pie chart and a navigation button
    return (
        <div className="chartBG">
          <h1>Chart Page</h1>
          {/* width -> parent container, height */}
          <ResponsiveContainer width="45%" height={500}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                // dir of pie chart
                // left right
                cx="70%"
                // up down
                cy="40%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                onMouseEnter={onPieEnter}
                >
                {/* Match the color array with corresponding segment */}
                    {
                        // use '_' to indicate not used
                        data.map((_, index) => ( 
                            <Cell key={'cell-${index}'} fill={colors[index % colors.length]} />
                        ))
                    }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <button onClick={() => navigate("/")}>Goes back to Home page</button>
        </div>
      );
}

export default ChartTesting;
