import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { fetchResults } from '../../redux/actions';
import styles from './dashboard.module.css'; 
import { mockResults } from './constants';

export function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  
  let { results, tokenExpired }  = user;
  const savedToken = localStorage.getItem('token');
    // Filter the resuts based on the events that are finished and then sort.
    // TODO: move this logic into a helper method.
    let filteredResults = results.filter(eachData=> eachData.event === 'finish');
    filteredResults = filteredResults.sort((a, b)=> a.time - b.time);
    let timeInterval=0;

   // results = mockResults;
  // This should be ideally in appContants file. But since we don't have too many contants, keeping it here
  const ONE_MINUTE = 1*60*1000; 
    // TODO: implement websocket if the server pushes notification in realtime
  const pollResults = ()=>{
    dispatch(fetchResults(savedToken));//Dispatch once and then set the intrval
    timeInterval= setInterval(()=>{
      dispatch(fetchResults(savedToken))
    }, ONE_MINUTE)
  }  
  
   // useEffect(
	// 	() =>{
  //    if(!results.length){
  //       pollResults()
  //    }
  //   }, []);


  if(tokenExpired || !savedToken){
    clearInterval(timeInterval) //Clear the polling
    return <Redirect to='login'/>
  }

  if(!results.length){
    pollResults()
    return "Fetching Results..."
  }

  return (
    <div>
      <div className={styles.top}>
        <h1>This is Dashboard</h1>

        <div className={styles.column} >
          <div>
            <span>No</span>
            <span>Horse</span>
            <span>Time</span>
            <span>Event</span>
          </div>
            {
              filteredResults.map(k=>{
                return <div key={k.horse.id}>
                  <span>{k.horse.id}</span>
                  <span>{k.horse.name}</span>
                  <span>{`${k.time/1000}s`}</span>
                  <span>{k.event}</span>
                </div>
              })
            }
       </div>
       
      </div>
    </div>
  );
}
