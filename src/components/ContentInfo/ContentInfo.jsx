import ErrorCard from '../ErrorCard/ErrorCard';
import { Component } from 'react';
import { getNews } from 'services/getNews';


const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolve',
}

class ContentInfo extends Component {
  state = {
    news: null,
    // isLoading: false,
    error: '',
    status: STATUS.IDLE,
  };
  componentDidUpdate(prevProps, prevState) {
      if (prevProps.searchText !== this.props.searchText) {
      this.setState({ status: STATUS.PENDING});
          getNews(this.props.searchText)
          
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok')
            this.setState({ news: data.articles, status: STATUS.RESOLVED });
          else return Promise.reject(data.message);
        })
        .catch(error => {
          console.log('error', error);
          this.setState({ error, status: STATUS.REJECTED });
        });
      // .finally(() => {
      //   this.setState({ isLoading: false });
      // });
    }
  }

  render() {
    const { news, error } = this.state;
    if (this.state.status === 'pending')
      return (
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    else if (this.state.status === 'resolved')
      return (
        <ul>
          {news.map(el => {
            return <li key={el.url}> {el.title}</li>;
          })}
        </ul>
      );
    else if (this.state.status === 'rejected')
      return <ErrorCard>{error}</ErrorCard>;

    // return (
    //   <>
    //     {error && <ErrorCard>{this.state.error}</ErrorCard>}
    //     {isLoading && (
    //       <div className="spinner-grow" role="status">
    //         <span className="visually-hidden">Loading...</span>
    //       </div>
    //     )}
    //     <ul>
    //       {news &&
    //         news.map(el => {
    //           return <li key={el.url}> {el.title}</li>;
    //         })}
    //     </ul>
    //   </>
    // );
  }
}

export default ContentInfo;
