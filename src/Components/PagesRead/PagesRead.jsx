import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ReadBookList } from "../LevelContext/LevelContext";
import "./PagesRead.css";

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
      y + height / 3
    } 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  
  const TriangleBar = ({background,fill}) => {
    const {x,y,width,height} = background;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  

const PagesRead = () => {
  const [readlist] = useContext(ReadBookList);
  console.log(readlist);
  return (
    <div className="bg-[#13131308]">
        <ResponsiveContainer width="100%" height={700}>
      <BarChart
        data={readlist}
        margin={{
          top: 100,
          right: 100,
          left: 100,
          bottom: 100
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip/>
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {readlist.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 10]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default PagesRead;
TriangleBar.propTypes = {
    background:PropTypes.object,
    fill:PropTypes.string,

}
