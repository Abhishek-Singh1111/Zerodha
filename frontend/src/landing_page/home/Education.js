import React from 'react'
function Education() {
    return (
       <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
         <div className="row align-items-center g-4">
           <div className="col-12 col-lg-6 text-center">
             <img
               src="/media/education.svg"
               alt="Education"
               className="img-fluid"
               style={{ maxWidth: "520px", width: "100%" }}
             />
           </div>
           <div className="col-12 col-lg-6">
             <h2 className="mb-3">Free market education</h2>
             <p className="mb-3">
               Our educational resources are designed to help you learn about
               investing and trading, and to provide you with the knowledge and
               tools you need to make informed decisions about your investments.
             </p>
             <a href="/" className="text-decoration-none d-inline-flex align-items-center gap-2">
               Explore education <i className="fa-solid fa-arrow-right" />
             </a>
           </div>
         </div>
       </section>
    )
}
export default Education
