class LeftBox extends React.Component {
  constructor(props) {
	super(props);
	this.props = props;
	ReactDOM.TAO.register(this);
	this.state = {};
  }
  componentDidMount() {
	var me = this;  
	ReactDOM.TAO.ajax({
	     type: 'POST',
	     url: '/api/Tao/API_PG.api',
	     data: {},
	     dataType: 'JSON',
	     timeout: (6 * 1000),
	     success: function(resultData){
		  me.setState({list : resultData.data, _TM : new Date().getTime()});
	     },
	     error : function(err) { 
	     }
	  });   
	  
  }
  componentDidUpdate(prevProps, prevState) {
	var me = this;
  }
  render() {
    return (
      <span>
        TopMenu
	<hr/>	        
	{(this.state._TAOstate) ? this.state._TAOstate.hello : ''}
      </span>
    );
  }
}
