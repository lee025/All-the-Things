import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListIndexContainer from '../components/lists/list_index_container';
import TaskIndexContainer from '../components/tasks/task_index_container';
import ListShowContainer from '../components/lists/list_show_container';
import CreateTaskContainer from '../components/tasks/create_task_container';
import TaskDetailContainer from '../components/tasks/task_detail_container';
import ListSummaryContainer from '../components/lists/list_summary_container';


class HomePage extends React.Component {
  constructor(props){
    super(props);

  }



  render() {

    // console.log(this.props.location.pathname)
    return (
      <div>
        {/* col1 ListDropDown */}
        <ListIndexContainer /> 
        <article className="user-main">

          <div className="user-main-right">
            {/* col2 UserMain*/}

            <Route exact path='/lists' component={TaskIndexContainer} />
            <Route path='/lists/:listId/tasks' component={CreateTaskContainer} />
            <Route path='/lists/:listId' component={ListShowContainer} />
            <Route path='/lists/:listId' component={ListSummaryContainer} />
            <Route path='/lists/:listId/tasks/:taskId' component={TaskDetailContainer} />
           
          </div>

        </article>
      </div>
    )
  }
}

export default HomePage;