import { Collapse } from 'antd';
import "./indicator.css"

const text = "This is me .. the tex";
const PanelInfo = ({})=>{
    return (
        <div>
            <div className='collapse-box-cover'>
                <div className='collapse-box'>
                    <div className='collapse-box-child'>
                        <p>
                            Baseline
                        </p>
                        <h2>0</h2>
                    </div>
                </div>
                <div className='collapse-box'>
                    <div className='collapse-box-child'>
                            <p>
                                Actual
                            </p>
                            <h2>0</h2>
                    </div>
                </div>
                <div className='collapse-box'>
                    <div className='collapse-box-child'>
                            <p>
                                Target
                            </p>
                            <h2>0</h2>
                    </div>
                </div>
            </div>
            <div>
                <h3>
                    List of the Projects
                </h3>
            </div>
        </div>
    )
}

const getItems = (panelStyle)=>(
    [{
      key: '1',
      label: 'No of Commmunities Sensitized',
      children: <PanelInfo />,
      style: panelStyle,
    },
    {
      key: '2',
      label: 'Number of EOS submitted',
      children: <PanelInfo />,
      style: panelStyle,
    },
    {
      key: '3',
      label: 'No of SBMC established',
      children: <PanelInfo />,
      style: panelStyle,
    }])
const Indicator = () => {
    const panelStyle = {
        fontSize: 15,
        fontWeight: 400,
    }
    const onChange = (key)=>{
        
    }
    return ( 
        <div>
            <h1 className='header'>Indicator Management</h1>
            <div className='box'>
            <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition={"end"}
        items={getItems(panelStyle)}
        className='collapsible'
      /></div>
        </div>
        
     );
}
 
export default Indicator;