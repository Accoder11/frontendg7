import React from 'react';

const Contact = () => {
    return (
        <div className='container contact-page'>
            <h1 className='page-title'>Contact Us Page</h1>

        <div className="form-area mb-3">
        <div className="container">
            <div className="row single-form g-0">
                <div className="col-sm-12 col-lg-6">
                    <div className="left">
                        <h2><span>Lets talk about your favorite food</span> <br />Contact us now!</h2>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <div className="right">
                       <i className="fa fa-caret-left"></i>
                        <form>
                          <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                          <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                          <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Message</label>
                              <textarea type="password" className="form-control" id="exampleInputPassword1"></textarea>
                          </div>
                          <button type="submit" className="btn contact-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Contact;