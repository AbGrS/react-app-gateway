import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { fetchResults } from '../../redux/actions';
import styles from './dashboard.module.css'; 

export function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  let { results, tokenExpired }  = user;

  const savedToken = localStorage.getItem('token');

  results = {
      event: 'finish',
      horse: {id: 1, name:'chepauk'},
      time: 11232
    }

  useEffect(
		() =>{
     if(!results){
        dispatch(fetchResults(savedToken))
      }
    }, []);

  if(tokenExpired || !savedToken){
    return <Redirect to='login'/>
  }


  if(!results){
    dispatch(fetchResults(localStorage.getItem('token')));
    return "Fetching Results..."
  }

  // const horses = results.reduce((res, acc)=>{
  //   return {
  //     [res]
  //   }
  // })
  // {
  //   event: 'finish',
  //   horse: [{id: 1, name:'chepauk'}],
  //   time: 11232
  // }
  return (
    <div>
      <div className={styles.top}>
        <h1>This is Dashboard</h1>

        <div className={styles.column} >
           <div>
              <label>Event</label>
              <span>{results.event}</span>
           </div>
            <div>
              <label>Horse</label>
              <span>{results.horse.name}</span>
            </div>
            <div>
               <label>Time</label>
               <span>{results.time}</span>
            </div>
       </div>
       
      </div>
    </div>
  );
}
