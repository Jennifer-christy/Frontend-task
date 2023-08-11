import "./Content.css"
import EmpCards from '../EmpCards/EmpCards'
import { empData } from '../utils/data'
import Footer from '../Footer/Footer'

const Content = ({onClick}) => {
 return (
    <div className='content'>

      <div className='cards'> 
        {empData.map((employee) => (
        <EmpCards
          key={employee.id}
          image= {employee.image} 
          name={employee.name}
          jobrole={employee.jobrole}
          exp={employee.exp}
          percent={employee.percent}
          onClick={() => onClick(employee)}
        />
        ))}
      </div>
        
      <Footer/>

    </div>
  )
}

export default Content
