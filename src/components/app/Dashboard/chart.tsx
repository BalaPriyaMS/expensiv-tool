import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    // Chart Configuration
    const options = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "center",
        orient: "vertical",
        left: "center",
      },
      series: [
        {
          name: "Member Contributions",
          type: "pie",
          radius: ["40%", "70%"],
          center: ["20%", "40%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },

          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Bala" },
            { value: 735, name: "Ashitha" },
            { value: 580, name: "Priya" },
            { value: 484, name: "Jacob" },
            { value: 300, name: "Pinky" },
          ],
        },
      ],
    };

    chartInstance.setOption(options);

    // Resize chart on window resize
    const handleResize = () => chartInstance.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.dispose();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{ width: "100%", height: "250px" }}
      // className=" right-66"
    />
  );
};

export default Chart;
