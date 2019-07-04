class HelloMessage extends React.Component {
  constructor(props) {
	super(props);
	this.state = {};
	$.ajax({
	     type: 'POST',
	     url: '/api/testRestful.api',
	     data: {},
	     dataType: 'JSON',
	     timeout: (cfg.timeout) ? cfg.timeout : (6 * 1000),
	     success: function(resultData){
		     console.log('---resultData--->');
		     console.log(resultData);
	     },
	     error : function(xhr, textStatus, error) { 
	     }
	  }); 
	this.val = 1234;
  }
  render() {
    return (
      <div>
        Hello {this.props.name}
        <hr/>{this.val}<hr/>
      </div>
    );
  }
}

$(document).ready(function() {
  ReactDOM.render(
    <HelloMessage name="" />,
    document.getElementById('bob')
  );
});
