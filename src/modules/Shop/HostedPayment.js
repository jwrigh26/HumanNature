import React, { useRef, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const token =
  'TaUe2EpKIGK1ccAeyUzwkyINBL820EWbFTV7SaLCXwHSQR3IMtELaRAH94LPnIcNnrRGSCzbZ8gONkIiLA2jK2nf5WwrnF077IzYJD/Zw5XXBlJ5yY3KUvL4J33vWM7XYelnUQ4XSsULJ+Yr8L8FW2MFhKm65kSPF8RmKRRfbBiJG6n3/gdQhVrBa30dBerf0r8W1aN17OTvYaAwDQ7Zlof78RyDaRWydHyTa4w7eUnj1zRbDhkrrYgHGWehhSbGeabtX/lTpwhJdZE3BZeRWWmEI+eAx7ALWgRAijWUw5VxEnoivr6ukkUxWNesHFZUjh2uNejk1QB619LWfRmzq+RwEn9WJU8Tewe8xscvkMXJoXuDlpyYRE5anff/dyxiiNoXiyPF2zNm6DsnBCnVLi68VziN9VUGwu7/heFuLnbLSlptmQNv3COIyF3TDkXQzG8rAYwR5GConidMn5PJB6u9CJDOZgIptI91xgnXCzkaevp1n3BNqro1OUaGc3FeJrp3/WiTBcCzukVFZeQFFvctONCyFReDK3Br/7DJRr+YhzsvplYqkXnw7Swui7Dx+yxybmQraJMeNM01+NpSh2WWoBNPnigK7/JfDsxakiVCy0Ve+fLOqm1yqO7LaX+88nhPPnxzVyEcoAVqmj5zlKfGC3wsHtCOM0NZX29iHGSHsoiSRCwNxqU9/5DO6T8Gzph+MFkvJzoRqzThMsqvWgr+7+DjPiPmY13wqAWMcFHZXdKYdvKN1hOtlHQnyfdJ7Ul7/mG0ZBgCy2eqv6BH3JJ+l21liCwNzx/BtxotYJEe8eK6WvkGvRQBKzODDZATBNe6BjjuGiZXg2WIDvREm2AiiUnrXS9UqIW4psYsSQM=.99QWcd7W';

export default function HostedPayment() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const formRef = useRef();

  const [hidden, setHidden] = useState(true);

  const testURL = 'https://test.authorize.net/payment/payment';

  async function handleShowPaymentForm(e) {
    e.preventDefault();
    setHidden(false);
    if (formRef) {
      formRef.current.submit();
    }
  }

  const style = { width: '90%', maxWidth: '1000px' };

  return (
    <div className={classes.root}>
      <div>Open Authorize.net in an iframe to complete transaction</div>
      <div id="iframe_holder" className="center-block" style={style}>
        <iframe
          id="hosted_payment"
          className="embed-responsive-item panel"
          name="hosted_payment"
          width="100%"
          frameBorder="0"
          scrolling="no"
          hidden={hidden}
        ></iframe>
      </div>
      <form
        onSubmit={handleShowPaymentForm}
        id="send_token"
        ref={formRef}
        action={testURL}
        method="post"
        target="hosted_payment"
      >
        <input type="hidden" name="token" value={token} />
        <button id="btnOpenAuthorizeNetIFrame" type="submit">
          Show Payment Form
        </button>
      </form>
    </div>
  );
}
