import React from 'react'
import { useState } from 'react'
import './Home.css'

const Home = () => {
const [inputs, setinputs]=useState({
    name:'',
    email:'',
});
const [tabledata, settabledata]=useState([])

const [editclick,seteditclick]=useState(false);

const [editindex,seteditindex]=useState('')
   
  const handleChange = (e) => {
    setinputs({
    ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log(inputs);

    if(editclick)
    {
        const temptabledata = tabledata;
        Object.assign(temptabledata[editindex],inputs);
        settabledata([...temptabledata]);
        seteditclick(false);
    }
    else{
    settabledata([...tabledata,inputs])
     setinputs({
        name:"",
        email:""
     });
    };
};
   
    // console.log('tabledata', tabledata)
  const Delete=(index)=>{
    const filterData = tabledata.filter((item,i)=>i!==index);
    settabledata(filterData);
  };
  const edit=(index)=>{
    const tempdata = tabledata[index];
    setinputs({
        name:tempdata.name,
        email:tempdata.email
    });
    seteditclick(true);
    
    seteditindex(index);

  };

  return (
    <center>
    <div>
        <h3>CRUD OPERATIONS</h3>
        <form onSubmit={handleSubmit}>
            <label>Name</label> 
            <input type="text"
             placeholder='enter ur name'
             name='name' 
             value={inputs.name}
             onChange={handleChange}/>
            <br /> <br />
            <label>Email</label>
            
            <input type="email"
             placeholder='enter ur email'
             name='email'
             value={inputs.email}
             onChange={handleChange}/>
             <br/>
             <br />
             <button 
             type='submit' className='add'>
            {editclick ? "update":"Add"}
                </button>
        </form>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
             {
              tabledata.map((item,i)=>
              (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <button className='edit' onClick={()=>edit(i)}>edit</button>
                        <button className='delete' onClick={()=>Delete(i)}>delete</button>

                    </td>
                </tr>
              ))
             }                
            </tbody>
        </table>
    </div>
    </center>
  )
}

export default Home;