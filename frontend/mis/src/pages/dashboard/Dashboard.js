import { Chart as ChartJs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./dashboard.css"
import { FaRocket } from "react-icons/fa";

const Dashboard = () => {
    return ( <div>
        <h2 className="header">Analytics</h2>
        <div className="box">
            <div className="section-metrics">
                <div className="section-metrics-box">
                <div class="metrics-box" style={{backgroundColor:"#fce76273"}}>
                    <div>
                        <p>Number of Projects</p>
                        <h2>3</h2>
                    </div>
                    <div>
                        <FaRocket color="#fce762" />
                    </div>
                </div>
                </div>
                <div className="section-metrics-box">
                <div className="metrics-box" style={{backgroundColor:"#69fff06f"}}>
                    <div>
                        <p>On Track</p>
                        <h2>10</h2>
                    </div>
                    <div>
                        <FaRocket color="#69fff0" />
                    </div>
                </div></div>
                <div className="section-metrics-box">
                <div className="metrics-box" style={{backgroundColor:"#5465ff6c"}}>
                    <div>
                        <p>In Progress</p>
                        <h2>5</h2>
                    </div>
                    <div>
                        <FaRocket color="#5465ff" />
                    </div>
                </div></div>
                <div className="section-metrics-box">
                <div className="metrics-box" style={{backgroundColor:"#f45b6876"}}>
                    <div>
                        <p>Below Target</p>
                        <h2>6</h2>
                    </div>
                    <div>
                        <FaRocket color="#f45b68" />
                    </div>
                </div></div>
                
                </div>
        </div>
        <div className="box">
            <Bar 
                data={{
                    labels:['Kaduna',"Borno","Gombe",'Kano'],
                    datasets:[
                        {
                            label:'Revenue',
                            data:[1000000,3000000,5000000,2500000]
                        }
                    ]
                }}
                style={{
                    maxHeight: "60vh"
                }}
            />
        </div>

    </div> );
}
 
export default Dashboard;