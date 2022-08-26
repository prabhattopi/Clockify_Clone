import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {GrAddCircle} from 'react-icons/gr';
import {BsFillTagsFill} from 'react-icons/bs';
import {FiDollarSign} from 'react-icons/fi';
import styles from './Styles/TaskInput.module.css';
import useTimer from './useTimer';
import useDateHook from './useDateHook';
import { postTasksApi } from '../../Redux/Tasks/Task.actions';


const TaskInput = () => {
    const {timerOn,sec,min,hrs,handleTimer}=useTimer();
    const [name,setName]=useState("");
    // const {hours,minutes,seconds}=useDateHook();
    const dispatch=useDispatch();
    
    const handleSubmit=()=>{
        if(timerOn){
          handleTimer();
          dispatch(postTasksApi());
        }else{
            handleTimer();         
        }
    }
  return (
        <div className={styles.Task}>
       <div className={styles.Desc}>
            <input type="text" placeholder='What Are You Working On' onChange={(e)=>setName(e.target.value)}/>
            <div className={styles.Projects}>
            <GrAddCircle style={{fontSize:"20px",color:"#1cb9f7"}}/>
                <h6>Project</h6>
            </div>
            <div className={styles.Tags}>
                <BsFillTagsFill style={{fontSize:"25px"}}/>
            </div>
            <div className={styles.Tags}>
                <FiDollarSign style={{fontSize:"25px"}}/>
            </div>
            <div className={styles.Timer}>
                <h6>{hrs<10 ? "0" + hrs : hrs}:{min<10 ? "0" + min : min}:{sec<10 ? "0" + sec : sec}</h6>
                <button className={timerOn?styles.Red:styles.Blue} onClick={handleSubmit}>{timerOn ? "Stop":"Start"}</button> 
            </div>            
       </div>
    </div>
  )
}

export default TaskInput;