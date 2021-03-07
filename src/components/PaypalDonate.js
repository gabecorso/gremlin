import React, {Component,Fragment} from 'react';
import ReactHtmlParser from 'react-html-parser';



class PaypalDonate extends Component {
    render() {
      const html = '<form action="https://www.paypal.com/donate" method="post" target="_top"> \
                    <input type="hidden" name="hosted_button_id" value="XBDVULX4NFZ7Q" /> \
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" width="200" height="100" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /> \
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="150" /> \
                    </form>';
      return <div>{ ReactHtmlParser(html) }</div>;
    }
  }


export default PaypalDonate;