import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import ContactForm from "../common/ContactForm";
import FAQ from "../common/FAQ";
import Layout from "../Layout";

const Contact = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Contact Us' />

      <section className='section' style={{ borderTop: "1px dashed #dadada" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='contact-wrapper'>
                <div className='row'>
                  <div className='col-lg-5'>
                    <FAQ />
                  </div>
                  <div className='col-lg-7'>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
