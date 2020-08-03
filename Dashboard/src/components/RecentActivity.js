import React from 'react';
import './css/RecentActivity.css';

const RecentActivity = () =>{
  return(
    <section>
      <header>
      <h7>Recent Activity</h7>
      <div className="menu"><i className="fas fa-ellipsis-v"></i></div>
      </header>
        <div className="time-line">
            <div className="time">27 min</div>
            <div className="icon1"><i id = "icon1" className="fas fa-circle"></i></div>
            <div className="text">New order placed!<strong> Order #2912</strong> has been successfully placed. .</div>
            <div className="time">58 min</div>
            <div className="icon2"><i id = "icon2" className="fas fa-circle"></i></div>
            <div className="text">Your <strong>weekly report</strong> has been generated and is ready to view. </div>
            <div className="time">2 hrs</div>
            <div className="icon3"><i id = "icon3" className="fas fa-circle"></i></div>
            <div className="text">New user <strong>Valerie Luna</strong> has registered </div>
            <div className="time">1 day</div>
            <div className="icon"><i id = "icon4" className="fas fa-circle"></i></div>
            <div className="text">Server activity monitor alert</div>
            <div className="time">1 day</div>
            <div className="icon5"><i id = "icon5" className="fas fa-circle"></i></div>
            <div className="text">New order placed! <strong>Order #2911</strong> has been successfully placed. </div>
            <div className="time">1 day</div>
            <div className="icon6"><i id = "icon6" className="fas fa-circle"></i></div>
            <div className="text">Details for <strong>Marketing and Planning Meeting</strong> have been updated. </div>
            <div className="time">2 day</div>
            <div className="icon"><i id = "icon7" className="fas fa-circle"></i></div>
            <div className="text">New order placed! <strong>Order #2910</strong> has been successfully placed. </div>
       </div>
    </section>
  )
}
export default RecentActivity;
