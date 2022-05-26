/**
 * membuat const StyledFooter lalu diimport
 */
 import styled from "styled-components";

 const StyledFooter = styled.container`
      background-color: #2450E5;
      color: #fff;
      padding: 1rem;
      text-align: center;
     
     //Footer.module.css
 
.footer__title {
  margin-bottom: 1rem;
}


/* Medium Screen */
@media (min-width: 768px) {
  /*
   * Nothing TODO here.
   * We dont change styling footer. 
   */
}

/* Large Screen */
@media (min-width: 992px) {
  /*
   * Nothing TODO here.
   * We dont change styling footer. 
   */
}

 
 `
 
 export default StyledFooter;