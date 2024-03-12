import React, { useState, useEffect } from "react";
import getClassData from "../selectionPage/getClassData";
import "./Classfield.css";
import NextClass from "../selectionPage/NextClass";

// Import the PieChart to display the percentage of courses taken
import { PieChart, Pie, Sector, ResponsiveContainer, Cell} from "recharts";

// component import
import CardList from "./CardList";

const Classfield = () => {
    const [classData, setClassData] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [recommendedClasses, setRecommendedClasses] = useState([]);
    const [completedClasses, setCompletedClasses] = useState([]);
    const [unCompletedClasses, setUnCompletedClasses] = useState([]);

    const [activeIndex, setActiveIndex] = useState(0);
    // Hold pie chart data
    const [pieData, setPieData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClassData();
                setClassData(data);
                setCompleted(data.map(item => item.completed)); // Initialize completed state
                
                const recommendedData = await NextClass();
                setRecommendedClasses(recommendedData);

                // these two functions will filter out the data array so that
                // completedCourses will hold all courses user have completed
                // and unCompletedCourses will hold all courses user haven't completed
                setCompletedClasses(data.filter((item) => {
                    return item.completed === true;
                }))
                setUnCompletedClasses(data.filter((item) => {
                    return item.completed === false;
                }))

                // get completed course for pie chart
                const completed = data.filter(c => c.completed).length;
                const notCompleted = data.length - completed;

                // Representing different course statuses for visualization
                setPieData([
                    { name: 'Taken', value: completed },
                    { name: 'Not Taken', value: notCompleted },

                ]);

            } catch (error) {
                console.error('Error fetching classes data:', error);
            }
        };

        fetchData(); // Call fetchData when the component mounts
    }, []);

    // Array of color codes for coloring each pie chart segment
    const colors = ["#84d88f", "#ff6666", "#ffcc00", "#1f456e"];
      
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
          <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Total ${value}`}</text>
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

    return (
        <div className="ml-10 mb-10">  
            <div>
                <div className="flex flex-row justify-between">
                    <div>
                        <p className="f1 b mt5"> 
                            For me   
                        </p>
                        <p className="f5">
                            Check out courses available specifically for you next quarter, all required courses in the future, and courses you have taken in the past.  
                        </p> 
                    </div>
                    <ResponsiveContainer width="40%" height={300}>
                        <PieChart>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={pieData}
                            // dir of pie chart
                            // left right
                            cx="45%"
                            // up down
                            cy= "65%"
                            innerRadius={45}
                            outerRadius={55}
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                            >
                            {/* Match the color array with corresponding segment */}
                                {
                                    // use '_' to indicate not used
                                    pieData.map((_, index) => ( 
                                        <Cell key={'cell-${index}'} fill={colors[index % colors.length]} />
                                    ))
                                }
                        </Pie>
                        </PieChart>
                    </ResponsiveContainer>  
                    {/* Pie Chart */}
                    {/* width -> parent container, height */} 
                </div>

            </div>  
            <p className="f2 b mt3">
                Available Courses
            </p>
            <CardList classes={recommendedClasses}/>
            <p className="f2 b mt3">
                Future Courses
            </p>
            <CardList classes={unCompletedClasses} />
            <p className="f2 b mt3">
                Past Courses
            </p>
            <CardList classes={completedClasses} />
        </div>
    );
}

export default Classfield;