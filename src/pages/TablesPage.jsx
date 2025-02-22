import D1Table from '../components/Tables/D1Table'
import D2Table from '../components/Tables/D2Table'
import D3Table from '../components/Tables/D3Table'
import ExpandCards from '../components/Demo1/ExpandCards'  
import '../App.css';

const TablePage = () => {

  return (
    <div className=' w3-light-gray'>
      <div>
  <D1Table /> 
  </div>

  <div>
  <D2Table /> 
  </div>

  <div className='w3-light-gray'>
  <D3Table /> 
  </div>

  <ExpandCards />
  </div>
  );
}

export default TablePage;
