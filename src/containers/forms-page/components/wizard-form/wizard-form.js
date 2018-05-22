import React, { Component } from 'react';
import WizardPageOne from './wizard-form-pages/wizard-page-one';
import WizardPageTwo from './wizard-form-pages/wizard-page-two';
import WizardPageThree from './wizard-form-pages/wizard-page-three';

class WizardForm extends Component {

constructor( props ) {
  super( props );
  this.nextPage = this.nextPage.bind(this);
  this.previousPage = this.previousPage.bind(this);
  this.state = {
    page:1
  }
}

nextPage = () =>{
  this.setState({
    page:this.state.page + 1
  })
}
previousPage = () =>{
  this.setState({
    page:this.state.page - 1
  })
}

render() {
  const { onSubmit } = this.props;
  const { page } = this.state;
    return (
    <div>
        {page === 1 && <WizardPageOne on={ this.nextPage } /> }
        {page === 2 && <WizardPageTwo previousPage ={ this.previousPage } onSubmit = { this.nextPage } /> }
        {page === 3 && <WizardPageThree previousPage = { this.previousPage } onSubmit = { onSubmit } /> }
    </div>

    );
  }
}

export default WizardForm;
