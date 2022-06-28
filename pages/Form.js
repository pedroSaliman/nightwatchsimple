
const elements={
  
 email:"#Email",
 pass:"#Password",
 btn:"button[type='submit']",
 
};
const commands=[{

entervalue(theemail,thepass){
  return this
  .isVisible("@email")
  .clearValue("@email")
  .setValue("@email",theemail)
  .isVisible("@pass")
  .clearValue("@pass")
  .setValue("@pass",thepass)
  .isVisible("@btn")
  .click("@btn")
  
  

},





}];



module.exports = {
  elements:elements,
  commands:commands,
  url:"https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"


  

    
  };
  