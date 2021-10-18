import { useSelector, useDispatch } from 'react-redux';
import { fetchResults } from '../../redux/actions';

export function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { results}  = user;

  if(!results){
    dispatch(fetchResults(localStorage.getItem('token')));
    return "Fetching Results..."
  }

  return (
    <div>
      <div style={{marginTop: '100px'}}>
        <h1>This is Dashboard</h1>

        <>
            <label>Event</label><span>{results.event}</span>
            <label>Horse</label><span>{results.horse[0]}</span>
            <label>Time</label><span>{results.time}</span>
      </>
       
      </div>
    </div>
  );
}
