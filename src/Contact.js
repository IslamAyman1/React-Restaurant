import React from 'react';
function Contact() {
  
  return (
  <>
      <div class=" my-5 py-5 z-depth-1">
<section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
  <div id="map-container-google-1" class="z-depth-1 map-container mb-5">
    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
      style={{border:'0'}} allowfullscreen></iframe>
  </div>

  <div class="row">

    
    <div class="col-lg-5 col-md-12 mb-0 mb-md-0">

      <h3 class="font-weight-bold">Contact Us</h3>

      <p class="text-muted">This is a standard classic contact form that contains name, email and message fields. If you want your customers to communicate with you or your business, use ...
</p>

      <p><span class="font-weight-bold mr-2">Email:</span><a href="">IslamAy@Rest.com</a></p>
      <p><span class="font-weight-bold mr-2">Phone:</span><a href="">01223826220</a></p>

    </div>
    
    <div class="col-lg-7 col-md-12 mb-4 mb-md-0">

     
      <div class="row">

       
        <div class="col-md-6">

          
          <div class="md-form md-outline mb-0">
            <input type="text" id="form-first-name" class="form-control"/>
            <label for="form-first-name">First name</label>
          </div>

        </div>
       
        <div class="col-md-6">

         
          <div class="md-form md-outline mb-0">
            <input type="text" id="form-last-name" class="form-control"/>
            <label for="form-last-name">Last name</label>
          </div>

        </div>
        

      </div>
      

     
      <div class="md-form md-outline mt-3">
        <input type="email" id="form-email" class="form-control"/>
        <label for="form-email">E-mail</label>
      </div>

     
      <div class="md-form md-outline">
        <input type="text" id="form-subject" class="form-control"/>
        <label for="form-subject">Subject</label>
      </div>

     
      <div class="md-form md-outline mb-3">
        <textarea id="form-message" class="md-textarea form-control" rows="3"></textarea>
        <label for="form-message">How we can help?</label>
      </div>

      <button type="submit" class="btn btn-info btn-sm ml-0">Submit<i class="far fa-paper-plane ml-2"></i></button>

    </div>
   
  </div>
  


</section>


</div>



<footer class="page-footer font-small special-color-dark pt-4" style={{marginTop:'100px'}}>
 
 
  <div class="container">

   
    <div class="row">

     
      <div class="col-md-6 mb-4">

       
        <form class="form-inline">
          <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
            aria-label="Search"/>
          <i class="fas fa-search" aria-hidden="true"></i>
        </form>
       

      </div>
     
      <div class="col-md-6 mb-4">

        <form class="input-group">
          <input type="text" class="form-control form-control-sm" placeholder="Your email"
            aria-label="Your email" aria-describedby="basic-addon2"/>
          <div class="input-group-append">
            <button class="btn btn-sm btn-outline-white my-0" type="button">Sign up</button>
          </div>
        </form>

      </div>
     

    </div>
    

  </div>
 
  <div class="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/">Islam Ayman</a>
  </div>
 

</footer>

  </>
  )
}
export default Contact